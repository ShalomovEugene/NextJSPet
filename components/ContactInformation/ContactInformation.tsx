import ContactMenu from "../Footer/ContactMenu/ContactMenu";
import { Heading } from "../Heading/Heading";
import { P } from "../Paragraph/Paragraph";
import SocialContactMenu from "../SocialContactMenu/SocialContactMenu";
import { IContactInformationProps } from "./ContactInformation.props";
import {
  ContactInformationSection,
  ContactInformationWrapp,
  HeaderSection,
} from "./ContactInformation.styles";

const ContactInformation = ({}: IContactInformationProps) => {
  return (
    <ContactInformationWrapp>
      <ContactInformationSection>
        <HeaderSection>
          <Heading tag={"h3"} text="Contact Information" />
          <P text="Say something to start a live chat!" />
        </HeaderSection>
        <ContactMenu />

        <SocialContactMenu />
      </ContactInformationSection>
    </ContactInformationWrapp>
  );
};

export default ContactInformation;
