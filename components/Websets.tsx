// no preview, just show ui for webset, and options to change search criteria, enrichments. 
// update ui when enrichment added so webset / table update. when starting search, proceed from the already existing table, and just add value to it from the results. 





'use client'

import React, { useState } from 'react'
import FormComponent from '@/components/webset/form-component' // adjust path if needed

export default function WebsetsPage() {


    return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold font-sans text-center mb-6">
        What are you looking for?
      </h1>

    
    
    </div>
  )
}