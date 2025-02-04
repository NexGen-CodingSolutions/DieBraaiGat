
export default function Navbar(params) {
    return (
        

<nav className="bg-white relative w-full ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/HomePage/Images/logo.png" className="h-28" alt="Company Logo"/>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href="">
      <i className="fa-solid fa-cart-shopping text-red text-4xl px-4 py-2 mr-10"></i>
      </a>
      <button type="button" className="text-white font-rubik bg-red rounded-lg text-base px-4 py-2 text-center ">Sign Up</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-brown focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a href="#" className=" block text-2xl py-2 px-3 text-brown">Catalogue</a>
      </li>
      <li>
        <a href="#" className="block py-2 text-2xl px-3 text-brown rounded">Location</a>
      </li>
      <li>
        <a href="#" className="block py-2 text-2xl px-3 text-brown rounded">Services</a>
      </li>
      <li>
        <a href="/Contact" className="block py-2 text-2xl px-3 text-brown rounded">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    )
}