import Link from "next/link";
import { FC } from "react";
import { SocialIcon, SocialMenuWrapp } from "./SocialContactMenu.styles";
import { Ul } from "../Ul/Ul";

const SocialContactMenu: FC = () => {
  return (
    <SocialMenuWrapp>
      <Ul>
        <li>
          <Link href="https://twitter.com/" target="_blank">
            <SocialIcon className="twitter" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/" target="_blank">
            <SocialIcon className="instagram" />
          </Link>
        </li>
        <li>
          <Link href="https://discord.com/" target="_blank">
            <SocialIcon className="discord" />
          </Link>
        </li>
      </Ul>
    </SocialMenuWrapp>
  );
};

export default SocialContactMenu;
