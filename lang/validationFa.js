import numberFormat from '@/utils/filters/numberFormat';

const messages = {
  code: 'fa',
  messages: {
    alpha: '{_field_} فقط می تواند از حروف تشکیل شود',
    alpha_num: '{_field_} فقط میتواند از حروف و اعداد تشکیل شود',
    alpha_dash: '{_field_} فقط می تواند از حروف، اعداد، خط فاصله و زیرخط تشکیل شود',
    alpha_spaces: '{_field_} فقط می تواند از حروف و فاصله تشکیل شود',
    between: '{_field_} باید بین {min} و {max} کارکتر باشد',
    confirmed: '{_field_} با تاییدیه اش مطابقت ندارد',
    digits: '{_field_} باید یک مقدار عددی و دقیقاً {length} رقم باشد',
    dimensions: '{_field_} باید در اندازه {width} پیکسل عرض و {height} پیکسل ارتفاع باشد',
    email: '{_field_} باید یک پست الکترونیک معتبر باشد',
    excluded: '{_field_}باید یک مقدار معتبر باشد',
    ext: '{_field_} باید یک فایل معتبر باشد',
    image: '{_field_} باید یک تصویر باشد',
    max_value: 'مقدار {_field_} باید {max} یا کمتر باشد',
    max: '{_field_} نباید بیشتر از {length} کارکتر باشد',
    mimes: '{_field_} باید از نوع معتبر باشد',
    min_value: 'مقدار {_field_} باید {min} یا بیشتر باشد',
    min: '{_field_} باید حداقل {length} کارکتر باشد',
    numeric: '{_field_} فقط می تواند عددی باشد',
    oneOf: '{_field_} باید یک مقدار معتبر باشد',
    regex: 'قالب {_field_} قابل قبول نیست',
    required_if: '{_field_} الزامی است',
    required: '{_field_} الزامی است',
    size: 'حجم {_field_} کمتر از {size}KB باشد',
    double: 'قسمت {_field_} باید یک اعشار معتبر باشد',
    Multiplication: (fieldName, { step }) => {
      const numberFormatStep = numberFormat(step);
      return `${fieldName} می بایست ضریبی از ${numberFormatStep} ریال باشد.`;
    },
    variabledefinition: '{_field_} نامعتبر است',
    after: 'تاریخ انتخابی {_field_} باید بعد از  {date} باشد',
    before: 'تاریخ انتخابی {_field_} باید قبل از  {date} باشد',
    credit_card: '{_field_} غیر معتبر است',
    date_between: '{_field_} باید بین تاریخ {fromDate} و {toDate} باشد',
    not_in: '{_field_} باید یک مقدار معتبر باشد',
    in: '{_field_} باید یک مقدار معتبر باشد',
    ip: '{_field_} باید یک آدرس آی پی معتبر باشد',
    isPersian: '{_field_} باید فارسی‌ باشد',
    isEnglish: '{_field_} فقط شامل اعداد و حروف انگلیسی باشد',
    isPhoneValidate: '{_field_} می‌بایست تلفن ثابت یا همراه باشد.',
    terminalName: '{_field_} در نام‌گذاری از حروف فارسی، بدون علائم آوایی و نگارشی استفاده کنی',
    url: '{_field_} باید یک تارنمای معتبر باشد',
    exists: '{_field_} در سیستم وجود دارد',
    requiredWithoutStrict: '{_field_} یک شماره شبای معتبر وارد کنید',
    complexPassword: '{_field_} معتبر وارد کنید',
    uniqueuser: 'این دامنه قبلا ثبت شده است',
    uniqueUser: 'این دامنه قبلا ثبت شده است',
    uniquedomain: 'این دامنه قبلا ثبت شده است',
    uniqueDomain: 'این دامنه قبلا ثبت شده است',
    containsalpha: '{_field_} باید شامل حرف باشد',
    recaptcha: '{_field_} باید یک شماره شبای معتبر باشد',
    notVerifiedMobile: '{_field_} باید یک شماره شبای معتبر باشد',
    appRulesIban: '{_field_} باید یک شماره شبای معتبر باشد',
    appRulesUniqueSsn: '{_field_} قبلا در سیستم ثبت شده‌است',
    appRulesAcceptableIban: ' بانک صادر‌کننده‌ی حساب مورد تایید نیست',
    attachment: '{_field_} قبلا در سیستم ثبت شده‌است',
    appRulesLuhn: '{_field_} وارد‌شده صحیح نیست',
    unique: '{_field_}  قبلا در سیستم ثبت‌شده است',
    pan: 'شماره‌کارت اشتباه است',
    requiredwithout: 'این فیلد در صورت نبود لازم است',
    alphanum: '{_field_} فقط میتواند از حروف و اعداد تشکیل شود',
    appRulesUniqueUsername: 'زرین‌لینک تکراری است',
    appRulesUniqueDomain: 'این دامنه قبلا در سیستم ثبت‌شده است',
  },
};

export default messages;