import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  const size = reviews.length;

  function leftShiftHandler(){
    setIndex((prev) => prev === 0 ? size-1 : --prev);
  }
  
  function rightShiftHandler(){
    setIndex((prev) => prev === size-1 ? 0 : ++prev);
  }
  
  function surpriceHandler(){
    setIndex((prev) => {let randomNumber; do{randomNumber = Math.floor(Math.random() * size)}while(randomNumber === prev) return randomNumber});
  }

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriceHandler}
        >
          Surprice Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
