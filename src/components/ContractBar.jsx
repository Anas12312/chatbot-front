import React from 'react'

export default function ContractBar() {
    return (
        <div id="application-sidebar" className="
         transition-all duration-300 transform 
         hidden fixed 
         top-20 start-[calc(100%-18rem)] bottom-0 z-[60] w-72
          bg-white border-e border-gray-200 
          pt-7 pb-10 
          overflow-y-auto 
          lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 
          [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 
          ">

            <div className='flex flex-col items-center justify-start h-full px-3 text-sm'>

                <div className='relative flex flex-col justify-center items-center bg-white w-full py-5 rounded-xl border border-gray-200'>

                    <div className='flex justify-starts items-center w-full mb-4 pl-6 space-x-3'>

                        <div className='flex items-center justify-center'>
                            <span>
                                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><path fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.27 16.89a5 5 0 10-6.54 0M18 19.86a9 9 0 10-12 0"></path></svg>
                            </span>
                        </div>

                        <div className='font-medium text-base'>
                            Status
                        </div>

                        <div className='absolute right-5'>
                            <span>
                                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M6 15l6-5 6 5"></path></svg>
                            </span>
                        </div>
                    </div>
                    {/* 
                    <ol className="relative text-gray-500 border-s-2 border-[#1F57C3] ">
                        <li className="mb-10 ms-6 ">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-[#1F57C3] rounded-full -start-4 ring-4 ring-white ">
                                <svg className="w-3.5 h-3.5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="leading-tight font-medium text-lg">Proposal submitted</h3>
                            <p className="text-sm">April 12</p>
                        </li>
                        <li className="mb-10 ms-6 ">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-[#1F57C3] rounded-full -start-4 ring-4 ring-white ">
                                <svg className="w-3.5 h-3.5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight text-lg">Contract offer</h3>
                            <p className="text-sm">Awaiting offer from client</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white ">
                                <svg className="w-3.5 h-3.5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight text-lg">Accept contract</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white ">
                                <svg className="w-3.5 h-3.5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight text-lg">Contract start</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                    </ol> */}


                    <ol className=" overflow-hidden space-y-8">
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-[#1F57C3] after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-[#1F57C3] border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                    <svg className="w-5 h-5 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="my-path"></path>
                                    </svg>
                                </span>
                                <div className="block">
                                    <h4 className="text-base text-gray-500">Proposal submitted</h4>
                                    <span className="text-xs text-gray-500">April 12</span>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-indigo-50  border-2 border-[#1F57C3] rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #1F57C3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3h15m0 18H5m7.5-9C9.44 13.23 7 16.95 7 21h11c0-4.05-2.44-7.77-5.5-9zm0 0c3.06-1.23 5.5-4.95 5.5-9H7c0 4.05 2.44 7.77 5.5 9z"></path></svg>
                                </span>
                                <div className="block">
                                    <h4 className="text-base text-black">Contract offer</h4>
                                    <span className="text-xs">Awaiting offer from client</span>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-slate-50  border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10">
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17.47H5.71A2.71 2.71 0 013 14.76v-9A2.71 2.71 0 015.71 3H12a2.71 2.71 0 012.72 2.71v2M5.71 6.62h6.33M5.71 9.33h2.88"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.57 21a5.43 5.43 0 100-10.86 5.43 5.43 0 000 10.86z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 13.85l-3.46 3.45-1.39-1.4"></path>
                                    </svg>
                                </span>
                                <div className="block">
                                    <h4 className="text-base text-gray-500">Accept contract</h4>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-slate-50 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
                                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><path fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.91 16.64a11.23 11.23 0 006.68-3.34c3-3 4.05-6.91 3.05-9.94-3-1-7 .09-9.94 3.05a11.23 11.23 0 00-3.34 6.68z"></path><path fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.34 8.19L3 10.53l4.36 2.56a10.56 10.56 0 011.51-4.34L6.7 7.9a1.27 1.27 0 00-1.36.29zm9.91 6.94a10.56 10.56 0 01-4.34 1.51L13.47 21l2.34-2.34a1.27 1.27 0 00.29-1.36z"></path><line x1="7.18" x2="4.45" y1="16.82" y2="19.55" fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><line x1="5.38" x2="3.57" y1="15.02" y2="16.84" fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><line x1="8.98" x2="7.16" y1="18.62" y2="20.43" fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><circle cx="14.54" cy="9.46" r="1.91" fill="none" vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
                                </span>
                                <div className="block">
                                    <h4 className="text-base  text-gray-500">Contract start</h4>
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    )
}
