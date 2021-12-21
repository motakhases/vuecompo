import Modal from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Modal,
  title: "Components/Modal",
};

const Template = (_, { argTypes }) => ({
  components: { Modal, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
  },
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md relative z-10" dir="rtl">
		<Button
			type="primary"
			size="medium"
			text="کلیک کن"
			@click.native="toggleModal"
		/>
		<Modal :title="title" :is-open="modal" :toggle="toggleModal">
			<div slot="body">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
				استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
				ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
				کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
				در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
				طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
				الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
				صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
				شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
				اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
				قرار گیرد.
			</div>
			<div slot="footer">
				<Button
					type="primary"
					size="medium"
					:text="ButtonText"
					class="float-left"
				/>
			</div>
		</Modal>
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  title: "تست عنوان",
  ButtonText: "دکمه",
};
