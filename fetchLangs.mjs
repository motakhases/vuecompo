import { writeFileSync } from 'fs';
import axios from 'axios';

const api = 'https://raw.githubusercontent.com/ZarinPal/Localisation/main/';

async function write(locales) {
  writeFileSync('lang/fa-IR.js', `export default ${JSON.stringify(locales)}`);
}
function getEntityKey(entity) {
  return entity.split('.')[0];
}
async function resolveEntities(entities) {
  console.log('Fetching entities...');
  console.log('____________________');
  const locales = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const entity of entities) {
    console.log(`Fetching ${entity}...`);

    /**
     * Fetching entities
     */
    // eslint-disable-next-line no-await-in-loop
    const res = await axios.get(`${api}/fa-IR/${entity}`);

    if (res) {
      console.log('Done.');
      console.log('');

      const key = getEntityKey(entity);
      locales[key] = res.data;
    } else {
      console.error('Failed.');
    }
  }

  console.log('All locales successfully fetched.');

  return locales;
}
async function fetchIndex() {
  console.log('Fetching index.json...');

  /**
   * Fetching index
   */
  const res = await axios.get(`${api}index.json`);

  console.log('Fetch is done.');
  console.log('');

  const result = await resolveEntities(res.data.entities);
  write(result);
}

fetchIndex();
