import {
  ArrowRight,
  Eye,
  LockKeyhole,
  Mail,
  UserRound,
  Zap,
} from "lucide-react";

const Register = () => {
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


            {/* Full Name */}
            <div className="mb-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                <UserRound size={18} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                />

              </div>
            </div>


            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                <Mail size={18} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                />

              </div>
            </div>


            {/* Password */}
            <div className="mb-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                <LockKeyhole size={18} className="text-gray-400" />

                <input
                  type="password"
                  placeholder="Password (min 6 chars)"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                />

                <Eye
                  size={18}
                  className="cursor-pointer text-gray-400 transition hover:text-white"
                />

              </div>
            </div>


            {/* Confirm Password */}
            <div className="mb-6">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition focus-within:border-[#eaff00]">

                <LockKeyhole size={18} className="text-gray-400" />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
                />

              </div>
            </div>


            {/* Create Account Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#eaff00] py-3.5 font-medium text-black transition hover:bg-[#dfff00] active:scale-[0.98]"
            >
              Create Account
              <ArrowRight size={18} />
            </button>


            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <span className="cursor-pointer font-semibold text-[#eaff00] hover:underline">
                Sign in
              </span>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Register;