import React from "react";
import trucks_img from "../../assets/images/group.png";

const Header = () => {
  return (
    <div className="relative w-[100%] h-[600px]">
      <div className="absolute w-[570px] h-[504px] top-[100px] left-[215px]">
        <div className="absolute w-[570px] h-[135px] top-0 left-0">
          <p className="absolute w-[570px] -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#1d2c53] text-[30px] tracking-[0] leading-[45px]">
            Мы - компания занимающаяся производством автомобилей специального
            назначения
          </p>
        </div>
        <div className="absolute w-[570px] h-[70px] top-[165px] left-0 overflow-hidden">
          <p className="w-[570px] -top-px left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#1d2c53] text-[30px] leading-[normal] absolute tracking-[0]">
            Посмотреть технику и узнать цену можно в несколько кликов
          </p>
        </div>

        <div className="absolute top-[270px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[45px] whitespace-nowrap">
            <button className="relative w-[300px] h-[70px] bg-[#1d2c53] rounded-[34px] overflow-hidden shadow-[0px_4px_4px_#00000040] all-[unset] box-border">
                Перейти к технике
            </button>
        </div>
      </div>

      <div className="absolute w-[534px] h-[564px] top-[100px] left-[851px]">
        <img
          className="absolute w-[534px] h-[270px] top-0 left-0"
          alt="trucks"
          src={trucks_img}
        />
      </div>
    </div>
  );
};

export default Header;
