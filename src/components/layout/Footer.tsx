const Footer = () => {
  return (
    <div className="flex items-start border-t border-border bg-white z-10 ">
      <div className="p-4 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Christopher Farah
      </div>
    </div>
  );
};

export default Footer;
