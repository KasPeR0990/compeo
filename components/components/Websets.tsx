'use client'

import React, { useState } from 'react'
import FormComponent from '@/components/webset/form-component' // adjust path if needed

export default function WebsetsPage() {
  const [previewData, setPreviewData] = useState(null)

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold font-sans text-center mb-6">
        what are you looking for?
      </h1>

      <FormComponent onPreview={(data) => setPreviewData(data)} />
    
    </div>
  )
}

// after search query, switch to a dashboard view, with criteria parsed
// option to add enrichments
// and preview result from the basic criteria
// (design in lovable already) 
// display the preview result in a table