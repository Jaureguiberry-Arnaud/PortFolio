import './ProjectById.scss';
import PropTypes, { InferProps } from "prop-types";
import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import jwt_decode from "jwt-decode";

import iconCloseModal from '../../../../../assets/closeModal.png'
import iconDelete from '../../../../../assets/iconDelete.png'


function ProjectById({ projectId, setProjectId, token, setToken, getAllProject }: InferProps<typeof ProjectById.propTypes>) {
  // My state 
  const [projectById, setProjectById] = useState<ProjectById>()
  const [status, setStatus] = useState<null | string>(null)
  const [errorMessage, setErrorMessage] = useState()
  const [errorToggle, setErrorToggle] = useState<AxiosResponse | null | void>(null)
  
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
  function onClickDeleteById() {
    let tokenDecoded 
    if (token) {
      tokenDecoded = jwt_decode<TokenDecoded>(token)
    }
    axios({  method: 'DELETE',
                  url: `http://localhost:3001/projects/${projectId}`,
                  
                  headers: {
                      "Content-Type": 'application/json',
                      Authorization: `Bearer ${token}`,
                  },
                  validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                  }
              })
    .then(function (response) {
      if (response.status === 401) {
        console.log(response)
        setErrorToggle(response)

      } else {
        setStatus('Delete successful')
        getAllProject()
      }
    })
      .catch(function (error) {
      setErrorMessage(error.message);
            console.error('There was an error!', error);
    })
  }
  interface TokenDecoded{
      userId: number,
      pseudo: string,
      role: string,
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
      {status
        ? <>
            <h1 className="projectById-deleteSuccess">{status}</h1>
            <button className="projectById-closeDeleteSuccess" onClick={onClick}>Close</button>
          </>
        : <>
            <img className="projectById-closeModal" src={iconCloseModal} alt="icon Close modal" onClick={onClick} ></img>
            <img className="projectById-delete" src={iconDelete} alt="icon Delete" onClick={onClickDeleteById}></img>
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
          </>
        }
      
    </section>
  )
}
ProjectById.propTypes = {
  projectId: PropTypes.number.isRequired,
  setProjectId: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
  getAllProject: PropTypes.func.isRequired,
}
export default ProjectById;