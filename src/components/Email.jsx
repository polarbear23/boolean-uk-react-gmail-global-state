import React from "react";
import { StoreContext } from "../store";
import { useContext } from "react";

const Email = (props) => {
  const { email, index } = props;
  const store = useContext(StoreContext);
  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    store.dispatch({
      type: "updateEmail",
      payload: updatedEmails,
    });
  };
  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    store.dispatch({
      type: "updateEmail",
      payload: updatedEmails,
    });
  };

  return (
    <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => toggleRead(email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => toggleStar(email)}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
};

export default Email;
