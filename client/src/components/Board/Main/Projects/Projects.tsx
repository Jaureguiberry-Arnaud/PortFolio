import PropTypes, { InferProps } from 'prop-types'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Projects.scss'
import ProjectById from './ProjectById/ProjectById'
import AddProject from './AddProject/AddProject'
import iconCloseModal from '../../../../assets/closeModal.png'
import iconReduceModal from '../../../../assets/reduceModal.png'

function Projects({
	token,
	setToken,
	allProjects,
	getAllProject,
	projectId,
	setProjectId,
	projectById,
	setProjectById,
	getProjectById,
}: InferProps<typeof Projects.propTypes>) {
	// My state
	// const [projectId, setProjectId] = useState(null)
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
					projectById={projectById}
					setProjectById={setProjectById}
					getProjectById={getProjectById}
					token={token}
					setToken={setToken}
					getAllProject={getAllProject}
					// valuesProjectById={valuesProjectById}
					// setValuesProjectById={setValuesProjectById}
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
	projectId: PropTypes.number,
	setProjectId: PropTypes.func.isRequired,
	projectById: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		nbWrittenLines: PropTypes.number,
		git_url: PropTypes.string,
		web_url: PropTypes.string,
		description: PropTypes.string,
		created_at: PropTypes.string,
	}),
	setProjectById: PropTypes.func.isRequired,
	getProjectById: PropTypes.func.isRequired,
	valuesProjectById: PropTypes.shape({
		name: PropTypes.string,
		nbWrittenLines: PropTypes.number,
		git_url: PropTypes.string,
		web_url: PropTypes.string,
		description: PropTypes.string,
	}),
}
export default Projects
