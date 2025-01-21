const BlogComponent = ({ text, title, img }) => {
  return (
    <div className=" my-20 flex lg:flex-row md:flex-col">
      <div className="flex justify-center flex-col items-center lg:w-1/2 md:w-full ">
        <h1 className="text-4xl font-bold my-3">{title}</h1>
        <h1 className="text-center flex items-center justify-center w-3/4">
          {text}
        </h1>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 md:w-full">
        <img src={img} alt="blog" className="flex w-4/6 shadow-xl rounded-lg" />
      </div>
    </div>
  );
};

export default BlogComponent;
