import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsCart2, BsTelephone } from "react-icons/bs";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <div className="relative w-[1270px] h-[55px]">
      <div className="absolute w-[311px] h-[22px] top-[17px] left-[300px]">
        <Link
          to="/"
          className="w-[78px] top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[18px] absolute text-[#1d2c53] tracking-[0] leading-[normal]"
        >
          Главная
        </Link>
        <Link
          to="/constacts"
          className="w-[92px] top-0 left-[213px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[18px] absolute text-[#1d2c53] tracking-[0] leading-[normal]"
        >
          Контакты
        </Link>
        <Link
          to="/aboutus"
          className="w-[56px] top-0 left-[117px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[18px] absolute text-[#1d2c53] tracking-[0] leading-[normal]"
        >
          О нас
        </Link>
        <Link
          to="/products"
          className="w-[56px] top-0 left-[340px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[18px] absolute text-[#1d2c53] tracking-[0] leading-[normal]"
        >
          Каталог
        </Link>
      </div>

      <Link
        to="/"
        className="absolute w-[200px] h-[50px] top-[3px] left-0 ml-10"
      >
        <img
          className="absolute w-[50px] h-[50px] top-0 left-0 "
          alt="Logo"
          src={logo}
        />
        <div className="top-[9px] left-[59px] [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[25px] whitespace-nowrap absolute text-[#1d2c53] tracking-[0] leading-[normal]">
          СпецМаш
        </div>
      </Link>

      <div className="absolute w-[200px] h-[25px] top-[15px] left-[880px]">
        <p className="absolute top-0 left-[26px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#1d2c53] text-[18px] tracking-[0] leading-[normal]">
          +7 999 545 34 65
        </p>
        <BsTelephone />
      </div>

        <div className="absolute w-[200px] h-[25px] top-[15px] left-[1300px]">
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
              Заказ
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              ></Avatar>
            )}
          </div>
        </div>
    </div>
  );
};

export default Navbar;
