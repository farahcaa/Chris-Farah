const button = ({ className, children, onClick }) => {
  return (
    <button
      className={`${className || ""} bg-B text-Black rounded-full p-3 px-6`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default button;
