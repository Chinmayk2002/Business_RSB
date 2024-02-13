import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSB Infotech | About",
  description: "This is About Page for RSB Infotech",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Welcome to RSB Infotech, your premier destination for cutting-edge electronic devices and components. Discover a curated selection of top-tier projectors, laptops, computers, and genuine spare parts to meet your diverse technological needs. With a focus on quality, innovation, and customer satisfaction, our store offers a seamless shopping experience. Explore the possibilities at RSB Infotech and embrace the future of technology with confidence."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
