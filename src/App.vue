<template>
  <div
    dir="rtl"
    class="bg-[#F5F5F5] h-[2000px]"
  >
    <Dropdown
      v-model="data"
      :options="options"
      class="col-span-3"
    />
    {{ data }}
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Dropdown,
    // NavigationBar,
  },
  data() {
    return {
      // sidebar
      disabled: false,
      label: 'یک دراپ‌داون عادی',
      hint: 'یک توضیح کوتاه',
      successMessage: 'عملیات موفقیت آمیز بود',
      options: [
        { id: 1, text: 'اولین گزینه', value: 'a' },
        {
          id: 2, text: 'دومین گزینه', value: 'b', disabled: true,
        },
        { id: 3, text: 'سومین گزینه', value: 'c' },
        { id: 4, text: 'چهارمین گزینه', value: 'd' },
        { id: 5, text: 'پنجمین گزینه', value: 'e' },
      ],
      disabledOptionId: null,
      loading: false,
      rules: 'required',
      data: '',
    };
  },
  methods: {
    displayNotifications() {
      console.log('a');
    },
  },
});
</script>
