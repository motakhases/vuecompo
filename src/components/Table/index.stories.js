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
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
    <Component :fixed="fixed">
      <template v-slot:header>
        <TableHeader :fixed="fixed">
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
						<Thumbnail img="https://www.digikala.com/static/files/fd4840b2.svg" />
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

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["primary", "secondary", "tertiary"],
    control: { type: "radio" },
  },
};

Default.args = {
  size: "large",
  fixed: false,
  arrowUp: false,
  arrowDown: false,
};
