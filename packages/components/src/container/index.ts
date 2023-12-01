import Container from './src/container.vue';
import Aside from './src/aside.vue';
import Footer from './src/footer.vue';
import Header from './src/header.vue';
import Main from './src/main.vue';
import './style/container.scss';
import { withInstall, withNoopInstall } from '@bubu-ui/utils';

export const BuContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});

export default BuContainer;
export const BuAside = withNoopInstall(Aside);
export const BuFooter = withNoopInstall(Footer);
export const BuHeader = withNoopInstall(Header);
export const BuMain = withNoopInstall(Main);
