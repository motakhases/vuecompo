import Upload from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Upload,
  title: "Components/Upload",
};

const Template = (_, { argTypes }) => ({
  components: { Upload, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      list: ["فرمت‌های مجاز: png و jpg", "حداکثر سایز فایل: ۵۰۰ کیلوبایت"],
      header: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Cookie: 'v4-access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZTlhOGI4YTYyYmM1ZTc4ZTY0OGNiNjlmMjUyYjJlN2U2ZDdhM2I1NjlhNWU5NzRiZDVmYTBlMTljYmQ2YmI1ZWQ4ZmZkZDQxZDE0ZDE0MWMiLCJpYXQiOjE2NTY3NTA0MTAuMTQxNDI2LCJuYmYiOjE2NTY3NTA0MTAuMTQxNDMsImV4cCI6MTY1ODA0NjQxMC4xMTgwMjQsInN1YiI6IjExNTQyNzMiLCJzY29wZXMiOlsiKiJdfQ.ohxwmGEzkJVk5YxXizakS2gsZQkN4WvwYhosjgPn_E7-rTVP6p1JIJjAjOxj2sb6fS_tZGjs6Rwzs5g-xW-OTkuRdqi3wPXSqkWTYZLHTmUGmHfFbSXtsnz5lr7jIc9h34kpmdpMbaSq_p-f3PWFVnyMdpSVnTy0uo207Yk8MScj753PvL6yLGg5C_kjA8zF_kh8WOEDrN2gp1b29RmQRrygIB-9lkvHIugyh787RZG6Wc5-AVtCoR_w-htnfRAtyuFnyXZUHMy37mytRHTZsDj4YMxKZUjxZtujRYmq4xO-d8Zkhk4LTVCpx3zGTD8mQRlgvve9z-arDZjxPpZe6oAQIpU_to7LBn_LUzYNmZuBpR_g6YhDGwCXbFL_YvwyHNEGP_Pl_axcQ57UC6dck0AfKSQq9NzjVbnoDSqLsF0QOlhD8ievSnmRTMLSqNnBQLKjrH70GRzNdo7ITAmdUXSBWSGAJh2EIzOFgdPLfkl7jBbti8IPqt_ZSUG19HubFobNfpW_8HwzcMQknoKPfG_Y80P6jxdQ84KQLq8yldvKtmAHtiLZWYJXoSEEQXjnmhXPeifQifXPwF_FwCbE277ir50WAsMLJ7Kb79WWHAeatfpgxLrbjPyMRWKKfh3TRFZZhrx_kUFe9tUz9n-AzgL1yo3NXkz6oYH0kIIiQnI; i18n_redirected=fa; kt_aside_menu_wrapperst=0; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmRnY2FydGkuY29tL2FwaS92MS9yZWdpc3RlciIsImlhdCI6MTY1NjkzOTIwOCwiZXhwIjoxNjYwNTM5MjA4LCJuYmYiOjE2NTY5MzkyMDgsImp0aSI6ImFYS2tLR0R5OWFTSWZBSkUiLCJzdWIiOiIzMyIsInBydiI6IjgxZGNiMzA0NjI2NzZhNDMxYWU0M2YxZmYzNzk5ZmIxMmY5MDQ1OTIifQ.lqa80HezUGHoq2cpDEsymwhJ7zFwWt1oBgjZEP2rY9I; viewport=2xl',
      },

    };
  },
  methods:{
    uploadFile(e){
      console.log(e)
    }

  },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl w-[360px]">
   <Upload 
   title="آپلود فایل" 
   :upload="uploadFile" 
   :restrictionList="list" 
   :dropzone="true"
   :maxFiles="5"
   :maxFileSize="0.1"
   url="https://next.zarinpal.com/api/v4/graphql"
   acceptedFiles=".jpeg,.jpg,.png,.gif"
   :toast="uploadFile"
   :headers="header"
   :sendFileHandler="uploadFile"
   />

   <Upload 
   :upload="uploadFile" 
   :dropzone="false"
   :maxFiles="5"
   :maxFileSize="0.1"
   url="https://next.zarinpal.com/api/v4/graphql"
   acceptedFiles=".jpeg,.jpg,.png,.gif"
   :toast="uploadFile"
   :headers="header"
   :sendFileHandler="uploadFile"
   />
	</div>
  `,
});

export const Default = Template.bind({});
