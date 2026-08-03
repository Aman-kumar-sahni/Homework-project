import {
  LogOut,
  ShoppingCart,
  Zap,
  Menu,
  X,
} from "lucide-react";

import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { cartContext } from "../features/cart/application/cartProvider";
  import Swal from "sweetalert2";

const Navbar = ({setIsCartOpen}) => {
  const navigate = useNavigate()
 const user =  JSON.parse(localStorage.getItem("currentUser"))

  const [open, setOpen] = useState(false);
function logout(){
  localStorage.removeItem("currentUser")
  toast.success("Logout successfull")
  navigate("/login")
}
  const {totalQuantity}=useContext(cartContext)



const handleLogout = async () => {
const result = await Swal.fire({
  title: "Are you sure?",
  text: " want Logout?",
  icon: "warning",

  showCancelButton: true,

  confirmButtonText: "Yes, Logout",
  cancelButtonText: "Cancel",

  background: "#1E1E1E",
  color: "#F5F5F5",

  confirmButtonColor: "#EAFF00",
  cancelButtonColor: "#3A3A3A",

  scrollbarPadding: false,   // ✅ Background shift fix
  heightAuto: false,         // ✅ Mobile fix

  customClass: {
    popup: "premium-popup",
    title: "premium-title",
    htmlContainer: "premium-text",
    confirmButton: "premium-confirm",
    cancelButton: "premium-cancel",
  },
});
  if (result.isConfirmed) {
                logout()

  }
};


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
            to="/home"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            Shop
          </NavLink>


          <NavLink
            to="/about"
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

     <div className="
  hidden
  w-fit
  max-w-[180px]
  min-w-0
  items-center
  gap-2
  rounded-xl
  border border-white/10
  bg-white/5
  px-3 py-2
  md:flex
">

  <div className="
    flex h-7 w-7 shrink-0
    items-center justify-center
    rounded-lg
    bg-[#eaff00]
    text-xs font-bold
    text-black
  ">
    {user?.name?.charAt(0).toUpperCase()}
  </div>

  <span className="
    min-w-0
    truncate
    text-sm font-medium
  ">
    {user?.name}
  </span>

</div>


          {/* CART */}

     <div className="relative shrink-0">
  <button
    onClick={() => setIsCartOpen(true)}
    className="
      flex h-10 w-10
      items-center justify-center
      rounded-xl
      border border-white/10
      bg-white/5
      text-gray-300
      transition-all duration-200
      hover:border-[#EAFF00]/40
      hover:bg-[#EAFF00]/10
      hover:text-[#EAFF00]
      active:scale-95,
      
    "
  >
    <ShoppingCart size={18} />
  </button>

  {totalQuantity > 0 && (
    <span
      className="
        absolute
        -right-1.5
        -top-1.5
        flex h-5 w-5
        items-center justify-center
        rounded-full
        bg-[#EAFF00]
        text-[10px]
        font-bold
        text-black
      "
    >
      {totalQuantity}
    </span>
  )}
</div>


          {/* LOGOUT */}

          <button
          onClick={()=>{
            handleLogout()

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


                 <NavLink
                 onClick={()=>{
                  setOpen(false)
                 }}
            to="/home"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            Home
          </NavLink>


          <NavLink
            onClick={()=>{
                  setOpen(false)
                 }}
            to="/shop"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            Shop
          </NavLink>


          <NavLink
            onClick={()=>{
                  setOpen(false)
                 }}
            to="/about"
            className={({ isActive }) =>
              `transition hover:text-amber-50 ${isActive ? "text-[#eaff00]" : ""
              }`
            }
          >
            About
          </NavLink>

              <button onClick={()=>{
                handleLogout()
              }} className="flex items-center gap-2 text-left text-amber-800 hover:text-[#eaff00] hover:text-amber-950">

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