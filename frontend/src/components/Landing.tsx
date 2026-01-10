import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmailState } from "../store/Selectors/userEmail";
import { isUserLoading } from "../store/Selectors/isUserLoading";
import { counterState } from "../store/atoms/counterState";

function Landing() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);
  // const [value, changeVal] = useRecoilState(counterState)

  return (
    <div>
      <h1>Coursera Admin</h1>
      <h3>A place to learn, earn and grow</h3>

      { !userEmail && (
        <div>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>

          <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            Signin
          </button>
        </div>
      )
      } 
      

      {/* <div>
        <img src="/class.jpeg" width="400" />
      </div>

      {/* <br/>
      <div>
        <div>
            <h1> {value} </h1>
        </div>
        <div>
            <button onClick={()=>{
                changeVal(value+1)
                }}>Increment</button>
        </div>
        <div>
            <button onClick={()=>{
                changeVal(value-1)
                }}>decrement</button>
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
