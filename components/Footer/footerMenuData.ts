import {
  ISocialContacts,
  ICompanyNav,
  ILegalNav,
  IQuickLinks,
} from "./footerNavigation.interface";

export const socialContacts: ISocialContacts[] = [
  { id: "1", type: "tel", text: "+10123456789", src: "/phone.svg" },
  { id: "2", type: "mailto", text: "demo@gmail.com", src: "/email.svg" },
  {
    id: "3",
    type: "",
    text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    src: "/map.svg",
  },
];

export const companyNav: ICompanyNav[] = [
  { id: "1", text: "About" },
  { id: "2", text: "Contact" },
  { id: "3", text: "Blogs" },
];

export const legalNav: ILegalNav[] = [
  { id: "1", text: "Privacy Policy" },
  { id: "2", text: "Terms & Services" },
  { id: "3", text: "Terms of Use" },
  { id: "4", text: "Refund Policy" },
];

export const quickLinks: IQuickLinks[] = [
  { id: "1", text: "Techlabz Keybox" },
  { id: "2", text: "Downloads" },
  { id: "3", text: "Forum" },
];
