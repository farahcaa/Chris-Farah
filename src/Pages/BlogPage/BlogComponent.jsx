const BlogComponent = ({ text, title, img }) => {
  return (
    <div className=" my-20 flex lg:flex-row xs:flex-col">
      <div className="flex justify-center flex-col items-center lg:w-1/2 xs:w-full ">
        <h1 className="text-4xl text-center font-bold my-3">{title}</h1>
        <h1 className="text-center flex items-center justify-center w-3/4">
          {text}
        </h1>
        {title == "Blog 04 Digital Ad" && (
          <div>
            checkout the website{"at:  "}
            <a
              className="hover:cursor-pointer underline"
              href="https://campuscribs.org"
            >
              Campus Cribs
            </a>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center lg:w-1/2 xs:w-full my-10">
        <img src={img} alt="blog" className="flex w-4/6 shadow-xl rounded-lg" />
      </div>
    </div>
  );
};

export default BlogComponent;
