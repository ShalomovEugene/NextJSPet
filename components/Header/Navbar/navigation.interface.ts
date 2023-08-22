export interface INavigation {
  id: string;
  title: string;
  path: string;
  submenu?: INavigationSub[];
}

export interface INavigationSub {
  id: string;
  title: string;
  path: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface ISecondaryMeny {
  id: string;
  src: string;
  path: string;
  title: string;
}
