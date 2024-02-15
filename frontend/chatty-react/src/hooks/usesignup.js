import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useauthcontext } from "../context/usercontext";

function useSignup() {
    const [loading, setloading] = useState(false)
    const { setauthstate } = useauthcontext();
    const sign = async ({ fullname, username, password, cpassword, gender }) => {
        const pass = errhandle(fullname, username, password, cpassword, gender)
        setloading(true)
        if (!pass) {
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/chat/api/v1/user/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullname, username, password, confirmpassword: cpassword, gender })
            })
            const data = await response.json()
            if (data.error) {
                throw new Error(data.error)
            }
            if (data.msg) {
                toast.error(data.msg)
            }
            localStorage.setItem("info", JSON.stringify(data))
            setauthstate(data)
            console.log(data);
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setloading(false)
        }
    };
    return { loading, sign };
}

function errhandle(fullname, username, password, cpassword, gender) {
    if (!fullname || !username || !password || !cpassword || !gender) {
        toast.error("enter all details")
        return false
    }
    if (password != cpassword) {
        toast.error("passowrd mismatch")
        return false
    }
    if (password.length < 4) {
        toast.error("passowrd is not lengthy")
        return false
    }
    return true
}

export default useSignup;