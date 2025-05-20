'use client'

import React, { useState } from 'react'
import FormComponent from '@/components/webset/form-component' // adjust path if needed

export default function WebsetsPage() {
  const [parsedData, setParsedData] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold font-sans text-center mb-6">
        what are you looking for?
      </h1>

      <FormComponent onParse={(data) => setParsedData(data)} />
    
      {parsedData && (
        <div className="mt-8 p-4 border rounded">
          <h2 className="text-xl font-semibold mb-4">Parsed Criteria:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(parsedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}