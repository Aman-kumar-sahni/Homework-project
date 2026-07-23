import {
  ArrowRight,
  Eye,
  LockKeyhole,
  Mail,
  Zap,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useEffect } from "react";


const Login = () => {


  const { error, setError } = useContext(MyContext)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const emailValue = watch("email");
  const passwordValue = watch("password");
  useEffect(() => {
    if (emailValue || passwordValue) {
      setError("");
    }
  }, [emailValue, passwordValue]);

  const onSubmit = (data) => {

    // Get all registered users
    const users =
      JSON.parse(localStorage.getItem("sm-user")) || [];


    // Find user by email
    const currentUser = users.find(
      ({ email }) => email === data.email
    );


    // Email not found
    if (!currentUser) {
      setError("Invalid Email");
      return;
    }
    if (currentUser.password !== data.password) {
      setError("Incorrect Password");
      return;
    }

    setError("");

    localStorage.setItem(
      "currentUser",
      JSON.stringify(currentUser)
    );



    navigate("/home");
  };
  return (
    <main className="min-h-screen bg-[#151515] text-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* LEFT SIDE */}
        {/* LEFT SIDE */}
        <section className="hidden lg:flex lg:min-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:border-r lg:border-white/10 lg:px-12 lg:py-8 xl:px-16">

          {/* ---------------- LOGO ---------------- */}

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaff00] text-black">
              <Zap
                size={22}
                fill="currentColor"
              />
            </div>

            <h1 className="text-2xl font-bold tracking-tight">
              Sky
              <span className="text-[#eaff00]">
                Mart
              </span>
            </h1>

          </div>

          {/* ---------------- HERO CONTENT ---------------- */}

          <div className="max-w-xl flex flex-col mb-15">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#eaff00]">
              Welcome Back
            </p>

            <h2 className="text-5xl font-bold leading-tight xl:text-6xl">
              Shop the future.
              <br />

              <span className="text-[#eaff00]">
                Today.
              </span>

            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-gray-300">
              Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
            </p>

            {/* ---------------- STATS ---------------- */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
                <h3 className="text-2xl font-bold text-[#eaff00]">
                  20K+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Products
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
                <h3 className="text-2xl font-bold text-[#eaff00]">
                  50K+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Users
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
                <h3 className="text-2xl font-bold text-[#eaff00]">
                  4.9★
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Rating
                </p>
              </div>

            </div>

          </div>



        </section>
        {/* RIGHT SIDE */}

        <section className="flex min-h-screen w-full items-center justify-center px-5 py-6 sm:px-8 lg:w-1/2 lg:px-12">

          <div className="w-full max-w-md">

            {/* Mobile / Tablet Logo */}
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaff00] text-black">
                <Zap
                  size={22}
                  fill="currentColor"
                />
              </div>

              <h1 className="text-3xl font-bold tracking-tight">
                Sky
                <span className="text-[#eaff00]">
                  Mart
                </span>
              </h1>

            </div>

            {/* Login Card */}

            <div className="rounded-2xl border border-white/10 bg-[#191919] p-5 shadow-xl sm:p-6 lg:p-8">

              <div className="mb-8">

                <h2 className="text-2xl font-bold lg:text-3xl">
                  Sign in
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Enter your credentials to continue
                </p>

              </div>



              {/* FORM START */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">


                  <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">
                    <Mail
                      size={18}
                      className="shrink-0 text-gray-400"
                    />
                    <input

                      type="email"
                      onChange={() => setError("")}

                      placeholder="Email address"

                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                      {...register("email", {

                        required:
                          "Email is required",


                        pattern: {

                          value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,

                          message:
                            "Enter a valid email"

                        }

                      })}

                    />



                  </div>
                  {errors.email && (

                    <p className="mt-2 text-sm text-red-500">

                      {errors.email.message}

                    </p>


                  )}

                </div>





                {/* PASSWORD */}


                <div className="mb-6">
                  <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">
                    <LockKeyhole
                      size={18}
                      className="shrink-0 text-gray-400"
                    />

                    <input

                      type="password"
                      onChange={() => setError("")}

                      placeholder="Password"

                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"

                      {...register("password", {

                        required:
                          "Password is required"

                      })}

                    />
                    <Eye
                      size={18}
                      className="shrink-0 cursor-pointer text-gray-400 transition hover:text-white"
                    />


                  </div>



                  {errors.password && (

                    <p className="mt-2 text-sm text-red-500">

                      {errors.password.message}

                    </p>

                  )}
                  {error && (
                    <p className="mt-2 text-center text-sm text-red-500">
                      {error}
                    </p>
                  )}



                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#eaff00] py-3.5 font-medium text-black transition hover:bg-[#dfff00] active:scale-[0.98]"
                >

                  Sign in

                  <ArrowRight
                    size={18}
                  />

                </button>





                {/* REGISTER LINK */}

                <p className="mt-6 text-center text-sm text-gray-400">

                  Don't have an account?{" "}

                  <NavLink

                    to="/register"

                    className="cursor-pointer font-semibold text-[#eaff00] !no-underline hover:!no-underline"

                  >

                    Create one

                  </NavLink>


                </p>




              </form>

              {/* FORM END */}



            </div>

          </div>


        </section>


      </div>


    </main>

  );

};


export default Login;