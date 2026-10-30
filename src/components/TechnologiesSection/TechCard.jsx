import React from 'react';

const TechCard = ({ stack }) => {



    return (

        <div

            className="rounded-xl border border-slate-100 bg-white p-3 lg:p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-100 hover:shadow-lg hover:shadow-slate-200/50"
        >
            {/* Card Top */}
            <div className="mb-4 flex items-center justify-between">
                <img
                    src={stack.image}
                    alt={stack.title}
                    className="h-7 w-7 object-contain"
                />

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
                    {stack.badge}
                </span>
            </div>

            {/* Card Information */}
            <h3 className="text-md font-bold text-slate-900">
                {stack.title}
            </h3>

            <p className="mt-3 mb-4 min-h-[52px] text-[12px] leading-[17px] text-slate-500">
                {stack.description}
            </p>

            {/* Card Details */}
            <div className="mt-3 flex items-center justify-between gap-1 border-t border-slate-100 pt-2.5">
                <span className="rounded bg-slate-100 px-1.5 py-1 text-[9px] text-slate-600">
                    {stack.category}
                </span>

                <span className="text-[9px] text-slate-500">
                    {stack.level}
                </span>

                <span className="flex items-center gap-1 text-[10px] font-medium text-slate-700">
                    <span className="text-amber-400">★</span>
                    {stack.rating}
                </span>
            </div>

            {/* Add to Stack Button */}
            <button className="mt-5 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white transition-colors duration-300 hover:bg-pink-600">
                Add to Stack
            </button>
        </div>
    );
};

export default TechCard;