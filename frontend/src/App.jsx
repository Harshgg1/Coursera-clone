import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
// import Course from "./components/Course";
import Courses from "./components/Courses";
import Addcourse from "./components/Addcourse";
import Appbar from "./components/Appbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot, useResetRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";
import { userstate } from "./store/atoms/userstate";
import { useEffect} from "react";

function App() {
    return(
        <RecoilRoot>
                    <Router>
                        <Appbar />
                        <InitUser />
                        <Routes>
                            <Route path={"/addcourse"} element={<Addcourse />} />
                            <Route path={"/course/:courseId"} element={<Course />} />
                            <Route path={"/courses"} element={<Courses />} />
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />
                        </Routes>
                    </Router>
        </RecoilRoot>
    )

    function InitUser(){
        const setuser = useSetRecoilState(userstate);
        async function init() {
                try {
                    const response = await axios.get('http://localhost:3000/admin/me', {
                        headers: {
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    })

                    if(response.data.username) {
                        setuser({
                            isLoading:false,
                            userEmail:response.data.username
                        })
                    }
                    else{
                        setuser({
                            isLoading:false,
                            userEmail: null
                        })
                    }
                }
                catch(e){
                    setuser({
                            isLoading:false,
                            userEmail: null
                        })
                }
            }
            useEffect(()=> {
                init();
            },[]);  

            return null;
        }
        
    };

    

export default App;