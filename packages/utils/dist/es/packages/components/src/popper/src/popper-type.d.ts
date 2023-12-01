import { ExtractPropTypes, PropType } from 'vue';
export declare const roleTypes: string[];
export declare const popperProps: {
  role: {
    type: PropType<string>;
    validator: (value: string) => boolean;
    default: string;
  };
};
export type PopperProps = ExtractPropTypes<typeof popperProps>;
