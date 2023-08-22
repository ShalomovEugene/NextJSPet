import { Ul } from "../../Ul/Ul";
import { socialContacts } from "../footerMenuData";
import Image from "next/image";
import Link from "next/link";
import { ContactMenuWrapp } from "./ContactMenu.styles";
import { FC } from "react";

const ContactMenu: FC = () => {
  return (
    <ContactMenuWrapp>
      <Ul className="contactMenu flex-column d-flex">
        {socialContacts.map((socialItem) => (
          <li key={socialItem.id}>
            {socialItem.type ? (
              <Link
                href={`${socialItem.type}:${socialItem.text}`}
                className="d-flex"
              >
                <Image
                  width="18"
                  height="18"
                  alt={socialItem.type}
                  src={socialItem.src}
                />
                {socialItem.text}
              </Link>
            ) : (
              <>
                <Image
                  width="18"
                  height="18"
                  alt={socialItem.type}
                  src={socialItem.src}
                />
                {socialItem.text}
              </>
            )}
          </li>
        ))}
      </Ul>
    </ContactMenuWrapp>
  );
};

export default ContactMenu;
