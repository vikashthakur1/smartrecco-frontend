import React from 'react'

function Recommendations({ recommendations }) {
  return (
    <section className="mt-8 px-4">
      {recommendations.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6 text-left max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recommendations:</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {recommendations[0]}
          </p>
        </div>
      )}
    </section>
  )
}

export default Recommendations