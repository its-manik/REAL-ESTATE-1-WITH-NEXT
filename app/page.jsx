import Box from "@/components/FeaturdBox";
import "./home.css";
import Link from "next/link";
import FeaturdBox from "@/components/FeaturdBox";
import ChooseBox from "@/components/ChooseBox";

export default function Home() {
  return (
    <>
      <main className="flex min-h-[91.4vh] flex-col items-center p-24">
        <div className="hero_content text-center z-50 mt-[200px] w-screen">
          <div className="text-white">
            <h1 className="text-6xl mb-3 font-bold">Find You Dream Home</h1>
            <p>From as low as $10 per day with limited time offer discounts.</p>
          </div>
          <div className="filter md:w-[90%] lg:w-[1050px] m-auto text-[#484848] bg-white grid grid-cols-2 md:grid-cols-5 p-5 rounded-xl gap-5 ">
            <div className="input_field rounded-md">
              <input
                type="text"
                className="border-none w-[100%] h-[100%] outline-none p-1 placeholder-[#484848]"
                placeholder="Enter Keyword..."
              />
            </div>
            <div className="input_field p-2 rounded-md">
              <select className="border-none w-[100%] h-[100%] outline-none p-1 placeholder-[#484848]">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
            <div className="input_field p-2 rounded-md">
              <select className="border-none w-[100%] h-[100%] outline-none p-1">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
            <div className="input_field p-2 rounded-md">
              <select className="border-none w-[100%] h-[100%] outline-none p-1">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
            <div className="input_field">
              <button
                type="submit"
                className="bg-my_primary p-4 rounded-lg w-[100%] text-white font-bold hover:bg-transparent hover:text-black"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-[#F7F7F7]">
        <div className="container w-[90%] md:w-[80%] lg:w-[90%] xl:w-[60%] flex flex-col gap-8 m-auto py-[100px]">
          <div className="section_heading text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">Featured Items</h2>
            <span className=" text-md text-[#8C778C]">
              Handpicked properties by our team.
            </span>
          </div>
          
          <div className="featured_boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <FeaturdBox />
            <FeaturdBox />
            <FeaturdBox />
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7]">
        <div className="container w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col gap-8 m-auto py-[100px]">
          <div className="section_heading text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">Why Choose Us</h2>
            <span className=" text-md text-[#8C778C]">
              We provide full service at every step.
            </span>
          </div>
          <div className="Choose_boxes grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <ChooseBox />
            <ChooseBox />
            <ChooseBox />
          </div>
        </div>
      </section>

    </>
  );
}
