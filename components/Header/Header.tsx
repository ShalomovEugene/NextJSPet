import { FC } from "react";
import { IHeaderProps } from "./Header.props";
import { HeaderWrapp } from "./Header.styles";
import Navbar from "./Navbar/Navbar";

const Header: FC = ({}: IHeaderProps) => {
  return (
    <HeaderWrapp>
      <Navbar />
    </HeaderWrapp>
  );
};

export default Header;
