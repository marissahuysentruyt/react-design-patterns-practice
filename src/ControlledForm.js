import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ contactReason, setContactReason ] = useState("honey");
  const [ nameLengthError, setNameLengthError ] = useState("");

  useEffect(() => {
    if(firstName.length < 2) {
      setNameLengthError("First Name should be 2 characters or more.")
    } else {
      setNameLengthError("");
    }
  }, [firstName])

  return (
    <>
      <form>
        {nameLengthError && <p className="error">{nameLengthError}</p>}

        <label for="firstName">
          <input name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
        </label>
        <label for="lastName">
          <input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
        </label>
        <label for="email">
          <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        </label>
        <label for="phoneNumber">
          <input name="phoneNumber" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number"/>
        </label>
        <select value={contactReason} onChange={(e) => setContactReason(e.target.value)}>
          <option value="honey" defaultValue>I want to buy honey</option>
          <option value="bees">I want to donate bees</option>
          <option value="equipment">I want to donate equipment</option>
          <option value="jars">I want to donate honey jars</option>
          <option value="general">I want to learn more in general</option>
          <option></option>
        </select>
        <button className="submit-button" onClick={(e) => {
          if(nameLengthError === "") {
            alert("Thanks! You're all set.");
            e.preventDefault();
            console.log("form submitted by", firstName, lastName, ":", contactReason);
          } else {
            alert("something is wrong...");
            e.preventDefault();
          }
        }}
        >
        Submit</button>
      </form>
    </>
  )
}
