import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-circle bg-white"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
