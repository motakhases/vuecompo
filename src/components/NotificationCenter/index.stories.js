import NotificationCenter from "./index.vue";
import moment from "moment-jalaali";
import Button from "@/components/Button/index.vue";

export default {
  component: NotificationCenter,
  title: "Components/NotificationCenter",
};

const Template = (_, { argTypes }) => ({
  components: { NotificationCenter, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      notif: false,
			data: [
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
					icon:"QuestionCircle"
				},
				{
					title: "عنوان",
					message: "",
					date: moment().format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "https://www.w3schools.com/css/lights600x400.jpg",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(1, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(2, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(3, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(4, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(5, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(6, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(7, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(8, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(9, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
				{
					title: "عنوان",
					message: "توضیحات",
					date: moment().subtract(10, "days").format("YYYY-M-D"),
					link: "https://next.zarinpal.com/panel/dashboard",
					image: "",
				},
			],
    };
  },
  methods: {
    toggleNotification() {
      this.notif = !this.notif;
    },
  },
  template: `
  <div class="relative border-1 border-border dark:bg-background-dark rounded-sm p-sm" dir="rtl">
		<Button
			type="primary"
			size="medium"
			text="کلیک کن"
			@click.native="$refs.notificationCenter.toggle()"
		/>
    <NotificationCenter
			ref="notificationCenter"
			:announcements="[]"
		/>
  </div>
  `,
});

export const Default = Template.bind({});
