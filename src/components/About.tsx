function About() {
  return (
    <div className="container mx-auto p-4 space-y-6 my-10">
      <header className="text-center mb-8 text-4xl font-semibold">Know about us.</header>
      <div className="accordion w-full">
        <div className="accordion-item border-b border-border">
          <div
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary  transition-colors duration-300">
            <a href="">
              What is Instant Access to Law?
            </a>
          </div>
        </div>
        <div className="accordion-item border-b border-border">
          <div
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary  transition-colors duration-300">
            <a href="">
              Key Statistics
            </a>
          </div>
        </div>
        <div className="accordion-item border-b border-border">
          <div
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary  transition-colors duration-300">
            <a href="">
              Channels of Instant Legal Access
            </a>
          </div>
        </div>
        <div className="accordion-item border-b border-border">
          <div
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary  transition-colors duration-300">
            <a href="">

              Included Services
            </a>
          </div>
        </div>
        <div className="accordion-item border-b border-border">
          <div
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary  transition-colors duration-300">
            <a href="">
              Why Choose Turn2Law?
            </a>
          </div>
        </div>
        <div className="accordion-item border-b border-border">
          <div
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary  transition-colors duration-300">
            <a href="">
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
