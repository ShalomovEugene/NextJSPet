import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileMenuWrapp } from "./MobileMenu.styles";
import Link from "next/link";
import { INavigationSub } from "../Header/Navbar/navigation.interface";
import { menu, secondaryMenyMobile } from "../Header/Navbar/menuData";
import Image from "next/image";
import { Ul } from "@/components/Ul/Ul";
import { Logo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";
import CloseMobileIcon from "@/public/close.svg";
import ArrIconMobile from "@/public/arrow-mobile.svg";

type Props = {
  handleMobileMenu: React.MouseEventHandler<HTMLButtonElement>;
};

const MobileMenu = ({ handleMobileMenu }: Props): JSX.Element => {
  const pathname = usePathname();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const Menu: React.FC = (): JSX.Element => {
    return (
      <Ul className="mobileMenu col-12 ">
        {menu.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`${
              pathname === menuItem.path ? "isActive" : "isntActive"
            }`}
          >
            <Link href={menuItem.path}>{menuItem.title}</Link>
            {menuItem.submenu && SubMenu(menuItem.submenu, menuItem.path)}
            {menuItem.submenu && (
              <Button
                type="button"
                className={`dropdown ${
                  isOpenDropdown ? "arrow-up" : "arrow-down"
                }`}
                onClick={handleDropdown}
              >
                <Image
                  width="18"
                  height="18"
                  src={ArrIconMobile.src}
                  alt="close icon"
                />
              </Button>
            )}
          </li>
        ))}
      </Ul>
    );
  };

  const SubMenu = (subMenuItems: INavigationSub[], path: string) => {
    return (
      isOpenDropdown && (
        <Ul className="mobileSubMenu">
          {subMenuItems.map((subItem) => (
            <li
              key={subItem.id}
              className={
                pathname === `${path}${subItem.path}`
                  ? "isActive"
                  : "isntActive"
              }
            >
              <Link href={`${path}${subItem.path}`}>{subItem.title}</Link>
            </li>
          ))}
        </Ul>
      )
    );
  };

  const SecondaryMenu = () => {
    return (
      <div className="col-12 d-flex  justify-content-center">
        <Ul className="secondaryMenu  d-flex  align-items-center">
          {secondaryMenyMobile.map((secondaryMenuMobileItem) => (
            <li
              key={secondaryMenuMobileItem.id}
              className={`${
                pathname === secondaryMenuMobileItem.path
                  ? "isActive"
                  : "isntActive"
              } secondaryItemMobile`}
            >
              <Link href={secondaryMenuMobileItem.path}>
                <Image
                  width="31"
                  height="31"
                  src={secondaryMenuMobileItem.src}
                  alt={secondaryMenuMobileItem.title}
                />
              </Link>
            </li>
          ))}
        </Ul>
      </div>
    );
  };

  return (
    <MobileMenuWrapp className="d-flex flex-wrap">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo text="Logo Here" color="white" />
          </div>
          <div className="col-6 d-flex d-md-none justify-content-end">
            <Button
              type="button"
              onClick={handleMobileMenu}
              className="closeMobileMenu"
            >
              <Image
                width="18"
                height="18"
                src={CloseMobileIcon.src}
                alt="close icon"
              />
            </Button>
          </div>
          {<Menu />}
          {<SecondaryMenu />}
        </div>
      </div>
    </MobileMenuWrapp>
  );
};

export default MobileMenu;
