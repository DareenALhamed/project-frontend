import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SmallLoading from "./../../components/SmallLoading/SmallLoading";
import Products from "../products/Products";

export default function Catagories() {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/categories`
      );

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

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {categories.map((category) => (
              <p>hi</p>
            ))}

            <div>
              <button className="bg-primary text-white">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
