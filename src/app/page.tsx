"use client"
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [namesArray, setNamesArray] = useState<string[]>([])
  const [editIndex, setEditIndex] = useState<number>(0)

  function myFunc (){
    setNamesArray([...namesArray, inputValue])
    setInputValue("")
  }

  function delFunction(inx: number){
    const newArray = [...namesArray]
    newArray.splice(inx, 1)
    setNamesArray(newArray)
  }


  function editFunction(inx: number){
   const updateArray = [...namesArray]
   setInputValue(updateArray[inx])
   setEditIndex(inx)
  }

  function updateFunction(){
    const updateArray = [...namesArray]
    updateArray[editIndex] = inputValue 
    setNamesArray(updateArray)
    setInputValue("")
  }



  return (
   <div className="flex flex-col items-center justify-center h-screen bg-[#4444]">
   
    <input type="text" value={inputValue} placeholder="Enter your name" onChange={(e)=>{setInputValue(e.target.value)}}/>
   
    <div className="flex gap-4">
      <button onClick={()=>{myFunc()}}>submit</button>
      <button onClick={()=>{updateFunction()}}>update</button>
    </div>
    
    {namesArray.map((name, index)=>{
      return (
        <div className="flex gap-6" key={index}>
          <p className="text-red-500">{name}</p>
          <button onClick={()=>{delFunction(index)}}>del</button>
          <button onClick={()=>{editFunction(index)}}>edit</button>
        </div>
      )
    })}
    
   </div>
  )}








