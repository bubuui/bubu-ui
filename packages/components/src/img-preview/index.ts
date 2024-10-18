import ImgPreview from './src/img-preview';
import { withInstallFunction } from '@bubu-ui/utils';
import "./style/img-preview.scss"
export const BuImgPreview = withInstallFunction(ImgPreview, '$previewImage');

export default BuImgPreview;
