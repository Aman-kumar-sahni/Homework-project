

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../app/providers/AppProviders";
import { useState } from "react";
import { useContext } from "react";

function useAuth() {
    const { registered } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({ mode: "onChange" });

    const [loginError, setLoginError] = useState(null);

    const navigate = useNavigate();
    //login
    function loginSubmitHandler(data) {
        const user = registered.find(
            (val) =>
                val.email === data.email &&
                val.password === data.password
        );

        if (!user) {
            setLoginError("Invalid credential");
            return;
        }

        setLoginError(null);
        reset(); // Form reset

        toast.success("Login SuccessFull");
        localStorage.setItem("currentUser", JSON.stringify(user))
        navigate("/")

    }


    ///Register
    const { setRegisterUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState(null)

    function registerSubmitHandler(data) {


        const user = registered.find(
            (val) =>
                val.email === data.email
        );
        if (user) {
            return setRegisterError("user already exist with this email")
        }
        setRegisterError(null)
        const newUser = {
            id: Date.now(),
            ...data,
        };


        let registerUser = [...registered, data]

        setRegisterUser(registerUser)
        localStorage.setItem("registerUser", JSON.stringify(registerUser))
        reset()
        localStorage.setItem("currentUser", JSON.stringify(newUser))
        toast.success("Account Created Successfully");
        navigate("/")

    }
    return { register, handleSubmit, errors, watch, reset, loginSubmitHandler, loginError, setLoginError, navigate, registered, registerSubmitHandler, setRegisterUser, setRegisterError, registerError }

}
export default useAuth;