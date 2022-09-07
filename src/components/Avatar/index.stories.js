import Avatar from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="font-bold dark:text-surface"> آواتار </h1>
	  <Avatar size="medium" />
		<h1 class="mt-sm font-bold dark:text-surface"> سایزهای مختلف آواتار </h1>
		<div class="flex gap-lg">
	    <Avatar size="small" />
	    <Avatar size="medium" />
	    <Avatar size="large" />
	    <Avatar size="xlarge" />
		</div>
    <h1 class="font-bold dark:text-surface">  آواتار همراه با عکس</h1>
    <div class="flex gap-lg">
      <Avatar size="small" img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg" />
      <Avatar size="medium" img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg" />
      <Avatar size="large" img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg" />
      <Avatar size="xlarge" img="https://faces-img.xcdn.link/image-lorem-face-6511.jpg" />
    </div>
  </div>
  `,
});

const avatar = Template.bind({});

// avatar.argTypes = {
//   img: {
//     description: 'Image URL',
//     table: {
//       defaultValue: {
//         summary: 'null'
//       }
//     }
//   },
//   size: {
//     options: ["small", "medium", "large"],
//     control: { type: "select" },
//     description: 'Size of the avatar',
//     table: {
//       defaultValue: {
//         summary: 'medium'
//       }
//     }
//   },
// };

// avatar.args = {
//   img: "",
//   size: 'medium'
// };

export default avatar