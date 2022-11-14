import './ProjectById.scss';
import PropTypes, { InferProps } from "prop-types";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

import iconCloseModal from '../../../../../assets/closeModal.png'


function ProjectById({ projectId, setProjectId }: InferProps<typeof ProjectById.propTypes>) {
  // My state 
  const [projectById, setProjectById] = useState<ProjectById>()
  
  function getProjectById() {
		axios.get(`http://localhost:3001/projects/${projectId}`)
    .then(function (response: any) {
    setProjectById(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  function onClick(event: any) {
    event.preventDefault();
    setProjectId(null)
  }
  interface ProjectById {
      id: number;
      name: string;
      description: string;
      git_url: string;
      web_url: string;
      created_at: any;
      userId: number;
    }
  console.log(projectById)
  useEffect(() => {
    getProjectById();
  }, [projectId]);
  return (
    <section className="projectById">
      <img className="login-close-modal" src={iconCloseModal} alt="icon Close modal" onClick={onClick} ></img>
      <h1 className="projectById-name">{projectById?.name}</h1>
      <h2 className="projectById-title">Owner:</h2>
      <p className="projectById-content">Jrgb</p>
      <h2 className="projectById-title">Created here:</h2>
      <p className="projectById-content">{projectById?.created_at}</p>
      <h2 className="projectById-title">Number of line written:</h2>
      <p className="projectById-content">INSERT DATA HERE</p>
      <h2 className="projectById-title">Git Url:</h2>
      <a href={projectById?.git_url} target="_blank" className="projectById-content">{projectById?.git_url}</a>
      <h2 className="projectById-title">Web Url:</h2>
      <a href={projectById?.web_url} target="_blank" className="projectById-content">{projectById?.web_url}</a>
      <h2 className="projectById-title">Description:</h2>
      <p className="projectById-content">{projectById?.description}</p>
    </section>
  )
}
ProjectById.propTypes = {
  projectId: PropTypes.number.isRequired,
  setProjectId: PropTypes.func.isRequired,
}
export default ProjectById;