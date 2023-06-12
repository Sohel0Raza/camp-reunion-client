import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserData(data.name, data.photo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("https://camp-reunion-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SingUp SuccessFully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
                navigate(from, { replace: true });
              });
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
        <title>CampReunion | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen signin-item">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-error mt-3">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-error mt-3">
                      Photo URL is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-error mt-3">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: { value: 6 },
                      maxLength: { value: 20 },
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-error mt-3">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-error mt-3">
                      Password must be 6 Characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-error mt-3">
                      Password must be less than 20 Characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-error mt-3">
                      Password must have one upper case and one special
                      Characters
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    })}
                    placeholder="Confirm password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword && (
                    <span className="text-error mt-3">
                      Please confirm your password
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="mt-1 text-white">
                  <small> Have an account ?</small>
                  <Link to="/login">
                    <span className="text-lime-500 font-semibold"> Login</span>
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

export default SignUp;
