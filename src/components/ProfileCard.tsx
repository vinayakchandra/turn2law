// ProfileCard.tsx
import React from "react";

interface ProfileCardProps {
  name: string;
  practiceArea: string;
  court: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, practiceArea, court, imageUrl }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img src={imageUrl} alt={name} className="w-full rounded-lg mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{practiceArea}</p>
      <span className="block mt-2 text-xs text-gray-400">{court}</span>
      <button className="mt-4 w-full bg-teal-500 text-white p-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-teal-600">
        <span>Message</span>
      </button>
    </div>
  );
};

export default ProfileCard;
