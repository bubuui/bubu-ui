import { ExtractPropTypes, PropType } from 'vue';

export declare type IDatePickerType =
  | 'year'
  | 'month'
  | 'date'
  | 'dates'
  | 'week'
  | 'datetime'
  | 'datetimerange'
  | 'daterange'
  | 'monthrange';

export const datePickerProps = {
  type: {
    type: String as PropType<string>,
    default: 'date'
  }
};

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
