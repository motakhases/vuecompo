import AvatarProgressBar from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { AvatarProgressBar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md flex">
		<div>
      <AvatarProgressBar
        type="beginner"
        size="small"
        percent="60"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
      <AvatarProgressBar
        type="beginner"
        size="medium"
        percent="60"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
      <AvatarProgressBar
        type="beginner"
        size="large"
        percent="60"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
    </div>
    <div>
      <AvatarProgressBar
        type="silver"
        size="large"
        percent="50"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
      <AvatarProgressBar
        type="gold"
        size="large"
        percent="80"
        img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg"
      />
    </div>
  </div>
  `,
});

const progressBar = Template.bind({});

progressBar.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["beginner", "silver", "gold"],
    control: { type: "radio" },
  },
};

progressBar.args = {
  type: "beginner",
  size: "large",
  percent: 10,
	img: "https://www.digikala.com/static/files/fd4840b2.svg",
};

export default progressBar