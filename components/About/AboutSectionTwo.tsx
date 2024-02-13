import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div> */}
          <div className="w-full px-4 lg:w-1/2">
          <SectionTitle
                title="Products"
                paragraph=" This is the place where innovation meets accessibility in our curated selection of cutting-edge electronic devices. Explore our diverse range of products, carefully chosen to cater to your technological needs and desires. Here's a glimpse into the types of products available for sale at our store:"
                mb="44px"
              />
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Projectors
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Transform your visual experiences with our state-of-the-art projectors. Whether you're a business professional in need of a powerful presentation tool, a movie enthusiast craving a cinematic home entertainment setup, or an educator enhancing the classroom experience, our projectors deliver crisp images, vibrant colors, and advanced features. Explore our collection for unparalleled visual immersion.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Laptops
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Elevate your computing experience with our high-performance laptops. From sleek and lightweight models for on-the-go productivity to powerful gaming laptops for immersive entertainment, our selection caters to diverse needs. Featuring cutting-edge technology and top-tier brands, our laptops ensure reliability, speed, and versatility for both personal and professional use.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Computers
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Discover the power of efficiency with our range of desktop computers. Designed for various computing tasks, from office work to graphic design and gaming, our computers boast advanced processors, ample storage, and robust performance. Choose from our carefully curated collection to find the perfect desktop solution that aligns with your computing requirements.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Spare Parts
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Keep your devices running smoothly with our comprehensive selection of spare parts. Whether you need replacement components for laptops, computers, or other electronic devices, we provide genuine and high-quality spare parts to ensure optimal performance. From screens and batteries to motherboards and processors, our inventory covers a wide spectrum of spare parts for various devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
