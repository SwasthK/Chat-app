import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useauthcontext } from "../context/usercontext";

export default function useLogout() {
    const [loading, setloading] = useState(false)
    const { setauthstate } = useauthcontext();
    const logout = async () => {
        setloading(true)
        try {
            const response = await fetch('http://localhost:5000/chat/api/v1/user/logout', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (data.error) {
                throw new Error(data.error)
            }
            if (data.msg) {
                toast.error(data.msg)
            }
            localStorage.removeItem("info")
            setauthstate(null)
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setloading(false)
        }
    }
    return { loading, logout }
}