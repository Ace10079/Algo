"use client";
import React, { useState } from "react";

import Buttons from "../Buttons";
import Navbar from "../Navbar";
import Table1 from "../Table1";


function Page() {
  return (
    <div className="flex flex-col gap-0">
    <Navbar/>
    <div className="">
      <Buttons/>
      <Table1/>
    </div>
  </div>
  );
}

export default Page;
