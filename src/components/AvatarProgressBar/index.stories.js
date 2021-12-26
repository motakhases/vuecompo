import AvatarProgressBar from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { AvatarProgressBar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="font-bold dark:text-surface"> آواتار </h1>
    <AvatarProgressBar
      type="beginner"
      percent="60"
      img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
    />
    <h1 class="mt-sm font-bold dark:text-surface"> انواع آواتار </h1>
		<div class="flex items-center gap-md">
      <AvatarProgressBar
        type="beginner"
        percent="20"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
      <AvatarProgressBar
        type="silver"
        percent="40"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
      <AvatarProgressBar
        type="gold"
        percent="80"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
    </div>

    <h1 class="font-bold dark:text-surface"> آواتار بدون عکس </h1>
    <AvatarProgressBar
      type="beginner"
      percent="60"
    />
  </div>
  `,
});

const progressBar = Template.bind({});

progressBar.argTypes = {
  type: {
    options: ["beginner", "silver", "gold"],
    control: { type: "radio" },
  },
};

progressBar.args = {
  type: "beginner",
  percent: 10,
  img: "https://www.digikala.com/static/files/fd4840b2.svg",
};

export default progressBar;
