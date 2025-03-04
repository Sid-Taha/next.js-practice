import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: "zt8gjigj",
  dataset: "production",
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skE0RdCQnE2LRIsLneRO61QNkSwvgNRzVIeoKmndLdsZcCiQVer2AuJMe3ChhVFnvgWFSCD2minoeG9usRLwCVSBKxU4RapWJ1FVW4PgsJqgN9YmcV9yyrikJJJYzrPf9XJXGSzor7DMSWCtVXcZvTkIaVn8h64GR1zO325V9cfAJUHpF6Th"
})





async function sanityUploadData(){
  
  const res = await fetch("https://67c7496dc19eb8753e79536e.mockapi.io/users/user")
  const data = await res.json()

  for (let i = 0; i < data.length; i++) {
    
    const result = await client.create({
      _type: 'name',
      name: data.name
     })
     
     console.log("😡",result)
  } 

  console.log("✅ migration complete");
  

}


sanityUploadData()