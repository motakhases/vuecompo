import { extend } from 'vee-validate';

extend('odd', {
  validate: (value) => value % 2 !== 0,
  message: 'این فیلد باید فرد باشد',
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1,
    };
  },
  computesRequired: true,
  message: 'این فیلد الزامیست',

});
extend('min', {
  validate: (value) => value.length >= 3,
  message: 'تعداد کاراکتر باید بیشتر از 3 باشد',
});
