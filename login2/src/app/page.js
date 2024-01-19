import Image from 'next/image'
import { FaFacebook, FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
export default function Home() {
  return (
    <main className="bg-gray-200 flex flex-col items-center justify-center w-full h-screen flex-1 px-20 text-center">
      <div className='bg-white rounded-2xl flex w-2/3 max-w-4xl shadow-lg'>
        <div className='text-teal-500 w-3/5 p-5'>
          <div className='text-left font-bold'>
            <span className='text-teal-500'>Mas</span><span className='text-black'>Hel</span>
          </div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-teal-500 mb-2'>
              Sign in to Account
            </h2>
            <div className='border-2 border-teal-500 w-10 inline-block mb-2'></div>
            <div className='flex justify-center my-2'>
              <a href='#' className='border-2 border-gray-200 rounded-full mx-1'>
                <FaFacebook className='text-2xl'></FaFacebook>
              </a>
              <a href='#' className='border-2 border-gray-200 rounded-full mx-1'>
                <FaGithub className='text-2xl'></FaGithub>
              </a>
              <a href='#' className='border-2 border-gray-200 rounded-full mx-1'>
                <FaLinkedinIn className='text-2xl'></FaLinkedinIn>
              </a>
            </div>
            <p className='text-gray-400 my-3'>
              pake email juga bisa bang
            </p>
            <div className='flex flex-col items-center'>
              <div className='bg-gray-200 w-64 p-2 rounded-lg flex items-center'>
                <FaRegEnvelope className='text-gray-400 m-1'></FaRegEnvelope>
                <input type='email' name='email' placeholder='Your Email' className='bg-gray-200 outline-none text-sm font-medium text-black flex-1'/>
                </div>
            </div>
          </div>
        </div>
        <div className='bg-teal-500 w-2/5 rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-white font-bold text-3xl mb-2'>
            Join Us!
          </h2>
          <div className='border-2 w-10 inline-block mb-2'></div>
          <p className='mb-10'>
            bikin akun disini bang tulis aja terserah
          </p>
          <a href='#' className='font-semibold border-2 rounded-full inline-block px-12 py-2 hover:bg-white hover:text-teal-500'>
            SIGN UP
          </a>
        </div>
      </div>
    </main>
  )
}
