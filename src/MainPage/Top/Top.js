import React from "react";
import "./Top.css";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import MainPageContext from "./../MainPageContext";
export default function Top() {
  return (
    <div className="top">
      <Logo />
      <MainPageContext.Consumer>
        {({ actions: { getBooks } }) => {
          return <SearchBar {...{ getBooks }} />;
        }}
      </MainPageContext.Consumer>
    </div>
  );
}
