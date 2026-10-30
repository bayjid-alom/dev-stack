import { X } from 'lucide-react';
import React from 'react';

const StackCard = ({ singleStack, isInStack }) => {
    return (
        <div
            key={singleStack.id}
            className="flex min-h-[86px] items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2"
        >
            {/* Technology Info */}
            <div className="flex min-w-0 items-center gap-3">
                <img
                    src={singleStack.image}
                    alt={singleStack.title}
                    className="h-7 w-7 shrink-0 object-contain"
                />

                <div className="min-w-0 text-left">
                    <h3 className="truncate text-base text-[13px] font-semibold text-slate-900">
                        {singleStack.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                        {singleStack.category}
                    </p>
                </div>
            </div>


            {/* Remove Icon */}
            <button className="shrink-0 text-slate-400 transition-colors hover:text-red-500">
                <X size={20} strokeWidth={1.8} />
            </button>

        </div>
    );
};

export default StackCard;