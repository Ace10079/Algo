"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const dashboard = () => {
    console.log("Signin up page");
    router.push("/");
  };
  return (
    <div className="flex lg:flex-row flex-col justify-center gap-16">
      <div className="mr-12">
        <div className="flex flex-col mt-5 border-solid border-2 border-black rounded-lg">
          <div className="ml-5 mr-5 mt-5 mb-5 ">
            <h2 className="text-2xl mb-4 text-black font-bold">Signup</h2>
            <form className="flex flex-col gap-4 ">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg py-2 px-6 w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="mail"
                  name="mail"
                  placeholder="Email ID"
                  className="border border-gray-300 rounded-lg py-2 px-6 w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg py-2 px-6 w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-lg py-2 px-6 w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="border border-gray-300 rounded-lg py-2 px-6 w-full"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-gray-700">
                I agree all Terms & Conditions and privacy policy
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#71BF51] rounded-lg text-white p-2 mt-2"
              >
                Signup
              </button>
            </form>
            <p className="mt-2 ml-16">
              Already have an account?
              <button onClick={dashboard} className="ml-1">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="h-48 w-48 flex mt-36 ml-36">
        <img src="/next.svg" alt="Next.js logo" />
      </div>
    </div>
  );
}

export default page;
