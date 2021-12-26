import Component from "./index.vue";
import TableHeader from "./TableHeader/index.vue";
import TableHeaderItem from "./TableHeaderItem/index.vue";
import CheckBox from "@/components/CheckBox/index.vue";
import TableRow from "./TableRow/index.vue";
import TableRowItem from "./TableRowItem/index.vue";
import TableRowAction from "./TableRowAction/index.vue";
import Label from "@/components/Label/index.vue";
import Thumbnail from "@/components/Thumbnail/index.vue";
export default {
  component: Component,
  title: "Components/Table",
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
    TableHeader,
    TableHeaderItem,
    CheckBox,
    TableRow,
    TableRowItem,
    Label,
    Thumbnail,
    TableRowAction,
  },
  props: null,
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Component>
      <template v-slot:header>
        <TableHeader>
          <TableHeaderItem> عنوان یک </TableHeaderItem>
          <TableHeaderItem arrow-up> عنوان دو </TableHeaderItem>
          <TableHeaderItem> عنوان سه </TableHeaderItem>
          <TableHeaderItem arrow-up> عنوان چهار </TableHeaderItem>
          <TableHeaderItem> عنوان پنج </TableHeaderItem>
        </TableHeader>
      </template>
      <template v-slot:body>

        <TableRow>
          <TableRowItem title="نام و نام خانوادگی" subText="زیرنویس"> 
						<Thumbnail img="https://pbs.twimg.com/profile_images/700431018386272256/Qty9UFhy_400x400.png" />
					</TableRowItem>
          <TableRowItem> دو </TableRowItem>
					<TableRowItem> 
					<Label size="small" type="positive" text="سه"/>
					</TableRowItem>
          <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction/>
        </TableRow>
				<TableRow>
          <TableRowItem> یک </TableRowItem>
          <TableRowItem> دو </TableRowItem>
					<TableRowItem> 
					<Label size="small" type="positive" text="سه"/> 
					</TableRowItem>
          <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction/>
        </TableRow>
				<TableRow>
          <TableRowItem> یک </TableRowItem>
          <TableRowItem> دو </TableRowItem>
					<TableRowItem> 
					<Label size="small" type="positive" text="سه"/>
				</TableRowItem>
        <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction/>
        </TableRow>
				<TableRow>
          <TableRowItem> یک </TableRowItem>
          <TableRowItem> دو </TableRowItem>
          <TableRowItem> 
						<Label size="small" type="positive" text="سه"/>
					</TableRowItem>
          <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction></TableRowAction>
        </TableRow>
      </template>
    </Component>


    <h1 class="mt-3xl mb-md font-bold dark:text-surface"> ستون‌های هم‌اندازه </h1>
    <Component fixed>
      <template v-slot:header>
        <TableHeader fixed>
          <TableHeaderItem> عنوان یک </TableHeaderItem>
          <TableHeaderItem arrow-up> عنوان دو </TableHeaderItem>
          <TableHeaderItem> عنوان سه </TableHeaderItem>
          <TableHeaderItem arrow-up> عنوان چهار </TableHeaderItem>
          <TableHeaderItem> عنوان پنج </TableHeaderItem>
        </TableHeader>
      </template>
      <template v-slot:body>

        <TableRow>
          <TableRowItem title="نام و نام خانوادگی" subText="زیرنویس"> 
						<Thumbnail img="https://pbs.twimg.com/profile_images/700431018386272256/Qty9UFhy_400x400.png" />
					</TableRowItem>
          <TableRowItem> دو </TableRowItem>
					<TableRowItem> 
					<Label size="small" type="positive" text="سه"/>
					</TableRowItem>
          <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction/>
        </TableRow>
				<TableRow>
          <TableRowItem> یک </TableRowItem>
          <TableRowItem> دو </TableRowItem>
					<TableRowItem> 
					<Label size="small" type="positive" text="سه"/> 
					</TableRowItem>
          <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction/>
        </TableRow>
				<TableRow>
          <TableRowItem> یک </TableRowItem>
          <TableRowItem> دو </TableRowItem>
					<TableRowItem> 
					<Label size="small" type="positive" text="سه"/>
				</TableRowItem>
        <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction/>
        </TableRow>
				<TableRow>
          <TableRowItem> یک </TableRowItem>
          <TableRowItem> دو </TableRowItem>
          <TableRowItem> 
						<Label size="small" type="positive" text="سه"/>
					</TableRowItem>
          <TableRowItem> چهار </TableRowItem>
          <TableRowItem> پنج </TableRowItem>
					<TableRowAction></TableRowAction>
        </TableRow>
      </template>
    </Component>
  </div>
  `,
});

export const Default = Template.bind({});
