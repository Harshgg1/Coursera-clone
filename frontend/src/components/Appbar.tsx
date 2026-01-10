import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userstate } from "../store/atoms/userstate";

function Appbar() {
  const navigate = useNavigate();
  const user = useRecoilValue(userstate);
  const setUser = useSetRecoilState(userstate);

  if (user.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      {user.userEmail ? (
        <>
          <button onClick={() => navigate("/courses")}>Courses</button>
          <button onClick={() => navigate("/addcourse")}>Add Course</button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUser({ isLoading: false, userEmail: null });
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/signup")}>Signup</button>
          <button onClick={() => navigate("/signin")}>Signin</button>
        </>
      )}
    </div>
  );
}

export default Appbar;
