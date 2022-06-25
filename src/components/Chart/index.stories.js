import Chart from "./index.vue";

export default {
  component: Chart,
  title: "Components/Chart",
};

const Template = (_, { argTypes }) => ({
  components: { Chart },
  props: Object.keys(argTypes),
  data() {
    return {
      day: [
        {
          name: 'فروش',
          data: [
            { x: '2022-06-18 01:00:00', y: 12000 },
            { x: '2022-06-18 02:00:00', y: 17000 },
            { x: '2022-06-18 03:00:00', y: 26000 },
            { x: '2022-06-18 04:00:00', y: 32000 },
            { x: '2022-06-18 05:00:00', y: 19050 },
            { x: '2022-06-18 06:00:00', y: 38000 },
            { x: '2022-06-18 07:00:00', y: 22010 },
            { x: '2022-06-18 08:00:00', y: 41010 },
            { x: '2022-06-18 09:00:00', y: 55010 },
            { x: '2022-06-18 10:00:00', y: 75010 },
            { x: '2022-06-18 11:00:00', y: 12000 },
            { x: '2022-06-18 12:00:00', y: 17000 },
            { x: '2022-06-18 13:00:00', y: 26000 },
            { x: '2022-06-18 14:00:00', y: 32000 },
            { x: '2022-06-18 15:00:00', y: 19050 },
            { x: '2022-06-18 16:00:00', y: 38000 },
            { x: '2022-06-18 17:00:00', y: 15010 },
            { x: '2022-06-18 18:00:00', y: 35010 },
            { x: '2022-06-18 19:00:00', y: 45010 },
            { x: '2022-06-18 20:00:00', y: 65010 },
            { x: '2022-06-18 21:00:00', y: 75010 },
            { x: '2022-06-18 22:00:00', y: 85010 },
            { x: '2022-06-18 23:00:00', y: 95010 },
            { x: '2022-06-18 24:00:00', y: 100010 },
          ],
        },
      ],
      week: [
        {
          name: 'فروش',
          data: [
            { x: '2022-06-18 03:14:07', y: 12000 },
            { x: '2022-06-19 02:14:07', y: 17000 },
            { x: '2022-06-20 05:19:07', y: 26000 },
            { x: '2022-06-21 02:12:07', y: 32000 },
            { x: '2022-06-22 05:15:07', y: 19050 },
            { x: '2022-06-23 12:14:07', y: 38000 },
            { x: '2022-06-24 14:14:07', y: 45010 },
          ],
        },
      ],
      month: [
        {
          name: 'فروش',
          data: [
            { x: '2022-06-01 03:14:07', y: 12000 },
            { x: '2022-06-02 05:19:07', y: 26000 },
            { x: '2022-06-03 02:12:07', y: 32000 },
            { x: '2022-06-04 05:15:07', y: 19050 },
            { x: '2022-06-05 12:14:07', y: 38000 },
            { x: '2022-06-06 14:14:07', y: 45010 },
            { x: '2022-06-07 14:14:07', y: 45010 },
            { x: '2022-06-08 14:14:07', y: 45010 },
            { x: '2022-06-09 03:14:07', y: 12000 },
            { x: '2022-06-10 03:14:07', y: 12000 },
            { x: '2022-06-11 02:14:07', y: 17000 },
            { x: '2022-06-12 05:19:07', y: 26000 },
            { x: '2022-06-13 02:12:07', y: 32000 },
            { x: '2022-06-14 05:15:07', y: 19050 },
            { x: '2022-06-15 12:14:07', y: 38000 },
            { x: '2022-06-16 14:14:07', y: 63010 },
            { x: '2022-06-17 14:14:07', y: 14010 },
            { x: '2022-06-18 14:14:07', y: 66010 },
            { x: '2022-06-19 14:14:07', y: 54010 },
            { x: '2022-06-20 14:14:07', y: 77010 },
            { x: '2022-06-21 14:14:07', y: 89010 },
            { x: '2022-06-22 14:14:07', y: 24010 },
            { x: '2022-06-23 14:14:07', y: 99010 },
            { x: '2022-06-24 14:14:07', y: 120010 },
            { x: '2022-06-25 14:14:07', y: 100010 },
            { x: '2022-06-26 14:14:07', y: 90010 },
            { x: '2022-06-27 14:14:07', y: 133010 },
            { x: '2022-06-28 14:14:07', y: 122010 },
            { x: '2022-06-29 14:14:07', y: 121010 },
            { x: '2022-06-30 14:14:07', y: 144010 },
          ],
        },
      ],
    }
  },
  template: `
    <div class="dark:bg-surface-dark box-border grid w-full grid-cols-2 p-xl gap-xl">
      <div class="col-span-1">
        <span class="bg-secondary dark:bg-secondary-dark dark:text-text-dark rounded-sm px-xs py-2xs font-Mono">
        x-type: day
        </span>
        <Chart :series="day" x-type="day" />
      </div>

      <div class="col-span-1">
        <span class="bg-secondary dark:bg-secondary-dark dark:text-text-dark rounded-sm px-xs py-2xs font-Mono">
          x-type: week
        </span>
        <Chart :series="week" x-type="week" />
      </div>

      <div class="col-span-1">
        <span class="bg-secondary dark:bg-secondary-dark dark:text-text-dark rounded-sm px-xs py-2xs font-Mono">
          x-type: month
        </span>
        <Chart :series="month" x-type="month" />
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
