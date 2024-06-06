import React from 'react'

const Quotes = () => {
  return (
    <div className="flex justify-center items-center mt-10">
    <div className="bg-white shadow-lg rounded-lg w-72 h-72 p-6 mx-4 flex flex-col items-center justify-center">
        <div className="bg-black rounded-full w-20 h-20 mb-4 max-sm:hidden"></div>
        <h3 className="text-base text-center text-black font-semibold">Culture is the widening of the mind and spirit.</h3>
        <p className="text-sm mt-2 text-center text-black">~ Om Sharma</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg w-72 h-72 p-6 mx-4 flex flex-col items-center justify-center">
        <div className="bg-black rounded-full w-20 h-20 mb-4 max-sm:hidden"></div>
        <h3 className="text-base text-center text-black font-semibold">Everything you can imagine is real</h3>
        <p className="text-sm mt-2 text-center text-black">~ Sahil Nawaz</p>
    </div>
    {/* Add more profile cards as needed */}
</div>
  )
}

export default Quotes