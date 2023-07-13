import {
  useState,
  // useContext
} from "react";
import {
  // createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in-form.styles.scss";
// import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // console.log(response);
    // createUserDocumentFromAuth(response.user)
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email & Password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
