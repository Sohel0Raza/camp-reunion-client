import "./Login.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const handlePasswordChang = (event) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
        if (loggedUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, {replace: true})
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: `${error}`,
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>CampReunion | Login</title>
      </Helmet>
      <div className="hero min-h-screen login-item">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 shadow-2xl w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                {errors.email && (
                  <span className="text-error mt-3">Email is required</span>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={passwordType}
                    onChange={handlePasswordChang}
                    name="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <div className="text-end -mt-8 mr-5">
                    <button onMouseUp={togglePassword}>
                      {passwordType === "password" ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-error mt-3">
                      Password is required
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input className="btn-primary" type="submit" value="Login" />
                </div>
                <p className="mt-1 text-white">
                  <small>New Here ?</small>{" "}
                  <Link to="/signUp">
                    <span className="text-lime-500 font-semibold">
                      {" "}
                      Sign Up
                    </span>
                  </Link>
                </p>
                <SocialLogin />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
