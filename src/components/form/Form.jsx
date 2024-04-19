import React from 'react'
import FormQuestion from './FormQuestion'

export default function Form({ questions }) {
    return (
        <div class="container mb-20 w-[80%] mx-auto px-4 py-8 mt-20 bg-gradient-to-tl from-[#5E4FF4] to-blue-700  rounded-2xl border shadow-md">
            <h1 class="text-3xl py-10 text-center font-bold mb-4 text-white">Request for Proposal (RFP) Questions</h1>
            <div class="grid grid-cols-1 gap-4">
                {
                    questions.map((x, i) => (
                        <FormQuestion index={i + 1} question={x} />
                    ))
                }
            </div>
        </div>
    )
}