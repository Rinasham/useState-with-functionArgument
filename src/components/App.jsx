import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(e) {
    const { name, value } = e.target;
    // const name = e.target.name;　 <= 'fName', 'lName', 'email'
    // const value = e.target.value;

    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value // objのキーは[]に入れると変数的に使える ('fName', 'lName', 'email' を展開)
      };

      // return {
      //   fName: prevState.fName,
      //   lName: prevState.lName,
      //   email: value
      // };  をif文でname=== 'fName'とか条件分岐する代わり！
    });
    // if (name === "fName") {
    //   setContact({ ...contact, fName: value });
    // } else {
    //   setContact({ ...contact, lName: value });
    // }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleContact}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleContact}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleContact}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
