import React from "react"

export function Property(props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="relative pb-2/3 bg-red-500">
        <img
          className="absolute h-full w-full object-cover object-top"
          alt="house"
          src="https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg"
        />
      </div>
      <div className="p-6">
        <div className="flex items-baseline">
          <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold">
            New
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            3 beds &bull; 2 baths
          </div>
        </div>
        <h4 className="mt-1 font-semibold text-lg leading-tight flex-wrap truncate">
          This is a beautiful home in downtown LA. Shoppin 2min.
        </h4>
        <div>
          $2000<span className="text-gray-600 text-sm">/mo.</span>
        </div>
        <div className="flex">
          {[1, 1, 1, 1].map((x, i) => (
            <svg
              key={i}
              className={`h-4 w-4 fill-current ${
                i > 2 ? "text-gray-500" : "text-brand-blue"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7.508 6.944"
            >
              <path
                d="M6.076 6.942l-2.32-1.185-2.32 1.187.442-2.512L0 2.654l2.594-.368L3.752 0l1.162 2.285 2.594.365-1.876 1.78z"
                fill-rule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
