import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-background border border-r-0 overflow-x-hidden">
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
