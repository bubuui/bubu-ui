import Form from './src/form.vue';
import FormItem from './src/form-item.vue';
import './style/form.scss';
import { withInstall, withNoopInstall } from '@bubu-ui/utils';

export const BuForm = withInstall(Form, {
  FormItem
});
export default BuForm;

export const BuFormItem = withNoopInstall(FormItem);
