import React from "react";
import Slider from "react-slick";
import { toast } from "react-toastify";
import SmallLoading from './../../components/SmallLoading/SmallLoading';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import ProductCard from "../../components/ProductCard/ProductCard";
// import Catagories from "../catagories/Catagories";

export default function AfterNav() {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);

  const getCategories = async () => {
    setLoader(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/categories?limit=10`
      );


      console.log(data);
      if (data.message == "success") {
        setCategories(data.categories);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  if (loader) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
      >
        <SmallLoading color="blue" size={100} />
      </div>
    );
  }

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="container">
        <div
          className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center
          bg-gray-300
        "
        >
          <div className="container pb-8 sm:pb-0 ">
            <Slider {...settings}>
              {categories.map((category) => (
                <div key={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* <div className="col-span-1 sm:col-span-2"> */}
                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl sm:text-6xl  font-bold "
                      >
                        Latest Products
                      </h1>

                      <div>
                        <button className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative bg-primary text-white">
                          <Link to= './categories/:id'>Shop Now</Link>
                        </button>
                      </div>
                    </div>

                    <div className="order-1 sm:order-2 ">
                      <div
                        data-aos="zoom-in"
                        data-aos-once="true"
                        className="relative z-10"
                      >
                        <img
                          src={category.image.secure_url}
                          alt={category.name}
                          className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                        ></img>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
        </div>
      </div>
     
    </>
  );
}
