import type { MenuItem } from "../components/menu/menu-items2";


export const menuSelectItems: MenuItem[] = [
  {
    i18nKey: "home",
    scrollType: "Pages",
    url: "/",
    cName: "nav-links",
  },
  {
    i18nKey: "about-me",
    scrollType: "Pages",
    url: "/about-me",
    cName: "nav-links",
  },
  {
    i18nKey: "projects",
    scrollType: "Same Page",
    url: "#projects",
    cName: "nav-links",
    variableHeight: -1000,
  },
  {
    i18nKey: "skills",
    scrollType: "Same Page",
    url: "#abilities",
    cName: "nav-links",
    variableHeight: 40,
  },
  {
    i18nKey: "contact",
    scrollType: "Same Page",
    url: "#contact",
    cName: "nav-links",
    variableHeight: -1300,
  },
];
