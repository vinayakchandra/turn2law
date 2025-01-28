function Pricing() {
  return (
    <div className="p-8 flex flex-col justify-center items-center space-y-8 h-auto overflow-hidden">
      <span className="text-4xl text-text font-bold text-center">Pricing</span>

      {/* Flex container for pricing cards */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">

        {/* Normal Plan */}
        <div className="bg-border bg-[#C2C2C2] p-8 rounded-2xl w-80 h-96 flex flex-col items-center justify-center">
          <span className="text-4xl text-text font-bold">₹0</span>
          <span className="text-text text-sm">normal</span>
        </div>

        {/* Essential Plan */}
        <div className="bg-tertiary bg-[#00796b] p-8 rounded-2xl w-80 h-96 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white">₹99</span>
          <span className="text-gray-300 text-sm">essential</span>
        </div>

        {/* Premium Plan */}
        <div className="bg-secondary bg-[#DF9C49] p-8 rounded-2xl w-80 h-96 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white">₹500</span>
          <span className="text-gray-300 text-sm">premium</span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
