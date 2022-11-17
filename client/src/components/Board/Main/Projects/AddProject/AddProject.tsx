import PropTypes, { InferProps } from 'prop-types'
import {useState, useEffect} from 'react'
import axios, { AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";

import './AddProject.scss'
import iconCloseModal from '../../../../../assets/closeModal.png'
import iconWarning from '../../../../../assets/warningOrange.png'

function AddProject({ toggleAddProject, setToggleAddProject, token, setToken, getAllProject }: InferProps<typeof AddProject.propTypes>) {
  const [errorToggle, setErrorToggle] = useState<AxiosResponse | null | void>(null);
  const [values, setValues] = useState({
          name: '',
          description: '',
          git_url: '',
          web_url: '',
  });
  
  interface TokenDecoded{
      userId: number,
      pseudo: string,
      role: string,
    }
function onChange(e: { target: { name: any; value: any; }; }) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
  function postProject() {
    let tokenDecoded 
    if (token) {
      tokenDecoded = jwt_decode<TokenDecoded>(token)
    }

    let responseData = null
    axios({  method: 'POST',
                  url: 'http://localhost:3001/projects',
                  data : {
                      name: values.name,
                      description: values.description,
                      git_url: values.git_url, 
                      web_url: values.web_url,
                      userId: tokenDecoded?.userId
                  },
                  headers: {
                      "Content-Type": 'application/json',
                      Authorization: `Bearer ${token}`,
                  },
                  validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                  }
              })
    .then(function (response) {
      responseData = response
      if (response.status === 401) {
        console.log(response)
        setErrorToggle(response)

      } else {
        console.log(response);
        setErrorToggle(null)
        setToggleAddProject(!toggleAddProject)
        getAllProject()
      }
    })
      .catch(function (error) {
      console.log("postProject error:" + error);
    })
  }
  function onClickCloseAddProject() {
    setToggleAddProject(!toggleAddProject)
  }
  function onClickCloseWarning() {
    setErrorToggle(null)
  }
  function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log('refresh prevented');
        postProject();
        setValues({ ...values, name: '', description: '', git_url: '', web_url: '',});
  }
  useEffect(() => {
    // setErrorToggle
    // console.log('useeffect:'+ errorToggle)
	}, [onClickCloseWarning]);
  return (
    <>
      {errorToggle

        ? <section className="addProject_unauthorized">
            <img className="addProject_unauthorized-warning" src={iconWarning} alt="warning icon"  />
            <div className="addProject_unauthorized-div">
              <h2 className="addProject_unauthorized_title">StatusCode:</h2>
              <p className="addProject_unauthorized_content">{errorToggle.status}</p>
            </div>
            <div className="addProject_unauthorized-div">
              <h2 className="addProject_unauthorized_title">StatusPost:</h2>
              <p className="addProject_unauthorized_content">{errorToggle.statusText}</p>
            </div>
            <div className="addProject_unauthorized-div">
              <h2 className="addProject_unauthorized_title">Request:</h2>
              <p className="addProject_unauthorized_content">Failed</p>
            </div>
            <button className="addProject_unauthorized_btn" onClick={onClickCloseWarning}>Close</button>
          </section>

        : <section className="addProject">
          <img className="addProject-closeModal" src={iconCloseModal} alt="icon Close modal" onClick={onClickCloseAddProject}></img><h1 className="addProject-title">Add Project:</h1>
          <form className="addProject_form" method="post" onSubmit={handleSubmit}>
            <label className="addProject_form-label" htmlFor="name">Project Name:</label>
            <input className="addProject_form-input" type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={onChange}
              required></input>

            <label className="addProject_form-label" htmlFor="git_url">Enter an Git URL:</label>
            <input type="url" name="git_url" id="git_url"
              className="addProject_form-input"
              value={values.git_url}
              placeholder="https://github.com/My-Pseudo/MyProject"
              pattern="https://.*"
              onChange={onChange}></input>

            <label className="addProject_form-label" htmlFor="web_url">Enter an Web URL:</label>
            <input type="url" name="web_url" id="web_url"
              className="addProject_form-input"
              value={values.web_url}
              placeholder="https://example.com"
              pattern="https://.*"
              onChange={onChange}></input>

            {/* <label className="addProject_form-label" htmlFor="nbWrittenLines">Enter the number of line written in the project:</label>
      <input className="addProject_form-input" type="number" name="nbWrittenLines" id="nbLine1"></input> */}

            <label className="addProject_form-label" htmlFor="description">Project Description:</label>
            <textarea className="addProject_form-input"
              name="description"
              id="description"
              value={values.description}
              onChange={onChange}></textarea>

            <button className="addProject_form-btn">Add Project</button>
        </form>
      </section>
        }
    </>

    
  )
}
AddProject.propTypes = {
  toggleAddProject: PropTypes.bool.isRequired,
  setToggleAddProject: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
  getAllProject: PropTypes.func.isRequired
}
export default AddProject