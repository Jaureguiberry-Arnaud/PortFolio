import PropTypes, { InferProps } from 'prop-types'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Projects.scss';
import ProjectById from './ProjectById/ProjectById';
import iconCloseModal from '../../../../assets/closeModal.png'

function Projects({ allProjects }: InferProps<typeof Projects.propTypes>) {
  // My state 
  const [projectId, setProjectId] = useState()
  const [toggleAddProject, setToggleAddProject] = useState(false)
  const navigate = useNavigate();
  function onClickCloseProjects() {
    navigate("/")
  }
  function onClickToggleAddProject() {
    setToggleAddProject(!toggleAddProject)
  }
  useEffect(() => {
	}, [])
  return (
    <section className="projectBoard">
      <section className="projects">
        <img className="login-close-modal" src={iconCloseModal} alt="icon Close modal" onClick={onClickCloseProjects} ></img>
        <img className="modal-add-project" src={iconCloseModal} alt="icon Close modal" onClick={onClickToggleAddProject} ></img>
        <h1 className="projects-title">Projects:</h1>
        {allProjects?.map((project) => (
            <article key={project.id} className="projects_project" onClick={()=>setProjectId(project.id)} >
              <h2 className="projects_project-title">{project.name}</h2>
            </article>
        ))}
      </section>



      {projectId && (
          <ProjectById  projectId={projectId} setProjectId={setProjectId}/>
      )}
    </section>
  )
}

Projects.propTypes = {
  allProjects: PropTypes.array
}
export default Projects