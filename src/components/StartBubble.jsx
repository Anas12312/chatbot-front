import React from 'react'

export default function StartBubble() {
    return (
        <li className="max-w-[95%] py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
            <svg className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="6" fill="#2563EB" />
                <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5" />
                <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5" />
                <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

            <div className="space-y-3 mt-2">
                <h2 className="font-medium text-gray-800 ">
                    How can I help you?
                </h2>
                <div className="space-y-1.5">
                    <p className="mb-1.5 text-sm text-gray-800 ">
                        You can try typing:
                    </p>
                    <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                        <li className="text-sm text-gray-800 ">
                            List typical requirements for sourcing a software or services.
                        </li>

                        <li className="text-sm text-gray-800 ">
                            Can you list possible vendors for sourcing a software or services?
                        </li>

                        <li className="text-sm text-gray-800 ">
                            Can you generate me an RFP?
                        </li>

                        <li className="text-sm text-gray-800 ">
                            Can you help me compare vendors?
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}
