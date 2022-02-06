import React from "react";

function ProfileTips() {
  return (
    <div className="bg-slate-700 w-4/5 min-h-fit rounded-xl flex flex-col p-6">
      <p className="font-extrabold text-slate-400 text-xl">Quick Tip</p>
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="font-semibold text-slate-500">
          Connect your wallet to be able to buy and sell NFTs from your
          favourite artists. Our platform currently supports MetaMask and Trust
          Wallet.
        </p>
      </div>
    </div>
  );
}

export default ProfileTips;
