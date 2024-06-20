import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function page() {
  return (
    <div>
      <div className="p-2 text-bold flex gap-5">
        <RxHamburgerMenu className="mt-1 ml-2 h-5 w-5" />
        <p className="ml-5 text-xl font-bold">Welcome Kavya</p>
        <p className="font-bold text-xl absolute right-1/2">Dashboard</p>
        <p className="font-bold text-xl absolute right-2">20.04.2024/10.34</p>
      </div>
      <hr className="border-2" />
      <div>
        
      </div>
    </div>
  );
}

export default page;
