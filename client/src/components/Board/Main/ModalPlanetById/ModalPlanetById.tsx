import './ModalPlanetById.scss';
import PropTypes, { InferProps } from "prop-types";
import { useState, useEffect } from 'react'
import axios from 'axios'


function ModalPlanetById() {
  const [projectById, setProjectById] = useState([])
  // Make a request for a user with a given ID
  function getProjectById() {
    axios.get('http://localhost:3001/projects/1')
        .then(function (response: any) {
          console.log("hello there")
          setProjectById(response.data)
          console.log(projectById);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }
  console.log(projectById)
  useEffect(() => {
    getProjectById();
  }, []);
  return (
    <article className="modalPlanetById">

    </article>
  )
}

export default ModalPlanetById;