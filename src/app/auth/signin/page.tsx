import React from 'react';

const AuthPage = () => {
  return (
    <div className="m-6 md:m-8">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen rounded-2xl overflow-hidden gap-4 md:gap-8">
        {/* Left Section */}
        <div className="bg-black text-white flex flex-col justify-center items-center p-8 rounded-bl-2xl md:rounded-l-2xl overflow-hidden">
          <div className="text-left">
            <h1 className="text-4xl font-bold">
              We Simplify Legal <br />
              Access for <span className="text-yellow-500">Everyone.</span>
            </h1>
            <div className="mt-10">
              <img
                src="https://s3-alpha-sig.figma.com/img/ff05/7d11/45dedd846c62144deea62657a794a985?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ok-E945EcQahJX7N1wnDdnMvMSfBfc7As2EE4qImiED0GXu~6bdkRPnTBPSLtH7xE0eGa~uVDecXwcLxaMqa0h8jfJlSvyXpcYw4Vb6~ibcUSuVwRoUAld68MnRYEMBPaQy3D3jIxs-NC9FlD7LIcw0F1Bawey6QHIRNtsQ8UYOecyGbOGocOgQmfOAdGlZOA7mf-in6WWzyJ7yN6JXhbU6RM-qXwdnYg82FNVLThjqan-BmfwSQEspwkXdeWTewdEyKFsesO7FvD3SL-H-KAoKFjGcVLlfQdo-64uNkLeJSjphEeaSJWH7RK7nkcLFe4pZ0JqnBMXSblb6Y5nZoGQ__"
                alt="Legal Scales"
                className="object-cover w-full"
              />
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              By Signing in, You accept our Terms & Condition and Privacy Policy
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white flex flex-col justify-center items-center p-8 rounded-tr-2xl md:rounded-r-2xl overflow-hidden border border-gray-300">
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
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-100 hover:cursor-pointer">
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
