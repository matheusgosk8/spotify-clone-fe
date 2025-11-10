import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
