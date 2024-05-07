import { useContext, useState } from "react";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../contex/User";

export default function ForgetPass() {
  const { setUserToken } = useContext(UserContext);

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [forget, setForget] = useState({
    email: "",
  });
  const [errors, setErrors] = useState([]);
  const handelChange = (e) => {
    const { name } = e.target;

    setUser({
      
      [name]: value,
    });
  };

  const valiData = async () => {
    const RegisterSchema = object({
      email: email().required("*Required"),
      
    });

    try {
      await RegisterSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      console.log("Error", error.errors);
      setErrors(error.errors);
      setLoader(false);

      return false;
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const validData = await valiData();
    console.log(validData);
    try {
      const { data } = axios.post(
        `${import.meta.env.VITE_API}/forgotPassword`,
        user
      );

      setForget({
        email: "",
        
      });

      if (data.message == "success") {
        toast.success("Your account has been created SUCCESFULLY", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.setItem("userToken", data.token);
        setUserToken(data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (errors.response.data === 500) {
        toast.error("errors.response.data.message", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } finally {
      setLoader(false);
    }
    // }
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("Submitted!");
    console.log(user);
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/auth/signin`,
        {
          email: user.email,
          password: user.password,
        }
      );
      if (data.message == "success") {
        navigate("/");
         toast.success("Success");
        localStorage.setItem("userToken", data.token);
        setUserToken(data.token);
      }
    } catch (error) {
      toast.error("Error!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {errors.length > 0 ? errors.map((error) => <p>{error}</p>) : null}

    

      <form onSubmit={submit}>
        <div className="login-wrap ">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked=""
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              <Link to="/register" className="register">
                Sign Up
              </Link>
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    name="email"
                    onChange={handelChange}
                    value={user.email}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="password"
                    onChange={handelChange}
                    value={user.password}
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="check">
                    <span className="icon" /> Keep me Signed in
                  </label>
                </div>
                <div className="group">
                  <button className="signIn">
                    {!loader ? "Sign In" : "In progress"}
                  </button>
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
                <Link to="/register" className="register">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
