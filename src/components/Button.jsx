const button = ({ className, children }) => {
  return (
    <div className={`${className || ""} bg-B text-Black rounded-full p-3 px-6`}>
      {children}
    </div>
  );
};

export default button;
