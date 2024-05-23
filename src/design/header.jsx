const MenuBackdrop = ({ openNav }) => {
  return (
    <div
      className={` ${
        openNav ? "flex" : "hidden"
      } lg:hidden xl:hidden absolute bg-Purple -top-[4rem] h-screen w-screen z-0 overflow-hidden`}
    >
      <div className="rounded-full absolute  top-1/2 left-1/2 bg-Bo w-[51.375rem] aspect-square -translate-x-1/2 -translate-y-1/2" />
      <div className="rounded-full bg-Bs absolute top-1/2 left-1/2  w-[36.125rem] aspect-square -translate-x-1/2 -translate-y-1/2" />
      <div className="rounded-full bg-Asb absolute top-1/2 left-1/2 w-[23.125rem] aspect-square -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default MenuBackdrop;
