import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center">
        <h3 className="text-danger">Your Email is not verified!!</h3>
        <h5 className="text-success"> Please Verify your email address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Email Send");
          }}
        >
          Verify Email
        </button>
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
