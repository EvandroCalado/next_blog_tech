import { MenuPropsLinks } from '../Menu';

export type SettingsStrapi = {
  // id: string;
  blogName: string;
  blogDescription: string;
  logo: string;
  menuLink: MenuPropsLinks[];
  footer: string;
};
