import { useState } from "react";
// import './App.css'
const AddContacts = ({ addContact }) => {
  let [ContactData, setContactData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...ContactData, name: e.target.value });
    } else {
      setContactData({ ...ContactData, email: e.target.value });
    }
  };
  const handleAdd = () => {
    if (ContactData.name === "" || ContactData.email === "") {
      alert("please fill the data");
      return;
    }
    addContact(ContactData);
    setContactData({ name: "", email: "" });
  };
  return (
    <div>
      <div className="AddContact">Add Contact</div>
      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter Name"
          value={ContactData.name}
        />
        <br />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Enter Email"
          value={ContactData.email}
        />
      </form>
      <br />
      <button onClick={handleAdd} name="email" className="btn">
        Add Contact
      </button>
    </div>
  );
};

export default AddContacts;
