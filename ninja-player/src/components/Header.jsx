import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoLogInOutline } from "react-icons/io5";

const USER_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6Z4MyDVhzcurJum71_bmXamL73ZoNik_fw&usqp=CAU";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex justify-between p-3 border-b-[2px] border-[#FF3366]">
      <img src="./Images/logo.png" alt="logo" width={150} className="" />
      <div className="flex gap-4">
        <button className="bg-black p-2 px-3 text-white rounded-full">
          <span className="hidden sm:block"> CREATE POST</span>{" "}
          <HiOutlinePencilSquare className="sm:hidden text-[20px]" />
        </button>
        {!session ? (
          <button
            className="bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full"
            onClick={() => signIn()}
          >
            <span className="hidden sm:block"> SIGN IN</span>{" "}
            <IoLogInOutline className="sm:hidden text-[20px]" />
          </button>
        ) : (
          <button
            className="bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full"
            onClick={() => signOut()}
          >
            <span className="hidden sm:block"> SIGN OUT</span>{" "}
            <IoLogInOutline className="sm:hidden text-[20px]" />
          </button>
        )}
        <Image
          src={session ? session?.user?.image : USER_IMAGE}
          alt="user"
          width={45}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
