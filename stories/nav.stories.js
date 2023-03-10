import StoryRouter from 'storybook-vue-router';

export default {
  title: 'Components/Nav',
  decorators: [(storyFn) => StoryRouter()(storyFn)],
};

export { default as NavigationBar } from '@/components/NavigationBar/index.stories.js';
export { default as PageHeading } from '@/components/PageHeading/index.stories.js';
export { default as TopBar } from '@/components/TopBar/index.stories.js';
