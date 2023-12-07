import ImgPreview from './src/img-preview';
import { withInstallFunction } from '@bubu-ui/utils';

export const BuImgPreview = withInstallFunction(ImgPreview, '$previewImage');

export default BuImgPreview;
