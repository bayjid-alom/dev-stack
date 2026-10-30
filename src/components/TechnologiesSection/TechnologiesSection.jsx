
import React, { use } from 'react';
import TechCard from './TechCard';

const TechnologiesSection = ({ stacksPromise }) => {
    const stacks = use(stacksPromise);

    return (

        <section
            id="technologies"
            className="technologies mx-auto mb-18 w-[92%] md:mb-23 md:w-[90%] lg:mb-30 lg:w-[88%]"
        >


            {/* Section Heading */}
            <div className="heading mb-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>





            {/* Technologies and Stack */}
            <div className="card-and-stack-container grid grid-cols-1 items-start gap-5 lg:grid-cols-4">


                {/* Left Side - Technology Cards */}
                <div className="leftside grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

                   {
                    stacks.map(stack => <TechCard key={stack.id} stack={stack}></TechCard>)
                   }

                </div>





                {/* Right Side - Your Stack */}
                <aside className="rightside h-fit w-full rounded-xl border border-slate-100 bg-white p-3 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">

                    <h3 className="text-md font-bold text-slate-900">
                        Your Stack
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-slate-400">
                        No technologies selected yet.
                    </p>

                    {/* Empty Stack */}
                    <div className="mt-3 flex min-h-[70px] items-center justify-center rounded-lg border border-dashed border-slate-200 px-2 text-center">
                        <p className="text-[10px] text-slate-400">
                            Your stack is empty.
                        </p>
                    </div>

                </aside>

            </div>
        </section>
    );
};

export default TechnologiesSection;
