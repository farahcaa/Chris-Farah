const button = ({ className, children, onclick }) => {
  return (
    <button
      className={`${className || ""} bg-B text-Black rounded-full p-3 px-6`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default button;
