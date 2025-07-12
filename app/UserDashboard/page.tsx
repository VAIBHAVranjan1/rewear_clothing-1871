import React from "react";
import ListingCard from "@/components/ListingCard";
import PurchaseCard from "@/components/PurchaseCard";
import { listings, purchases } from "@/data/userData";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      <div className="text-lg mb-4">User Dashboard</div>

      {/* Header */}
      <div className="bg-gray-900 p-4 rounded-lg border border-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-black border border-white rounded w-full sm:w-auto"
          />
          <div className="bg-white text-black px-3 py-1 rounded">Screen 6</div>
        </div>

        <div className="flex flex-col sm:flex-row mt-4 gap-4">
          {/* Profile Circle */}
          <div className="w-24 h-24 rounded-full border border-white"></div>

          {/* User Info Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-6 bg-black border border-white rounded"></div>
            ))}
          </div>
        </div>

        {/* Bio/Info box */}
        <div className="mt-4 h-20 bg-black border border-white rounded"></div>
      </div>

      {/* My Listings */}
      <div className="mt-6">
        <div className="mb-2 text-lg">My Listings</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {listings.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* My Purchases */}
      <div className="mt-6">
        <div className="mb-2 text-lg">My Purchases</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {purchases.map((item) => (
            <PurchaseCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
