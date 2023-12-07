import type { App } from 'vue';
import RichTextArea from './src/richTextArea.vue';
import './style/rich.scss';
import { withInstall } from '@bubu-ui/utils';
export const BuRichTextArea = withInstall(RichTextArea);
export default BuRichTextArea;
