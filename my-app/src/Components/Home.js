import React from 'react';
// import bgImage from '../assets/program.jpg';
import { FaHtml5 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPlay } from "react-icons/fa6";


const Home = () => {

  return (
    <>
    <div className='home_comp background-position: center'>
      <div>
        <h1 className='text-black text-start text-7xl font-bold pt-40 pl-20'>Education opens up the mind</h1>
        <h2 className='ml-1 mt-5 font-bold text-4xl text-left pl-20 text-teal'>Unlock Your Coding Potential with CodeMind Learning</h2>
        <h4 className='text-left text-[#1d7285] font-semibold text-2xl glow-text'>Learn Web Development, React.js, Angular, and more — with <br />easy-to-follow tutorials, projects, and mentorship.</h4>
        {/* <button className='rounded-full bg-orange-400 p-2 align-middle'>Start course</button> */}
      </div>
      <div className='home'>
        <h1 className='flex-col font-bold text-4xl m-20 text-[#125462]'>Technologies You Will Learn</h1>
        <div className='icons'>
        <FaHtml5 className='mt-20 icons_1 courses' size={50}/>
        <FaAngular className='fs-1 mt-20 icons_2 courses' size={50}/>
        <RiJavaLine className='fs-1 mt-20 icons_2 courses' size={50}/>
        <SiPython className='fs-1 mt-20 icons_2 courses' size={50}/>
        <IoLogoJavascript className='fs-1 mt-20 icons_2 courses' size={50}/>
        <FaReact className='fs-1 mt-20 icons_2 courses' size={50}/>
        <FaNodeJs className='fs-1 mt-20 icons_2 courses' size={50}/>
        <SiMongodb className='fs-1 mt-20 icons_2 courses' size={50}/>
        </div>
      </div>
      <div className='flex'>
           <a href='/html' className='btn rounded-full bg-[#eb9b27] px-4 py-2'>START COURSE</a>
            <a href='/courses' className='btn rounded-full bg-[#4b8ca7] px-4 py-2 flex items-center gap-2'>
  <FaPlay />
  ALL COURSES
</a>
      </div>
    </div>
    </>
  )
}

export default Home
