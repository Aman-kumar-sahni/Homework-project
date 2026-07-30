import {
  LogOut,
  ShoppingCart,
  Zap,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate()
 const user =  JSON.parse(localStorage.getItem("currentUser"))

  const [open, setOpen] = useState(false);
function logout(){
  localStorage.removeItem("currentUser")
  toast.success("Logout successfull")
  navigate("login")
}

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d] text-white">

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between  px-5 sm:px-8">


        {/* LOGO */}

        <div className="flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaff00] text-black sm:h-9 sm:w-9">

            <Zap
              size={18}
              fill="currentColor"
            />

          </div>


          <h1 className="text-lg font-bold sm:text-xl">
            Sky<span className="text-[#eaff00]">Mart</span>
          </h1>

        </div>



        {/* DESKTOP MENU */}

        <div className="hidden items-center gap-7 text-sm font-medium text-gray-500 md:flex">

          <NavLink
            to="home"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            Home
          </NavLink>


          <NavLink
            to="shop"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            Shop
          </NavLink>


          <NavLink
            to="about"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            About
          </NavLink>
             
        </div>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-2">


          {/* USER DESKTOP ONLY */}

          <div className="hidden max-w-[180px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:flex">

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#eaff00] text-xs font-bold text-black">
{user?.name?.charAt(0).toUpperCase()}
            </div>

           <span className="inline-block w-40 truncate text-sm font-medium">
  {user?.name}
</span>
          </div>


          {/* CART */}

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-[#eaff00]"
          >

            <ShoppingCart size={19} />
            


          </button>



          {/* LOGOUT */}

          <button
          onClick={()=>{
            logout()

          }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-200 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
          >
            <LogOut size={19} />
          </button>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          >

            {
              open
                ?
                <X size={20} />
                :
                <Menu size={20} />
            }


          </button>


        </div>


      </nav>



      {/* MOBILE MENU */}

      {
        open && (

          <div className="border-t border-white/10 bg-[#151515] px-5 py-5 md:hidden">


            <div className="flex flex-col gap-4 text-sm font-medium text-gray-300">


              <a className="text-[#eaff00]">
                Home
              </a>


              <a className="hover:text-[#eaff00]">
                Shop
              </a>


              <a className="hover:text-[#eaff00]">
                About
              </a>


              <button className="flex items-center gap-2 text-left text-amber-800 hover:text-[#eaff00]">

                <LogOut size={17} />

                Logout

              </button>


            </div>


          </div>

        )
      }


    </header>
  );
};

export default Navbar;   