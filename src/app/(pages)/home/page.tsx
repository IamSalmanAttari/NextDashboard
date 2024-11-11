"use client"
import {ProductData} from "@/app/utils/product" 


const Home = () => {
  return (
    <div>
      <h1 className=" text-5xl">Home Page</h1>
      <div className="flex gap-5">
    {ProductData.map((item, index)=>{
      return(
        <div key={index} className="flex h-20 border flex-wrap gap-4 items-center flex-col sm:flex-row">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      )
    })}
    </div>
    </div>
  )
}

export default Home
