const ConsultUsForm = () => {
  return (
    <section className="py-12 md:py-16 flex flex-col md:flex-row items-center justify-center bg-[#00796b] p-6">

    {/* Artwork Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="bg-gray-300 w-3/4 h-64 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-black">ART<br />WORK</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold text-white mb-4">Provide your details</h2>
        <form className="bg-teal-500 p-6 rounded-lg space-y-4 shadow-lg">
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-white mb-1" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="+91"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex-2">
              <label className="block text-sm font-medium text-white mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="description">Describe</label>
            <textarea
              id="description"
              placeholder="Provide details here..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-primary bg-teal-800 text-white font-medium rounded hover:bg-primary-dark transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConsultUsForm;
