import {
  // useContext,
  useState,
} from "react";
import {
  createAuthUserWithEmailAndPassword,
  // createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
// import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // const { setCurrentUser } = useContext(UserContext);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Do not match the Passwords");
      return;
    }
    try {
      // const { user } = await createAuthUserWithEmailAndPassword(email, password);
      // await createAuthUserWithEmailAndPassword(email, password);
      // console.log(users)
      // await createUserDocumentFromAuth(user, { displayName })
      // setCurrentUser(user);
      dispatch(signUpStart(email, password, displayName));
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your Email & Password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
