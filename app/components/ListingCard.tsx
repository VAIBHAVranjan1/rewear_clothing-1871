import React from "react";
import { Item } from "@/data/userData";

const ListingCard: React.FC<Item> = ({ title, image }) => {
  return (
    <div className="border border-white rounded p-2 flex flex-col items-center text-center">
      <img src={image} alt={title} className="w-20 h-20 object-cover mb-2 rounded" />
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default ListingCard;
