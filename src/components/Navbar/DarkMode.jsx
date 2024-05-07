import React, { useState } from 'react'
import { CgDarkMode } from "react-icons/cg";

export default function DarkMode() {
    const [theme, setTheme]= useState("dark");
  return (
    <div className='relative'>

            <CgDarkMode onClick={()=> setTheme(theme==="dark" ? "light" :"dark")} className={`w-12 cursor-pointer absolute right-0 z-10 bg-primary ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>

    </div>
  )
}
