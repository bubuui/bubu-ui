import { inject } from 'vue';

export const useFormItem = () => {
  const form = inject('buForm', undefined);
  const formItem = inject('buFormItem', undefined);
  return {
    form,
    formItem,
  };
};
