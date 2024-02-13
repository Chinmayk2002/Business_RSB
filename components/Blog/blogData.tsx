import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Projectors",
    paragraph:
      "Immerse yourself in Ultra-HD clarity, versatile connectivity, and portable powerhouses for both professional presentations and home entertainment. Transform any space into a visual masterpiece with our projectors, designed to elevate every experience.",
    image: "/images/blog/rsbprojector.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Projector"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Laptops",
    paragraph:
      "Discover a world of productivity and portability with our Pro Series Laptops. Offering a seamless blend of power and style, these devices are perfect for both work and play. Explore our range and find the laptop that suits your lifestyle and computing needs.",
    image: "/images/blog/rsblaptop.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Spare Parts",
    paragraph:
      "Keep your devices running smoothly with our genuine and high-quality spare parts. Whether you need replacement screens, batteries, or other components, our comprehensive selection ensures that your devices maintain optimal performance.",
    image: "/images/blog/rsbspare.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Parts"],
    publishDate: "2025",
  },
];
export default blogData;
