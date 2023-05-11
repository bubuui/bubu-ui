import { defineComponent } from 'vue';
import { datePickerProps, DatePickerProps } from './data-picker-type';
export default defineComponent({
  name: 'BuDatePicker',
  install: null,
  props: {
    ...datePickerProps
  },
  setup(props) {
    return () => <></>;
  }
});
