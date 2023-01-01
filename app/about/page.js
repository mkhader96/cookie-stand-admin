import React from "react";

import Image from "next/image";

export default function about() {
    return(
        <section className="bg-[#BD8C61] py-20 px-4  text-center items-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <div className="text-2xl mt-3">Welcome to our Cookies Stand Website</div>
            <div  className="text-2xl mt-3 mb-6">This Website is for our amazing quality cookies</div>
            <Image 
                              src='/assets/chocolate-chip-cookie-clipart.png'
                              width={300}
                              height={300}
                              alt="/"
                              className="mx-auto mt-10 "
                              
                              ></Image>


        </section>
    )
    }