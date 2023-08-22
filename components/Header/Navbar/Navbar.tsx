import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarWrapp } from "./Navbar.styles";
import Link from "next/link";
import { INavigationSub } from "./navigation.interface";
import { menu, secondaryMeny } from "./menuData";
import Image from "next/image";
import { Ul } from "@/components/Ul/Ul";
import { Logo } from "@/components/Logo/Logo";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import OpenMobileIcon from "@/public/mobile-menu.svg";
import { Button } from "@/components/Button/Button";

const Navbar: FC = (): JSX.Element => {
  const pathname = usePathname();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  useEffect(() => {
    handleMobileMenu;

    if (isOpenMobileMenu) {
      document.body.classList.add("mobileMenuOpened");
    } else {
      document.body.classList.remove("mobileMenuOpened");
    }

    return () => {
      handleMobileMenu;
    };
  }, [isOpenMobileMenu]);

  useEffect(() => {
    return () => {
      setIsOpenMobileMenu(false);
    };
  }, [pathname]);

  const Menu = () => {
    return (
      <Ul className="menu col-12 col-xl-8 d-none d-md-flex justify-content-lg-center justify-content-xl-end flex-wrap order-2 order-xl-1">
        {menu.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`${
              pathname === menuItem.path ? "isActive" : "isntActive"
            } ${menuItem.submenu ? "arr-icon" : ""}`}
          >
            <Link href={menuItem.path}>{menuItem.title}</Link>
            {menuItem.submenu && SubMenu(menuItem.submenu, menuItem.path)}
          </li>
        ))}
      </Ul>
    );
  };

  const SubMenu = (subMenuItems: INavigationSub[], path: string) => {
    return (
      <Ul className="subMenu">
        {subMenuItems.map((subItem) => (
          <li
            key={subItem.id}
            className={
              pathname === `${path}${subItem.path}` ? "isActive" : "isntActive"
            }
          >
            <Link href={`${path}${subItem.path}`}>{subItem.title}</Link>
          </li>
        ))}
      </Ul>
    );
  };

  const SecondaryMenu = () => {
    return (
      <div className="col-6 col-xl-2 d-none d-md-flex justify-content-end order-1 order-xl-2">
        <Ul className="secondaryMenu d-flex  align-items-xl-center">
          {secondaryMeny.map((secondaryMenuItem) => (
            <li
              key={secondaryMenuItem.id}
              className={`${
                pathname === secondaryMenuItem.path ? "isActive" : "isntActive"
              } secondaryItem`}
            >
              <Link href={secondaryMenuItem.path}>
                <Image
                  width="18"
                  height="18"
                  src={secondaryMenuItem.src}
                  alt={secondaryMenuItem.title}
                />
              </Link>
            </li>
          ))}
        </Ul>
      </div>
    );
  };

  return (
    <NavbarWrapp className="d-flex flex-wrap">
      <div className="col-6 col-xl-2 order-0">
        <Logo text="Logo Here" color="black" />
      </div>
      <div className="col-6 d-flex d-md-none justify-content-end">
        <Button
          type="button"
          onClick={handleMobileMenu}
          className="burgerButton"
        >
          <Image
            width="24"
            height="24"
            src={OpenMobileIcon.src}
            alt="close icon"
          />
        </Button>
      </div>
      {<Menu />}
      {<SecondaryMenu />}
      {isOpenMobileMenu && <MobileMenu handleMobileMenu={handleMobileMenu} />}
    </NavbarWrapp>
  );
};

export default Navbar;
