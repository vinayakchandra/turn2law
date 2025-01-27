const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-2xl font-bold text-gray-400">Turn2Law</h1>
            <p className="text-3xl font-semibold mt-2">Simplifying legal access to everyone.</p>
          </div>
          {/*<div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">*/}
          {/*  <svg*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    fill="none"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    strokeWidth="2"*/}
          {/*    stroke="white"*/}
          {/*    className="w-6 h-6"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      d="M17 7l-10 10m0-10l10 10"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</div>*/}
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8 space-y-10 lg:space-y-0">
          <div className="flex flex-wrap gap-50">
            <div>
              <h2 className="text-lg font-semibold">Links</h2>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Get a lawyer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    This
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    That
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Socials</h2>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    This
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    That
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="relative">
            <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-bold text-lg rounded-lg shadow-md hover:bg-gray-300 cursor-pointer">
              QR
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm mt-10">
          Copyright
        </div>
      </div>
    </footer>
  );
};

export default Footer;
