import React from 'react'
import MacWindow from './Macwindow'
import githubData from "../../assets/github.json"
import "./github.scss"

const Gitcard = ({data = {id: 1, image:"", title:"", description: "",tags:[], repoLink:"", demolink:""}})=>{
 return <div className="card">
     
    <div className="image">
      <img src={data.image} alt="" />
    </div>
    <h1>{data.title}</h1>
    <p className='description'>{data.description}</p>

    <div className="tags" >
     { data.tags.map(tag => <p className='tag' key={tag} >{tag}</p>)}
    </div>

    <div className="urls">
      <a href={data.repoLink}>Repo </a>
      <a href={data.demoLink}>Demo </a>
    </div>
  </div>
}


const Github = ({windoName,setWindowState}) => {
  return (
    <MacWindow windoName={windoName} setWindowState={setWindowState}>
       <div className="cards">
          {githubData.map(project=>{
            return <Gitcard key={project.id} data={project}/>
          })}
       </div>
    </MacWindow>
  )
}

export default Github
