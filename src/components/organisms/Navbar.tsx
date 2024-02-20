import { FC, PropsWithChildren } from "react";

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-1 md:py-5 max-w-[576px] lg:max-w-[768px] xl:max-w-[1024px] m-auto">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
