"use server"

import { client } from "@/sanity/lib/client"

export async function sanityFetchData(){
  const res = await client.fetch(`*[_type == 'name']{name,_id}`)
  return res
}


export async function SanityCreateData(name: string){
  const res = await client.create({
    _type: 'name',
    name: name
  })

}




export async function SanityDeleteData(_id: string){
  const res = await client.delete(_id)

}






export async function sanityUpdateData(_id: string, updatedName: string){
  const res = await client.patch(_id)
  .set({
    name: updatedName
  })
  .commit()
}