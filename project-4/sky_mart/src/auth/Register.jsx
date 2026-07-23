import {
  ArrowRight,
  Eye,
  LockKeyhole,
  Mail,
  UserRound,
  Zap,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useEffect } from "react";
const Register = () => {
  const { user, setUser, setError, error } = useContext(MyContext);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
    reset,
  } = useForm({
    mode: onchange
  });
  const passwordValue = watch("password");
  const emailValue = watch("email");
  const confirmPasswordValue = watch("confirmPassword");
  const nameValue = watch("name")
  useEffect(() => {
    if (emailValue || passwordValue) {
      setError("");
    }
  }, [emailValue, passwordValue, nameValue, confirmPasswordValue]);


  function onSubmit(data) {

    // Check duplicate email
    const isUserExists = user.some(
      ({ email }) => email === data.email
    );

    if (isUserExists) {
      setError("Email already registered");
      return;
    }

    // Save new user
    const allUsers = [...user, data];

    setUser(allUsers);

    localStorage.setItem(
      "sm-user",
      JSON.stringify(allUsers)
    );

    // Auto login after registration
    localStorage.setItem(
      "currentUser",
      JSON.stringify(data)
    );


    reset();

    navigate("/home");
  }



  return (
    <main className="min-h-screen bg-[#151515] px-5 py-8 text-white sm:px-8">

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">

        <div className="w-full max-w-md">


          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaff00] text-black">
                <Zap size={22} fill="currentColor" />
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                Sky<span className="text-[#eaff00]">Mart</span>
              </h1>

            </div>
          </div>


          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-[#191919] p-6 shadow-2xl sm:p-8">

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold">
                Create account
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Join SkyMart and start shopping
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Full Name */}
              <div className="mb-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                  <UserRound size={18} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name cannot exceed 50 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only letters and spaces are allowed",
                      },
                    })}
                  />


                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}

              </div>


              {/* Email */}
              <div className="mb-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                  <Mail size={18} className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                      maxLength: {
                        value: 100,
                        message: "Email cannot exceed 100 characters",
                      },
                      setValueAs: (value) => value.trim(),
                    })}
                  />


                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>


              {/* Password */}
              <div className="mb-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                  <LockKeyhole size={18} className="text-gray-400" />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`])[A-Za-z\d@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]{8,}$/,
                        message:
                          "Password must contain uppercase, lowercase, number and special character",
                      },
                    })}
                  />


                  <Eye
                    size={18}
                    className="cursor-pointer text-gray-400 transition hover:text-white"
                  />

                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

              </div>


              {/* Confirm Password */}
              <div className="mb-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                  <LockKeyhole size={18} className="text-gray-400" />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === passwordValue || "Passwords do not match",
                    })}
                  />

                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}

              </div>

              {error && (
                <p className=" mb-2 text-center text-sm text-red-500">
                  {error}
                </p>
              )}


              {/* Create Account Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center  rounded-xl bg-[#eaff00] py-3.5 font-medium text-black transition hover:bg-[#dfff00] active:scale-[0.98]"
              >
                Create Account
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <NavLink
                to="/"
                className="cursor-pointer font-semibold text-[#eaff00] !no-underline hover:!no-underline"
              >
                Sign in
              </NavLink>
            </p>


          </div>

        </div>

      </div>

    </main>
  );
};

export default Register;