import React, { PropsWithChildren } from "react";
import Menu from "../Menu/Menu";

const Layout = ({ children }: any) => {
  return (
    <>
      <Menu />
      {/* <main>{children}</main> */}
    </>
  );
};

export default Layout;
