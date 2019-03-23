import React from "react";
import "./Top.css";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "../../Components/Logo/Logo";
export default function Top() {
  return (
    <div className="top">
      <Logo />
      <SearchBar />
    </div>
  );
}
