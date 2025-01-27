const Banner = () => (
  <div className="bg-[#00796b] py-2 overflow-hidden h-10">
    <div className="flex items-center animate-marquee whitespace-nowrap">
      {["100+ LAWYERS", "TRUSTED BY 100+ USERS", "POWERED BY AI", "MADE FOR INDIA"].map((text, index) => (
        <span key={index} className="text-white font-medium px-4"
        >
          {text}
        </span>
      ))}
    </div>
  </div>
);

export default Banner;
