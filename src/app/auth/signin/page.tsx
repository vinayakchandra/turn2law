import React from 'react';

const AuthPage = () => {
  return (
    <div className="m-6 md:m-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-h-[90vh]">
        {/* Left Section */}
        <div
          className="text-white flex flex-col justify-center items-center  rounded-2xl md:rounded-l-2xl overflow-hidden">
          <div className="relative w-full h-[500px]">
            {/* Background Image */}
            <img
              src="/Law.svg"
              alt="Legal Scales"
              className=" w-full h-full object-cover rounded-3xl"
            />

            {/* Main Heading Positioned on the Left */}
            <div className="absolute inset-0 flex flex-col items-start px-6 text-left top-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                We Simplify Legal <br/>
                Access for <span className="text-yellow-600">Everyone.</span>
              </h1>
            </div>

            {/* Terms & Conditions Positioned at the Bottom Left */}
            <div className="absolute bottom-4 left-6 text-gray-300 text-sm pr-20">
              By Signing in, You accept our
              <a href="#" className="underline mx-1">Terms & Conditions</a>
              and
              <a href="#" className="underline mx-1">Privacy Policy</a>.
            </div>
          </div>

        </div>
        {/* Right Section */}
        <div
          className="bg-white flex flex-col justify-center items-center p-8 rounded-2xl md:rounded-r-2xl overflow-hidden border border-gray-300">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="password"
                placeholder="Passw*rd"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 hover:cursor-pointer"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <a href="/auth/signup" className="text-teal-600 hover:underline">
                Signup
              </a>
            </div>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300"/>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-t border-gray-300"/>
            </div>
            <button
              className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:cursor-pointer">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                alt="Google Logo"
                className="mr-3 h-5 w-5"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
