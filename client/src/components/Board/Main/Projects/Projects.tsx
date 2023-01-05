import PropTypes, { InferProps } from 'prop-types'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Projects.scss'
import ProjectById from './ProjectById/ProjectById'
import AddProject from './AddProject/AddProject'
import iconCloseModal from '../../../../assets/closeModal.png'
import iconReduceModal from '../../../../assets/reduceModal.png'

function Projects({
	allProjects,
	token,
	setToken,
	getAllProject,
}: InferProps<typeof Projects.propTypes>) {
	// My state
	const [projectId, setProjectId] = useState(null)
	const [toggleAddProject, setToggleAddProject] = useState(false)
	const navigate = useNavigate()
	function onClickCloseProjects() {
		navigate('/')
	}
	function onClickToggleAddProject() {
		setToggleAddProject(!toggleAddProject)
	}
	useEffect(() => {}, [])
	return (
		<section className='projectBoard'>
			<section className='projects'>
				<img
					className='projects-closeModal'
					src={iconCloseModal}
					alt='icon Close modal'
					onClick={onClickCloseProjects}></img>
				{toggleAddProject ? (
					<img
						title='close modal Add Project'
						className='modal-add-project'
						src={iconReduceModal}
						alt='icon Close modal'
						onClick={onClickToggleAddProject}></img>
				) : (
					<img
						title='Add Project'
						className='modal-add-project'
						src={iconCloseModal}
						alt='icon Close modal'
						onClick={onClickToggleAddProject}></img>
				)}

				<h1 className='projects-title'>Projects:</h1>
				{allProjects?.map((project) => (
					<article
						key={project.id}
						className='projects_project'
						onClick={() => setProjectId(project.id)}>
						<h2 className='projects_project-title'>{project.name}</h2>
					</article>
				))}
			</section>

			{toggleAddProject && (
				<AddProject
					toggleAddProject={toggleAddProject}
					setToggleAddProject={setToggleAddProject}
					token={token}
					setToken={setToken}
					getAllProject={getAllProject}
				/>
			)}

			{projectId && (
				<ProjectById
					projectId={projectId}
					setProjectId={setProjectId}
					token={token}
					setToken={setToken}
					getAllProject={getAllProject}
				/>
			)}
		</section>
	)
}

Projects.propTypes = {
	allProjects: PropTypes.array,
	token: PropTypes.string.isRequired,
	setToken: PropTypes.func.isRequired,
	getAllProject: PropTypes.func.isRequired,
}
export default Projects
