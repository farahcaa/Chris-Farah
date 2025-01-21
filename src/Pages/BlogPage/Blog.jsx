import Header from "../../components/Header";
import BlogComponent from "./BlogComponent";
import Footer from "../../components/Footer";
import { BlogInfo } from "../../constants";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="py-10" />
      {BlogInfo.map((blog, index) => (
        <BlogComponent
          key={index}
          text={blog.text}
          title={blog.title}
          img={blog.img}
        />
      ))}
      <Footer />
    </>
  );
};

export default Blog;
