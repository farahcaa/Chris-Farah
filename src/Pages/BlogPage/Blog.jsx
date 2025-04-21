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
        <BlogComponent
          key={0}
          text="During my time in this class I have learned a lot about digital entrepreneurship. I have learned how to analyze a compaines business model to determine whether or not the company might fail or succeed, I have been pushed to learn digital marketing and even created and ad for a project my friends and I have been working on, and most importantly I learned from the experience of someone who has successfully started and sold a business. My biggest takeaway from this learning experience is to go for it and do not be afraid to fail. In the stories told in class I have gathered that you must plan for victory but you cant plan for everything and must be prepared to pivot quickly and never give up. I took this class hoping to learn more about how to During my time in this class I have learned a lot about digital entrepreneurship. I have learned how to analyze a companies business model to determine whether or not the company might fail or succeed, I have been pushed to learn digital marketing and even created and ad for a project my friends and I have been working on, and most importantly I learned from the experience of someone who has successfully started and sold a business. My biggest takeaway from this learning experience is to go for it and do not be afraid to fail. In the stories told in class I have gathered that you must plan for victory but you cant plan for everything and must be prepared to pivot quickly and never give up. I took this class hoping to learn more about how to digitally create and operate a business and it nailed the mark. By reviewing the actions of past companies and analyzing their business models I have cultivated an analysis framework that I can use to determine viabilities of businesses. The companies discuss were effected by things that could be easily over looked and they had devastating impacts on the business causing some to thrive and others to starve. This class has opened my eyes to what is possible in the world of online business and has left me feeling more confident and inspired to bring my own ideas to life.digitally create and operate a business and it nailed the mark. This class has opened my eyes to what is possible in the world of online business, and has left me feeling more confident and inspired to bring my own ideas to life."
          title="Blog 7 What Have I Learned?"
          img="https://th.bing.com/th/id/OIP.GU2DJUdb9kLyCQThbKZSDAHaFL?rs=1&pid=ImgDetMain"
        />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
