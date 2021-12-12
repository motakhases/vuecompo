import NotificationCenter from "./index.vue";
import moment from 'moment-jalaali';

export default {
  component: NotificationCenter,
  title: "Components/NotificationCenter",
};

const Template = (_, { argTypes }) => ({
  components: { NotificationCenter },
  props: Object.keys(argTypes),
  template: `
    <NotificationCenter
      :announcements="announcements"
    />
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  announcements: [
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: '',
      date: moment().format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: 'https://www.w3schools.com/css/lights600x400.jpg',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(1, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(2, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(3, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(4, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(5, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(6, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(7, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(8, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(9, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
    {
      title: 'عنوان',
      message: 'توضیحات',
      date: moment().subtract(10, 'days').format('YYYY-M-D'),
      link: 'https://next.zarinpal.com/panel/dashboard',
      image: '',
    },
  ],
};
