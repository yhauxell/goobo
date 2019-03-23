import React from "react";
import "./Sidebar.css";
import BookPreview from "./BookPreview/BookPreview";
import Filters from "./Filters/Filters";
import MainPageContext from "../../MainPageContext";
export default function Sidebar() {
  return (
    <MainPageContext.Consumer>
      {({ filter, filters, actions:{filterBooks}, current }) => {
        return (
          <aside className="sidebar">
            <div className="sidebar__books-filters-list">
              <Filters {...{ filter, filters, filterBooks }} />
            </div>
            <div className="sidebar__book-preview">
              <BookPreview {...{ current }} />
            </div>
          </aside>
        );
      }}
    </MainPageContext.Consumer>
  );
}
