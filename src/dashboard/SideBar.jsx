import React, { useContext } from 'react'
"use client";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiOutlineServer, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import userImg from "../assets/profile.jpg"
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SideBar = () => {
  const {user} = useContext(AuthContext);
  
  const {logout} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = ()=>{
    logout().then(() => {
        // Sign-out successful.
        toast.warn(`Sign-out successful!!`);
        navigate(from, { replace: true });
      }).catch((error) => {
        // An error happened.
        toast.error(`Error`)
      });
}

  console.log(user);
  return (
    <div className='px-4 my-20'>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="user logo" className='rounded-lg w-16 h-16'>
          <p>
            {user?.displayName || "Demo User"}
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className=' hover:text-blue-700'>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className=' hover:text-blue-700'>
              Uplaoad Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiOutlineServer} className=' hover:text-blue-700'>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/product" icon={HiShoppingBag} className=' hover:text-blue-700'>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className=' hover:text-blue-700'>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight} className=' hover:text-blue-700'>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable} onClick={handleLogout} className=' hover:text-blue-700'>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default SideBar