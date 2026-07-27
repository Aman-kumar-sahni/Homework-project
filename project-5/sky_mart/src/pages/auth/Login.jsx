import {
  Zap,
  Mail,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthContext } from "../../app/providers/AppProviders";
import { toast } from "react-toastify";
const Login = () => {
  const { registered} = useContext(AuthContext)

  const [error, setError] = useState(null);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  function submitHandler(data) {
    const user = registered.find(
      (val) =>
        val.email === data.email &&
        val.password === data.password
    );

    if (!user) {
      setError("Invalid credential");
      return;
    }

    setError(null);
    reset(); // Form reset

toast.success("Login SuccessFull");
localStorage.setItem("currentUser",JSON.stringify(user))
    navigate("/")

  }
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <section className="relative  hidden overflow-hidden border-r  border-[#3A3A3A] lg:flex">

          {/* Background Glow */}
          <div className="absolute left-10  top-40 h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[140px]" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between px-14 pt-4 pb-14 xl:px-16 xl:pt-6 xl:pb-16">

            {/* Logo */}

            <div className="flex items-center gap-3 ">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FF28] shadow-[0_0_18px_rgba(232,255,40,.35)]">

                <Zap
                  size={20}
                  strokeWidth={2.8}
                  className="text-black fill-black"
                />

              </div>

              <h2 className="text-[42px] font-bold tracking-[-1px]">

                <span className="text-white">
                  Sky
                </span>

                <span className="text-[#E8FF28]">
                  Mart
                </span>

              </h2>

            </div>

            {/* Hero */}

            <div className="max-w-[560px] mt-20 ">

              <p className="mb-2 text-sm font-bold uppercase tracking-[4px] text-[#E8FF28]">

                WELCOME BACK

              </p>

              <h1 className="text-[72px] font-bold leading-[78px] tracking-[-2px]">

                Shop the future.

                <br />

                <span className="text-[#E8FF28]">

                  Today.

                </span>

              </h1>

              <p className="mt-8 max-w-[500px] text-[19px] leading-8 text-zinc-300">

                Thousands of products,
                lightning-fast delivery,
                and prices that make your wallet happy.

              </p>

              {/* Stats */}

              <div className="mt-16 grid grid-cols-3 gap-6">

                <div className="rounded-2xl border border-[#D7D7D7] bg-[#1A1A1A] py-7 text-center">

                  <h3 className="text-3xl font-bold text-[#E8FF28]">

                    20K+

                  </h3>

                  <p className="mt-2 text-sm text-zinc-300">

                    Products

                  </p>

                </div>

                <div className="rounded-2xl border border-[#D7D7D7] bg-[#1A1A1A] py-7 text-center">

                  <h3 className="text-3xl font-bold text-[#E8FF28]">

                    50K+

                  </h3>

                  <p className="mt-2 text-sm text-zinc-300">

                    Users

                  </p>

                </div>

                <div className="rounded-2xl border border-[#D7D7D7] bg-[#1A1A1A] py-7 text-center">

                  <h3 className="text-3xl font-bold text-[#E8FF28]">

                    4.9★

                  </h3>

                  <p className="mt-2 text-sm text-zinc-300">

                    Rating

                  </p>

                </div>

              </div>

            </div>

            <div />

          </div>

        </section>

        {/* ================= RIGHT SIDE ================= */}

        <section className="flex items-center justify-center px-6 py-10 lg:px-12">

          <div className="w-full max-w-[430px]">

            {/* Mobile Logo */}

            <div className="mb-10 flex justify-center lg:hidden">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8FF28] shadow-[0_0_18px_rgba(232,255,40,.35)]">

                  <Zap
                    size={20}
                    strokeWidth={2.8}
                    className="text-black fill-black"
                  />

                </div>

                <h2 className="text-4xl font-bold tracking-[-1px]">

                  <span className="text-white">
                    Sky
                  </span>

                  <span className="text-[#E8FF28]">
                    Mart
                  </span>

                </h2>

              </div>

            </div>

            {/* Login Card Starts Here */}            <div className="rounded-[28px] border border-[#3A3A3A] bg-[#1A1A1A] p-7 shadow-[0_0_35px_rgba(255,255,255,.03)] sm:p-8">

              {/* Heading */}

              <h2 className="text-[42px] font-bold leading-none tracking-[-1px]">
                Sign in
              </h2>

              <p className="mt-3 text-[15px] leading-6 text-zinc-400">
                Enter your credentials to continue
              </p>

              {/* Form */}

              <form onSubmit={handleSubmit(submitHandler)} className="mt-6 space-y-3">

                {/* Email */}
                {error && <div className="flex h-[45px] items-center rounded-2xl font-bold justify-center items-center  text-red-500 border border-[#5c5353] bg-[#926b6b] px-5 transition-all duration-300 focus-within:border-[#E8FF28] focus-within:shadow-[0_0_10px_rgba(232,255,40,.25)]">{error}</div>}


                <div className="flex h-[45px] items-center rounded-2xl border border-[#555555] bg-[#2B2B2B] px-5 transition-all duration-300 focus-within:border-[#E8FF28] focus-within:shadow-[0_0_10px_rgba(232,255,40,.25)]">

                  <Mail
                    size={18}
                    className="text-zinc-400"
                  />

                  <input
                    {...register("email", {
                      onChange: (() => { setError(null) }),
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


                <div className="flex h-[45px] items-center rounded-2xl border border-[#555555] bg-[#2B2B2B] px-5 transition-all duration-300 focus-within:border-[#E8FF28] focus-within:shadow-[0_0_10px_rgba(232,255,40,.25)]">

                  <Lock
                    size={18}
                    className="text-zinc-400"
                  />

                  <input
                    {...register("password", {
                      onChange: (() => { setError(null) }),

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
                    placeholder="Password"
                    className="ml-3 w-full bg-transparent text-[15px] text-white placeholder:text-zinc-400 outline-none"
                  />


                  <Eye
                    size={18}
                    className="cursor-pointer text-zinc-400"
                  />

                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

                {/* Button */}

                <button
                  className="mt-4 flex h-[45px] w-full items-center justify-center gap-3 rounded-2xl bg-[#E8FF28] text-lg font-semibold text-black shadow-[0_0_22px_rgba(232,255,40,.45)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(232,255,40,.7)]"
                >
                  Sign in

                  <ArrowRight size={20} />
                </button>

                {/* Footer */}

                <p className="pt-2 text-center text-[15px] text-zinc-400">

                  Don't have an account?{" "}

                  <span onClick={() => {
                    navigate("/register")
                  }} className="cursor-pointer font-semibold text-[#E8FF28] ">

                    Create one

                  </span>

                </p>

              </form>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
};

export default Login;