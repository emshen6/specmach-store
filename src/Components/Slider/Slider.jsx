import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative w-[100%] h-[636px] bg-[#1d2d54]">
      {sliderData.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <div className="absolute w-[500px] h-[400px] top-[118px] left-[215px] bg-white rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[470px] h-[329px] top-[35px] left-[15px] object-cover"
                      alt="img"
                      src={item.img}
                    />
                  </div>
                )}
              </div>

              <div className="absolute w-[530px] h-[401px] top-[118px] left-[855px] bg-[#1d2d54]">
                <p className="w-[530px] -top-px left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[37px] leading-[normal] absolute tracking-[0]">
                  {parseInt(item.id) === slideIndex && item.title}
                </p>
                <p className="w-[530px] top-[149px] left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[27px] leading-[normal] absolute tracking-[0]">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          </>
        );
      })}

      <div className="absolute w-[300px] h-[70px] top-[400px] left-[855px] bg-white rounded-[202px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
        <div className="w-[258px] top-[9px] left-[22px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#1d2d54] text-[20px] text-center leading-[45px] whitespace-nowrap absolute tracking-[0]">
          Подробнее
        </div>
      </div>

      <div className="flex absolute bottom-12  left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-light-blue-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-light-blue-300"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-light-blue-300"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
