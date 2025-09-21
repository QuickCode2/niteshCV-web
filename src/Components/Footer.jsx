import React from 'react'
import { toast } from 'react-toastify';

const Footer = () => {
   const [result, setResult] = React.useState("");
 
   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);
 
     formData.append("access_key", "29066c0a-5435-4c95-9a88-6fe815b8a188");
 
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData,
     });

    const data = await response.json();

    if (data.success) {
         setResult("");
         toast.success("Email Subscribe Successfully");
         event.target.reset();
    } else {
       console.log("Error", data);
       toast.error(data.message);
       setResult("");
     }
   };
   
  return (
    <div className='relative w-full bg-neutral-200 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 '>
        <div>
          <p className='py-5'>@ 2025 by Nitesh Prajapati <br />
          Created by The-Nitesh-Codes</p>
        

            <form onSubmit={onSubmit}>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter Your email' 
                className='p-2 rounde bg-gray-200  border border-gray-500 focus:outline-none w-full md:w-auto '/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white cursor-pointer'>{result ? result : "Subscribe"}</button>
            </div>
            </form>
            </div>

        <div className='flex flex-col md:flex-row items-center gap-12 mt-12'>
          <div className='text-center'>
            <p className='font-bold mb-2'>Call</p>
            <p className='font-serif'>91+ 8905093477</p>
          </div>

          <div className='text-center'>
            <p className='font-bold mb-2'>Write</p>
            <p className='font-serif'>niteshahiniya2.0@gmail.com</p>
          </div>

          <div className='text-center'>
            <p className='font-bold mb-2'>Follow</p> 
            <div className='flex w-40 justify-center py-4 space-x-4'>
                <a href="https://www.instagram.com/nitesh_ahiniya2?igsh=MXRxc2VjaXB0Z3lxNQ==&utm_source=ig_contact_invite ">
                <img className='w-6 transition-all duration-300 hover:opacity-60' src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" /></a>

                <a href="https://www.facebook.com/niteshahiniya?mibextid=ZbWKwL">
                <img className='w-6 transition-all duration-300 hover:opacity-60' src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="" /></a>

                <a href="https://www.linkedin.com/in/nitesh-ahiniya-6b745a2b7">
                <img className='w-6 transition-all duration-300 hover:opacity-60' src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" alt="" /></a>

                <a href="https://x.com/AhiniyaNitesh?t=ouVfxdEHnRnk9ouqjbqAew&s=09 ">
                <img className='w-6 transition-all duration-300 hover:opacity-60' src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png" alt="" /></a>

                <a href="t.me/Nitesh_ahiniya2">
                <img className='w-6 transition-all duration-300 hover:opacity-60' src="https://cdn-icons-png.flaticon.com/128/2111/2111708.png" alt="" /></a>
            </div>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer

