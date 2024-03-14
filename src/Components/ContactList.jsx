import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const ContactList = ({ Contact, removeContact }) => {
  console.log(Contact);

  const contctList = Contact.map((val) => {
    return (
      <div className="contacts">
        <div className="contact1">{val.data.name}</div>
        <div className="email">{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });

  return (
    <>
      <div className="ContactHeader">ContactList</div>
      <div>{contctList}</div>
    </>
  );
};

export default ContactList;
