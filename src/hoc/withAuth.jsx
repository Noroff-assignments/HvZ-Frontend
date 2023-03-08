import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// making component for checking if user is logged in otherwise redirect to login page
// therefore will not be possible to access protected routes if the username is missing
const withAuth = (Component) => (props) => {
  const { user } = useUser();
  if (user !== null) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default withAuth;