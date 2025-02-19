import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (

  <footer class="text-gray-600 body-font bg-[#eff1fdc9]">
  <div class="w-10/12 pt-20 mx-auto flex justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 md:text-left">
      <Link class="flex title-font font-medium items-center justify-start text-gray-900">
       <img src={logo} alt="logo"className='w-10' />
        <span class="ml-1 text-xl text-[#031278] font-bold">TrakSmart.</span>
      </Link>
      <p class="mt-2 text-sm text-gray-500 mb-7 text-left pr-2">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex flex-wrap">
      <div class="">
        <h2 class="title-font font-bold text-[#0d133d] tracking-widest text-lg mb-3">QuickLinks</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Home</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">About</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Our Packages</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Contact</a>
          </li>
        </nav>
      </div>
    </div>
    <div class=" flex-wrap">
      <div class="">
        <h2 class="title-font font-bold text-[#0d133d] tracking-widest text-lg mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Add Employee</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Employee List</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Asset List</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Request Asset</a>
          </li>
        </nav>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="">
        <h2 class="title-font font-bold text-[#0d133d] tracking-widest text-lg mb-3">Resources</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Blogs</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">FAQs</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Support</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#031278]">Privace & Policy</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <div class="bg-[#031278]">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p>Copyright © TrakSmart @Prv.Company {new Date().getFullYear()} - All right reserved</p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

  )
}
