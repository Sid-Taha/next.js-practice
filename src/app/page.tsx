"use client"
import { SanityCreateData, SanityDeleteData, sanityFetchData, sanityUpdateData } from "@/services/sanityApi";
import { useEffect, useState } from "react";

interface IName{
  name: string,
  _id: string
}

export default function Home() {
  
  const [inputValue, setInputValue] = useState<string>("");
  const [namesArray, setNamesArray] = useState<IName[]>([])
  const [editIndex, setEditIndex] = useState<number>(0)

  useEffect(()=>{
    const getData = async ()=>{
      const res = await sanityFetchData()
      setNamesArray(res)
    }
    getData()
  },[])


  async function submitFunction (){
    await SanityCreateData(inputValue)
    const res = await sanityFetchData()
    setNamesArray(res)
  }

  async function delFunction(_id: string){
    await SanityDeleteData(_id)
    const res = await sanityFetchData()
    setNamesArray(res)
  }


  function editFunction(inx: number){
    setInputValue(namesArray[inx].name)
    setEditIndex(inx)
  }

  async function updateFunction(){
    const _id = namesArray[editIndex]._id
    const updatedName = inputValue

    await sanityUpdateData( _id , updatedName)
    const res = await sanityFetchData()
    setNamesArray(res)
  }



  return (
   <div className="flex flex-col items-center justify-center h-screen bg-[#4444]">
   
    <input type="text" value={inputValue} placeholder="Enter your name" onChange={(e)=>{setInputValue(e.target.value)}}/>
   
    <div className="flex gap-4">
      <button onClick={()=>{submitFunction()}}>submit</button>
      <button onClick={()=>{updateFunction()}}>update</button>
    </div>
    
    {namesArray.map((data, index)=>{
      return (
        <div className="flex gap-6" key={index}>
          <p className="text-red-500">{data.name}</p>
          <button onClick={()=>{delFunction(data._id)}}>del</button>
          <button onClick={()=>{editFunction(index)}}>edit</button>
        </div>
      )
    })}
    
   </div>
  )}








