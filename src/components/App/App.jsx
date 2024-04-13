// import { useState, useEffect } from "react";
// import Description from "../Description/Description";
// import Options from "../Options/Options";
// import Feedback from "../Feedback/Feedback";
// import Notification from "../Notification/Notification";
// import clsx from "clsx";
// import userData from "../../userData.json";
// import friends from "../../friends.json";
// import Profile from "../Profile/Profile";
// import FriendList from "../FriendList/FriendList";
// function App() {
//   return (
//     <>
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />
//       <FriendList friends={friends} />
//     </>
//   );
// }

// export default function App() {
//   const [object, setObject] = useState(() => {
//     const savedClicks = window.localStorage.getItem("clicks");
//     if (savedClicks !== null) {
//       return JSON.parse(savedClicks);
//     }
//     return {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     };
//   });
//   const totalFeedback = object.good + object.neutral + object.bad;
//   function updateFeedback(feedbackType) {
//     setObject((object) => ({
//       ...object,
//       [feedbackType]: object[feedbackType] + 1,
//     }));
//   }
//   const positiveResult = Math.round((object.good / totalFeedback) * 100);
//   const handleReset = () => {
//     setObject({ good: 0, neutral: 0, bad: 0 });
//   };
//   useEffect(() => {
//     window.localStorage.setItem("clicks", JSON.stringify(object));
//   }, [object]);
//   return (
//     <>
//       <Description />
//       <Options
//         onGood={() => updateFeedback("good")}
//         onNeutral={() => updateFeedback("neutral")}
//         onBad={() => updateFeedback("bad")}
//         onReset={handleReset}
//         resetBtn={totalFeedback}
//       />

//       {totalFeedback > 0 ? (
//         <Feedback
//           values={object}
//           total={totalFeedback}
//           positive={positiveResult}
//         />
//       ) : (
//         <Notification />
//       )}
//     </>
//   );
// }

// ------------------------------------------------------Залание 3--------------------------------------------
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../../../contacts.json";

import { useState } from "react";
export default function App() {
  const [contact, setContact] = useState(contacts);
  const [filtered, setFilter] = useState("");
  const addContact = (newContact) => {
    setContact((beforeContacts) => {
      return [...beforeContacts, newContact];
    });
  };
  const searchCont = contact.filter((el) =>
    el.name.toLocaleLowerCase().includes(filtered.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContact={addContact} />
        <SearchBox onChange={setFilter} value={filtered} />
        <ContactList contacts={searchCont} />
      </div>
    </>
  );
}
