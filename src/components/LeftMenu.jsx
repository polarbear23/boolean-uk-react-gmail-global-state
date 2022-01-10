import React from "react";
import { useContext } from "react";
import { StoreContext } from "../store";
const LeftMenu = () => {
  const store = useContext(StoreContext);
  const handleClick = (currentTab) => {
    store.dispatch({
      type: "updateTab",
      payload: currentTab,
    });
  };

  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${
            store.state.currentTab === "inbox" ? "active" : ""
          }`}
          onClick={() => handleClick("inbox")}
        >
          <span className="label">Inbox</span>
          <span className="count">{/*unreadEmails.length*/}</span>
        </li>
        <li
          className={`item ${
            store.state.currentTab === "starred" ? "active" : ""
          }`}
          onClick={() => handleClick("starred")}
        >
          <span className="label">Starred</span>
          <span className="count">{/*starredEmails.length*/}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          {/*
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={(e) => setHideRead(e.target.checked)}
          />
*/}
        </li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
