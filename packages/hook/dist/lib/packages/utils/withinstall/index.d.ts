import type { Plugin, AppContext } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};
declare const withInstall: <T, E extends Record<string, any>>(
  main: T,
  extra?: E | undefined
) => SFCWithInstall<T> & E;
declare const withInstallFunction: <T>(
  fn: T,
  name: string
) => SFCInstallWithContext<T>;
declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;
export { withInstallFunction, withInstall, withNoopInstall };
