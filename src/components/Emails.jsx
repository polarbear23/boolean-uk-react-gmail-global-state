import React from "react";
import { StoreContext } from "../store";
import { useContext } from "react";
import Email from "./Email";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const Emails = () => {
  const store = useContext(StoreContext);

  const unreadEmails = store.state.emails.filter((email) => !email.read);
  const starredEmails = store.state.emails.filter((email) => email.starred);
  let filteredEmails = store.state.emails;
  //if (hideRead) filteredEmails = getReadEmails(filteredEmails);
  if (store.state.currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email email={email} index={index} />
        ))}
      </ul>
    </main>
  );
};

export default Emails;
