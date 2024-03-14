import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddContacts from "./Components/AddContacts";
import ContactList from "./Components/ContactList";
import uuid4 from "uuid4";

const App = () => {
  const localStoragekey = "Contact";
  const [Contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStoragekey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(Contact));
  }, [Contact]);
  let addContact = (data) => {
    setContact([...Contact, { id: uuid4(), data }]);
  };
  const removeContact = (id) => {
    const updateList = Contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updateList);
  };

  return (
    <div>
      <Header />
      <AddContacts addContact={addContact} />
      <ContactList Contact={Contact} removeContact={removeContact} />
    </div>
  );
};

export default App;
