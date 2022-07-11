import React from 'react'
import "./Projectlist.css"
import Projects from "../Projects/Projects"
import {project} from "../../data"


const Projectlist = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Let's read about my projects</h1>
      </div>
      <div className='pl-list'>
        {project.map(item=>(
        <Projects key={item.id} img={item.img} link={item.link}/>))}
        
      </div>
    </div>
  )
}

export default Projectlist;