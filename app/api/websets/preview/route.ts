// send current webset filters to exa and return a fast preview of the results

// it should take the search criteria from parse route, execute a result and return a webset preview of 10 results. 
// with the columns name, position, and url. 



// export async function 
// try catch
// we want to connect cirteria somehow 
// define webset params 
// make the search query to the criterias, accept the parsed criteria 
// needs to accept a post req with the criteria array, combine criteria into a search query 
// call exa api to search
// only have name, company position, url to linkedin profile
// return the webset results 

// use exa websets.create()


interface SearchCriteria {
  description: string;
  value: string;
}



import { NextRequest, NextResponse } from 'next/server'
import Exa, { CreateWebsetParameters, CreateEnrichmentParameters } from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY as string);

export async function POST(req:NextRequest){
  try {

    // get the criteria from the post req
    const {criteria}: {criteria: SearchCriteria[]} = await req.json();


    // combine criteria into search query 
    const searchQuery = criteria.map(c => c.value || c.description).join(' ');

    // define webset params
    // count, domain, type, sort. use zod? 



    const websetParams: CreateWebsetParameters = {
    
    

  }
  catch (error) {
    console.error("Error:", error);
  }
}