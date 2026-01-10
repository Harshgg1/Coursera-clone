import axios from "axios";
import { useState } from "react";
import { userstate } from "../store/atoms/userstate";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import React from "react";

type SignupResponse = {
    token: string;
}

function Signup() {
    const [email, setemail] = useState<string>("");
    const [password, setpass] = useState<string>("");
    const setuser = useSetRecoilState(userstate);
    const navigate = useNavigate();

    return  <div>
            <div>
                <input type="email" placeholder="email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    setemail(e.target.value);
                }}/>
            </div>
            <div>
                <input type="password" placeholder="password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    setpass(e.target.value);
                }}/>
            </div>
            <div>
                <button onClick={async()=>{ 
                    const response = await axios.post<SignupResponse>('http://localhost:3000/admin/signup',
                        {
                            username: email,
                            password: password
                        }
                    );
                    localStorage.setItem("token", response.data.token);
                    setuser({userEmail: email, isLoading: false});
                    navigate("/courses");
                }}>Signup</button>
            </div>

        </div>
            
 }


export default Signup;