import { NextRequest, NextResponse } from 'next/server'
import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'
import { z } from 'zod'

export const maxDuration = 100

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json()

    if (!input || input.trim() === '') {
      return NextResponse.json({ error: 'No input provided' }, { status: 400 })
    }

    const { object } = await generateObject({
      model: anthropic('claude-3-5-sonnet-20240620'),
      schema: z.object({
        criteria: z.array(z.object({
          description: z.string(),
          value: z.string(),
        })),
      }),
      prompt: `You are an expert at breaking down search queries into clear, specific search criteria.

Break down this search query into individual, specific criteria: "${input}"

For each criterion:
- Make it a complete, clear sentence
- Be specific and actionable
- Keep it simple and direct
- Focus on the key elements of the search

Example:
Input: "senior python developer in berlin"
Output: 
{
  "criteria": [
    { "description": "Senior-level professional" },
    { "description": "Proficient in Python programming" },
    { "description": "Based in Berlin, Germany" }
  ]
}

`,
    })

    console.log('Parsed criteria:', object.criteria); 

    return NextResponse.json(object)
  } catch (error) {
    console.error('Parsing query failed', error)
    return NextResponse.json({ error: 'Failed to parse query' }, { status: 500 })
  }
}
