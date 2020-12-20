import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const history = useHistory();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', info.title);
    formData.append('date', info.date);
    formData.append('time', info.time);
    fetch('http://localhost:5000/addMovie', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(formData);
    e.preventDefault();
  };
  return (
    <div className='row'>
      <div className='col-md-12 main-col'>
        <div className='admin-head'>
          <h4 className='text-center pt-4 pl-5'>Add a Movie</h4>
        </div>
        <div className='movie-form col-md-7 p-5'>
          <form action='' onSubmit={handleSubmit}>
            <div className='form-group w-75'>
              <label htmlFor='Title'>Movie Title</label>
              <input
                onBlur={handleBlur}
                type='text'
                className='form-control'
                name='title'
                placeholder='Movie Title'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Play date'>Play date</label>
              <input
                onBlur={handleBlur}
                className='form-control w-50'
                type='date'
                name='date'
                id=''
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Play Time'>Play time</label>
              <select
                onBlur={handleBlur}
                className='form-control w-50'
                name='time'
                id=''
                required
              >
                <option value='11am'>11am</option>
                <option value='2pm'>2pm</option>
                <option value='5pm'>5pm</option>
                <option value='8pm'>8pm</option>
                <option value='11pm'>11pm</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='Icon'>Movie Cover</label>
              <div className='upload-btn-wrapper ml-2'>
                <button className='upload-btn w-25 ml-0 pl-0'>
                  Upload a file{' '}
                  <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon>
                </button>
                <input onChange={handleFileChange} type='file' />
              </div>
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-success'>
                {' '}
                Add Movie{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
