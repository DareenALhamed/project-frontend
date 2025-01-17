// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

// export default function Cart() {
//     const[cartItems, setCartItems] = useState([])
//     const [loading, setLoading] = useState(false);

//     const getCartItems = async () => {
//       setLoading(true);
//       try {
//         const { data } = await axios.get(`${import.meta.env.VITE_API}/cart`);
//         if (data.message == "success")

//         setCartItems(data);
//       } catch (error) {
//         toast.error("error.response.data.message" || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };
//     useEffect(() => {
//         getCartItems();
//     }, []);

//     if (loading) {
//       return (
//         <div
//           style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
//         >
//           <SmallLoading color="blue" size={100} />
//         </div>
//       );
//     }
//   return (
//     <div>Cart</div>
//   )
// }

// import React from "react";

// export default function Cart() {
//   return (
//     <>
//       <h2>Shopping Cart</h2>
//       <div class="w-80 bg-white shadow rounded">
//         {" "}
//         <div
//           class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
//         >
//           {" "}
//           <div class="flex justify-between">
//             {" "}
//             <input type="checkbox" />{" "}
//             <button class="text-white hover:text-blue-500">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M12 4v16m8-8H4"
//                 />{" "}
//               </svg>{" "}
//             </button>{" "}
//           </div>{" "}
//           <div>
//             {" "}
//             <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
//               {" "}
//               available{" "}
//             </span>{" "}
//           </div>{" "}
//         </div>{" "}
//         <div class="p-4 flex flex-col items-center">
//           {" "}
//           <p class="text-gray-400 font-light text-xs text-center">
//             {" "}
//             Hammond robotics{" "}
//           </p>{" "}
//           <h1 class="text-gray-800 text-center mt-1">Item name</h1>{" "}
//           <p class="text-center text-gray-800 mt-1">€1299</p>{" "}
//           <div class="inline-flex items-center mt-2">
//             {" "}
//             <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-6 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M20 12H4"
//                 />{" "}
//               </svg>{" "}
//             </button>{" "}
//             <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
//               {" "}
//               2{" "}
//             </div>{" "}
//             <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-6 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M12 4v16m8-8H4"
//                 />{" "}
//               </svg>{" "}
//             </button>{" "}
//           </div>{" "}
//           <button class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
//             {" "}
//             Add to order{" "}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-6 w-6 ml-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//               />{" "}
//             </svg>{" "}
//           </button>{" "}
//           <div class="flex justify-between w-full mt-4">
//             {" "}

//             <div>
//               {" "}
//               <button class="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
//                 {" "}
//                 Add to Favorite{" "}

//               </button>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>
//     </>
//   );
// }

import React, { useContext } from 'react'
import { CartContext } from './../../contex/Cart';

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
   <>
    <div>
    <h2>Cart</h2>
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
   </>

  );
}

