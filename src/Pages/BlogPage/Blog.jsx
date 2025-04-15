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
      <div className="py-10">
        <div className=" my-20 flex lg:flex-row xs:flex-col">
          <div className="flex justify-center flex-col items-center lg:w-1/2 xs:w-full ">
            <h1 className="text-4xl text-center font-bold my-3">
              Investor Pitch
            </h1>
            <a
              className="bold underline"
              href="https://mailuc-my.sharepoint.com/:p:/g/personal/farahca_mail_uc_edu/EQK4ZHhQ2_BKsd14omcwXPEBq8BvnHvm7YiBDnWDgiAFLQ?e=PofaWK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Presentation
            </a>
          </div>
          <div className="flex justify-center items-center lg:w-1/2 xs:w-full my-10">
            <img
              src="https://mpost.io/wp-content/uploads/image-129-94-1024x636.jpg"
              alt="blog"
              className="flex w-4/6 shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
