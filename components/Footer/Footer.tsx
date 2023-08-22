import { Heading } from "../Heading/Heading";
import { IFooterProps } from "./Footer.props";
import { FooterWrapp, SubscribeContainer } from "./Footer.styles";
import { Logo } from "../Logo/Logo";
import { Ul } from "../Ul/Ul";
import { companyNav, legalNav, quickLinks } from "./footerMenuData";
import ContactMenu from "./ContactMenu/ContactMenu";
import Subscribe from "../Subscribe/Subscribe";

const Footer = ({}: IFooterProps) => {
  const CompanyPagesNav = () => {
    return (
      <Ul className="flex-column d-flex">
        {companyNav.map((companyItem) => (
          <li key={companyItem.id}>{companyItem.text}</li>
        ))}
      </Ul>
    );
  };

  const LegalPagesNav = () => {
    return (
      <Ul className=" flex-column d-flex">
        {legalNav.map((legalItem) => (
          <li key={legalItem.id}>{legalItem.text}</li>
        ))}
      </Ul>
    );
  };

  const QuickLinksNav = () => {
    return (
      <Ul className=" flex-column d-flex">
        {quickLinks.map((quickItem) => (
          <li key={quickItem.id}>{quickItem.text}</li>
        ))}
      </Ul>
    );
  };

  return (
    <FooterWrapp>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo text={"Logo here"} color="white" extraClass="footer-logo" />
          </div>
          <div className="col-6 col-lg-3 col-xl-3">
            <Heading tag={"h4"} text="Reach us" />
            <ContactMenu />
          </div>

          <div className="col-6 col-lg-3 col-xl-2">
            <Heading tag={"h4"} text="Company" />
            <Ul>
              <CompanyPagesNav />
            </Ul>
          </div>

          <div className="col-6 col-lg-3 col-xl-2">
            <Heading tag={"h4"} text="Legal" />
            <Ul>
              <LegalPagesNav />
            </Ul>
          </div>

          <div className="col-6 col-lg-3 col-xl-2">
            <Heading tag={"h4"} text="Quick Links" />
            <Ul>
              <QuickLinksNav />
            </Ul>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <SubscribeContainer>
              <Heading tag={"h4"} text="Join Our Newsletter" />
              <Subscribe />
            </SubscribeContainer>
          </div>
        </div>
      </div>
    </FooterWrapp>
  );
};

export default Footer;
