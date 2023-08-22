import { INavigation, ISecondaryMeny } from "./navigation.interface";

export const menu: INavigation[] = [
  { id: "1", title: "Home", path: "/" },
  {
    id: "2",
    title: "Features",
    path: "/features",
    submenu: [
      { id: "01", title: "First", path: "/first" },
      { id: "02", title: "Second", path: "/second" },
      { id: "03", title: "Third", path: "/third" },
    ],
  },
  { id: "3", title: "Blog", path: "/blog" },
  { id: "4", title: "Shop", path: "/shop" },
  { id: "5", title: "About", path: "/about" },
  { id: "6", title: "Contact", path: "/contact" },
];

export const secondaryMeny: ISecondaryMeny[] = [
  {
    id: "1",
    src: "/profile.svg",
    path: "/profile",
    title: "Profile",
  },
  {
    id: "2",
    src: "/cart.svg",
    path: "/cart",
    title: "Cart",
  },
];

export const secondaryMenyMobile: ISecondaryMeny[] = [
  {
    id: "1",
    src: "/profile-mobile.svg",
    path: "/profile",
    title: "Profile",
  },
  {
    id: "2",
    src: "/cart-mobile.svg",
    path: "/cart",
    title: "Cart",
  },
];
