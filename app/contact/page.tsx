import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSB Infotech | Contact",
  description: "This is Contact Page for RSB Infotech",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="At RSB Infotech, we value your inquiries, feedback, and the opportunity to assist you with all your technology needs. Whether you have questions about our products, need assistance with a service, or want to explore partnership opportunities, our friendly and knowledgeable team is here for you."
      />
      

      <Contact />
    </>
  );
};

export default ContactPage;
