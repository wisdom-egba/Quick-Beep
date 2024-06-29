import React from "react";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
const SignIn = () => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col md:flex-row shadow-xl max-w-[85%] md:max-w-[70%] lg:md:max-w-[50%] m-auto">
        <div className="w-full max-w-[90%] py-5 md:py-2 md:max-w-[60%] px-3">
          <div>
            <h1 className=" font-bold flex items-center md:items-start justify-center md:justify-start text-2xl ">
              Quick-<span className="text-[#5810ac]">Beep</span>
              <IoChatbubblesOutline size={35} />
            </h1>
          </div>
          <div>
            <h2 className="text-gray-500 py-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
              veniam doloribus blanditiis optio possimus velit natus nemo
              ducimus delectus, quo aliquam iste vero mollitia repellat
              inventore minima consecteturee placeat
            </h2>
          </div>
        </div>
        <div className=" shadow-md bg-[#d8c2f1] w-full md:max-w-[40%] py-5 md:py-20 px-2">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" mb-8 text-[#5810ac] font-semibold text-xl">
              Welcome Back!!
            </h1>
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            <Button
              text={`Sign-in with Google`}
              image={<FcGoogle size={20} />}
            />
            <div className="flex w-full justify-center items-center  my-4">
              <div className="bg-gray-500 w-16 h-[2px]" />
              <p className="px-2">Or</p>
              <div className="bg-gray-500 w-16 h-[2px]" />
            </div>
            <Button
              text={`Sign-in with Github`}
              image={<BsGithub size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
