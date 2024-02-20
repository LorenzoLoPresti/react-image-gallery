import { FC } from "react";
import Navbar from "../organisms/Navbar";
import Title from "../molecules/Title";
import NavbarButtons from "../molecules/NavbarButtons";

const Header: FC = () => {
  return (
    <Navbar>
      <Title>Image Gallery</Title>
      <NavbarButtons />
    </Navbar>
  );
};

export default Header;
