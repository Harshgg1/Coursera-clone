import axios from "axios";
import { useState } from "react";
import { userstate } from "../store/atoms/userstate";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setemail] = useState("");
    const [password, setpass] = useState("");
    const setuser = useSetRecoilState(userstate);
    const navigate = useNavigate();
    
    return  <div>
            <div>
                <input type="email" placeholder="email" onChange={(e)=>{
                    setemail(e.target.value);
                }}/>
            </div>
            <div>
                <input type="password" placeholder="password" onChange={(e)=>{
                    setpass(e.target.value);
                }}/>
            </div>
            <div>
                <button onClick={async()=>{ 
                    const response = await axios.post('http://localhost:3000/admin/signup',
                        {
                            username: email,
                            password: password
                        }
                    )
                    localStorage.setItem("token", response.data.token);
                    setuser({userEmail: email, isLoading: false});
                    navigate("/courses");
                }}>Signup</button>
            </div>

        </div>
            
 }


export default Signup;