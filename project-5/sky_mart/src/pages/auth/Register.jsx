import {
  ArrowRight,
  Eye,
  Lock,
  Mail,
  User,
  Zap,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../app/providers/AppProviders";
import { toast } from "react-toastify";
const Register = () => {

  const { registered, setRegisterUser } = useContext(AuthContext)
const [error,setError]=useState(null)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({ mode: "onChange" })

  function submitHandler(data) {
    

    const user = registered.find(
      (val) =>
        val.email === data.email 
    );
    if(user){
      return setError("user already exist with this email")
    }
    setError(null)
      const newUser = {
    id: Date.now(), 
    ...data,
  };


        let registerUser = [...registered, data]

    setRegisterUser(registerUser)
    localStorage.setItem("registerUser", JSON.stringify(registerUser))
    reset()
    localStorage.setItem("currentUser",JSON.stringify(newUser))
toast.success("Account Created Successfully");
    navigate("/")

  }
  const password = watch("password");











  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-8">

      {/* Main Container */}
      <div className="w-full max-w-[380px]">

        {/* ================= Logo ================= */}

        <div className="mb-7 flex justify-center">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8FF28] shadow-[0_0_18px_rgba(232,255,40,.45)]">

              <Zap
                size={18}
                strokeWidth={2.8}
                className="fill-black text-black"
              />

            </div>

            <h1 className="text-[32px] font-bold tracking-tight">

              <span className="text-white">
                Sky
              </span>

              <span className="text-[#E8FF28]">
                Mart
              </span>

            </h1>

          </div>

        </div>

        {/* ================= Register Card ================= */}

        <form onSubmit={handleSubmit(submitHandler)} className="rounded-3xl border border-[#4A4A4A] bg-[#1B1B1B] p-6 shadow-[0_0_25px_rgba(255,255,255,.03)]">

          {/* Heading */}

          <h2 className="text-[30px] font-bold leading-none text-white">

            Create account

          </h2>

          <p className="mt-2 text-sm text-zinc-400">

            Join SkyMart and start shopping

          </p>

          {/* Form */}

          <div className="mt-5 space-y-2">

            {/* Full Name */}

            <div className="flex h-12 items-center rounded-xl border border-[#5B5B5B] bg-[#2B2B2B] px-4     transition-all
    duration-300
    focus-within:border-[#E8FF28]
    focus-within:ring-2
    focus-within:ring-[#E8FF28]/20">

              <User
                size={17}
                className="text-zinc-400"
              />

              <input
                {...register("name", {
                                    onChange:()=>{         setError(null)       },

                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Name cannot exceed 30 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name can only contain letters and spaces",
                  },
                })}
                type="text"
                placeholder="Full name"
                className="ml-3 w-full bg-transparent text-[15px] text-white outline-none placeholder:text-zinc-400"
              />

            </div>

            {/* Email */}
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}


            <div
              className="
    flex
    h-12
    items-center
    rounded-xl
    border
    border-[#5B5B5B]
    bg-[#2B2B2B]
    px-4
    transition-all
    duration-300
    focus-within:border-[#E8FF28]
    focus-within:ring-2
    focus-within:ring-[#E8FF28]/20
  "
            >
              <Mail
                size={17}
                className="text-zinc-400"
              />

              <input
                {...register("email", {
                                    onChange:()=>{         setError(null)       },

                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="ml-3 w-full bg-transparent text-[15px] text-white placeholder:text-zinc-400 outline-none"
              />




            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}


            {/* Password */}

            <div className="flex h-12 items-center rounded-xl border border-[#5B5B5B] bg-[#2B2B2B] px-4     transition-all
    duration-300
    focus-within:border-[#E8FF28]
    focus-within:ring-2
    focus-within:ring-[#E8FF28]/20 ">

              <Lock
                size={17}
                className="text-zinc-400"
              />

              <input

                {...register("password", 
                  {
                                      onChange:()=>{         setError(null)       },

                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                  },
                })}
                type="password"
                placeholder="Password (min 6 chars)"
                className="ml-3 w-full bg-transparent text-[15px] text-white outline-none placeholder:text-zinc-400"
              />


              <Eye
                size={17}
                className="cursor-pointer text-zinc-400"
              />

            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}

            {/* Confirm Password */}

            <div className="flex h-12 items-center rounded-xl border border-[#5B5B5B] bg-[#2B2B2B] px-4     transition-all
    duration-300
    focus-within:border-[#E8FF28]
    focus-within:ring-2
    focus-within:ring-[#E8FF28]/20">

              <Lock
                size={17}
                className="text-zinc-400"
              />

              <input 
                {...register("confirmPassword", {
                  onChange:()=>{         setError(null)       },
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm password"
                className="ml-3 w-full bg-transparent text-[15px] text-white outline-none placeholder:text-zinc-400"
              />



            </div>
            {/* Create Account Button */}
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
            {error&&              <p className="mt-1  text-sm text-red-500">{error}</p>
}
            <button
              className="
                mt-1
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#E8FF28]
                text-[15px]
                font-semibold
                text-black
                shadow-[0_0_20px_rgba(232,255,40,.45)]
                transition-all
                duration-300
                hover:shadow-[0_0_30px_rgba(232,255,40,.65)]
                active:scale-[0.98]
              "
            >
              Create Account

              <ArrowRight
                size={18}
                strokeWidth={2.5}
              />
            </button>

            {/* Footer */}

            <p className="pt-1 text-center text-sm text-zinc-400">

              Already have an account?{" "}

              <button onClick={() => { navigate("/Login") }}

                type="submit"
                className="font-semibold text-[#E8FF28]  cursor-pointer"
              >
                Sign in
              </button>

            </p>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Register;