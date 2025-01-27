import React from "react";

interface Feature {
  img: string;
  text: string;
}

function Features(props: { callbackfn: (feature: Feature, index: number) => React.JSX.Element }) {
  const features: Feature[] = [
    { img: "/hero/FaHandshake.svg", text: "Rental and Lease Agreements" },
    { img: "/hero/FaBookOpen.svg", text: "Legal Opinions" },
    { img: "/hero/IoPersonOutline.svg", text: "Wills & Trusts" },
    { img: "/hero/Nda.svg", text: "Non-Disclosure Agreements" },
    { img: "/hero/VscLaw.svg", text: "Others" },
  ];

  return (
    <div className="relative w-full px-6 md:px-12 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
        {features.map(props.callbackfn)}
      </div>
    </div>
  );
}

export default Features;
