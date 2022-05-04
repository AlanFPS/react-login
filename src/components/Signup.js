import React from "react";
import validator from "validator";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Signup = () => {
  //////////////
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  ///////////////
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Please, enter a valid email");
    }
  };

  function checkFields(e) {
    e.preventDefault();

    if (username.length < 4) {
      setErrorMessage("Username must be at least 4 characters");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
    } else if (password === "password") {
      setErrorMessage("Password can not be 'password'");
    } else if (confirmpassword !== "password") {
      setErrorMessage("Password doesn't match");
    } else if (password === "password1") {
      setErrorMessage("Are you that dumb?");
    } else {
      setErrorMessage(`Welcome ${username}!`);
    }
  }

  // const [passwordShown, setPasswordShown] = useState(false);
  // const togglePassword = () => {
  //     setPasswordShown(!passwordShown);
  // };

  return (
    <form onSubmit={checkFields} style={{ textAlign: "center" }}>
      <div>
        <label>Email </label>
      </div>
      <div>
        <input type="email" />
      </div>
      <div>
        <label class="required">Username</label>
      </div>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
        />
      </div>
      <br />
      <div>
        <InputLabel class="required" htmlFor="standard-adornment-password">
          Password
        </InputLabel>
        <br />
        <Input
          type={values.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={values.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      {/* <div>
        <label class="required">Password</label>
      </div>
      <div>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
      </div>
      <div>
        <label class="required">Confirm Password</label>
      </div>
      <div>
        <input
          type="confirmpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmpassword"
          value={confirmpassword}
        />
      </div> */}
      <br />
      <div>
        <button>Submit</button>
      </div>
      <p>{errorMessage}</p>
    </form>
  );
};

export default Signup;
