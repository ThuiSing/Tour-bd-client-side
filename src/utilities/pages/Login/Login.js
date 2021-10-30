import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import googleImg from "../../images/icon/GoogleLogo.png";

const Login = () => {
  const { googleLogIn, setUser, setErr } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectURL = location.state?.from || "/";
  const handleGoogleLongin = () => {
    googleLogIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch((err) => {
        setErr(err);
      });
  };
  return (
    <div className="bg-secondary min-h-screen flex justify-center items-center">
      <div className="bg-white md:w-1/3 text-center py-12 rounded-lg px-4">
        <div className="mb-4">
          <Link to="/">
            <h3 className="text-5xl font-bold cursor-pointer">TOURBD</h3>
          </Link>
        </div>
        <h2 className="font-semibold text-2xl mb-7"> Log in Here</h2>
        {/* <span className="text-red-400 font-semibold">{getError}</span> */}
        <div
          onClick={handleGoogleLongin}
          className="flex cursor-pointer text-center items-center justify-center relative rounded-3xl border-2 py-3"
        >
          <img
            width="30"
            className="absolute left-5"
            src={googleImg}
            alt="Google icon"
          />
          <h4 className="font-medium ">Continue with google </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
