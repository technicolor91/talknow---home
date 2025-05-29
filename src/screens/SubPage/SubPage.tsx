import React from "react";

export const SubPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#06020d] text-[#dcd7e4] p-8">
      <h1 className="text-4xl font-bold mb-8">Sub-level Page</h1>
      <p className="text-xl mb-4">This is a sub-level page of the TalkNow website.</p>
      <a href="/" className="text-[#8244ff] hover:underline">Back to Home</a>
    </div>
  );
};
