"use client";
import ContactInformation from "@/components/ContactInformation/ContactInformation";
import From from "@/components/Form/Form";
import { Heading } from "@/components/Heading/Heading";
import { P } from "@/components/Paragraph/Paragraph";
import { FC } from "react";

import { WrapperContact, WrapperContactInfo } from "./Contact.styles";

const Contact: FC = (): JSX.Element => {
  return (
    <WrapperContact>
      <Heading tag={"h2"} text={"Contact"} />
      <P text="Any question or remarks? Just write us a message!" />
      <WrapperContactInfo className="row">
        <div className="col-lg-6 col-xl-5 d-flex">
          <ContactInformation />
        </div>
        <div className="col-lg-6 col-xl-7">
          <From />
        </div>
      </WrapperContactInfo>
    </WrapperContact>
  );
};

export default Contact;
