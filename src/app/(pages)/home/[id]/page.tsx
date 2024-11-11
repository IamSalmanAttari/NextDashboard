"use client"
import { useParams } from "next/navigation"

const NestedHome = () => {
    const {id} = useParams()
  return (
    <div>
        
      <h1>{id}</h1>
    </div>
  )
}

export default NestedHome
