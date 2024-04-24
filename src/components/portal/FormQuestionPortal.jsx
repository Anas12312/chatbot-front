export default function FormQuestionPortal({ index, question }) {
    return (
        <div className="bg-white border rounded-lg p-4 mx-10">
            <label for="question1" className="block text-lg mb-2">{index}. {question}</label>
            <textarea  id="question1" name="question1" rows="4"
                className=" p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "></textarea>
        </div >
    )
}