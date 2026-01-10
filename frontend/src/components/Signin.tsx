import axios from "axios";
import React, { useState } from "react";
import { userstate } from "../store/atoms/userstate";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

type SigninResponse = {
    token: string;
}

function Signin() {
    const [email, setemail] = useState<string>("");
    const [password, setpass] = useState<Number>();
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
                    setpass(Number(e.target.value));
                }}/>
            </div>
            <div>
                <button onClick={async()=>{ 
                    try{
                        const response = await axios.post<SigninResponse>('http://localhost:3000/admin/login',  
                        {
                            username: email,
                            password: password
                        }
                    );
                    localStorage.setItem("token", response.data.token);
                    setuser({userEmail: email, isLoading: false});
                    navigate("/courses");
                    } catch(e){
                        console.log(e);
                    }
                }}>Signin</button>
            </div>

        </div>
            
 }


export default Signin;