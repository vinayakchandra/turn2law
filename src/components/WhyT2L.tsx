import Image from 'next/image';

function WhyT2L() {
  return (

    <section
      className="mt-20 flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-orange-100 p-8 md:p-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-black mb-6">
          Why <span className="text-primary ">Turn2Law</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-md p-6">
          {[
            {
              img: '/landing/instant.svg',
              title: 'Instant legal services',
              description: 'Get agreements, contracts, NDAs, and other legal documents quickly with transparent, fixed pricing.'
            },
            {
              img: '/landing/lawyer.svg',
              title: 'Lawyer Matching System',
              description: 'Connect with expert lawyers tailored to your specific legal needs for seamless support.'
            },
            {
              img: '/landing/affordable.svg',
              title: 'Affordable subscriptions.',
              description: 'Choose cost-effective plans for lawyers and clients with exclusive benefits and no hidden fees.'
            },
            {
              img: '/landing/virtual.svg',
              title: 'Virtual consulting.',
              description: 'Access expert legal advice and consultations anytime, anywhere, from the comfort of your home.'
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <Image
                alt={item.title}
                src={item.img}
                width={40}
                height={40}
                className="mb-2"
              />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
        <div className="relative">
          <div className="absolute top-100 left-50 h-60 w-60 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          <Image src="/flag.svg"
                 alt="Flag Design"
                 width={320}
                 height={320}
                 className=""
          />
        </div>
      </div>
    </section>
  );
}

export default WhyT2L;
