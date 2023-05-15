import { useRef, useState } from "react";

export const UncontrolledForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const contactReasonRef = useRef();
  const [ nameLengthError, setNameLengthError ] = useState("");

  const handleSubmit = (e) => {
    if(firstNameRef.current.value.length < 2) {
      e.preventDefault();
      alert("something isn't right...");
      setNameLengthError("First Name should be 2 characters or more.");
    } else {
      e.preventDefault();
      setNameLengthError("");
      alert("Thanks! You're all set.");
      const firstName = firstNameRef.current.value;
      const lastName = lastNameRef.current.value;
      const contactReason = contactReasonRef.current.value;
      console.log("form submitted by", firstName, lastName, ":", contactReason);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {nameLengthError && 
          <p className="error">{nameLengthError}</p>
        }
        <label htmlFor="firstname">
          <input name="firstName" type="text" ref={firstNameRef} placeholder="First Name"/>
        </label>
        <label htmlFor="lastName">
          <input name="lastName" type="text" ref={lastNameRef} placeholder="Last Name"/>
        </label>
        <label htmlFor="email">
          <input name="email" type="email" ref={emailRef} placeholder="Email"/>
        </label>
        <label htmlFor="phoneNumber">
          <input name="phoneNumber" type="text" ref={phoneNumberRef} placeholder="Phone Number"/>
        </label>
        <select ref={contactReasonRef}>
          <option>I want to buy honey</option>
          <option>I want to donate bees</option>
          <option>I want to donate equipment</option>
          <option>I want to donate honey jars</option>
          <option>I want to learn more in general</option>
          <option></option>
        </select>
        {/* we're relying on a handleSubmit event, so we can use this input of type submit.  */}
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </>
  )
}
