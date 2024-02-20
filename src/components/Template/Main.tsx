import { Outlet } from "react-router-dom";
import Section from "../atoms/Section";

const Main = () => {
  return (
    <Section as="main">
      <Outlet />
    </Section>
  );
};
export default Main;
