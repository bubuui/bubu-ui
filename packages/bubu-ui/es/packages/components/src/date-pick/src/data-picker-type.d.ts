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
export declare const datePickerProps: {
  type: {
    type: PropType<string>;
    default: string;
  };
};
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
