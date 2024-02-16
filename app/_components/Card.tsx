import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  reverse = true,
}) => {
  return (
    <div
      className={`max-w-7xl bg-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-center mx-auto px-5 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`w-full md:w-1/2 col-md-6 p-8`}>
        <h1
          className={`uppercase tracking-wide text-indigo-500 text-6xl font-extrabold ${
            reverse ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-2 text-gray-500 text-base font-normal${
            reverse ? "text-right" : "text-left"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="w-full md:w-1/2 col-md-6">
        <img
          className="h-36 max-h-48 w-full object-cover md:w-full"
          src={imageUrl}
          alt="Card image"
        />
      </div>
    </div>
  );
};

export default Card;
