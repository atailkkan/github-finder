import React, { useContext, useEffect } from 'react'
import Repos from './Repos'
import GithubContext from '../context/github/githubContext'

const UserDetail = ({ match }) => {

  const { getUser, getUserRepos, user, repos } = useContext(GithubContext)

  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
  }, [])

  const { login, avatar_url, html_url, name, followers, following, location, bio, public_repos } = user

  return (
    <div className='container py-4'>
      <div className="row justify-content-center align-items-start">
          <div className="col-lg-3 border rounded p-3">
              <img src={avatar_url} style={{ width: "100%", marginBottom: "15px" }} alt="" />
              <h6>{ name }</h6>
              <h3><strong>{ login }</strong></h3>
              {
                  location && ( <p><i className="fas fa-map-marker-alt"></i> { location }</p> )
              }
              <a href={ html_url } target="_blank" className='btn btn-primary d-block m-0'>Github Profile</a>
          </div>
          <div className='col-lg-5'>
              {
                  bio && 
                  (
                      <>
                          <h5 className='mb-3'><strong>About</strong></h5>
                          <p>{ bio }</p>
                      </>
                  )
              }
              <span className='badge bg-primary me-2'>Followers: { followers }</span>
              <span className='badge bg-warning me-2'>Following: { following }</span>
              <span className='badge bg-success'>Repo: { public_repos }</span>
              <div>
                <Repos repos={repos} />
              </div>
          </div>
      </div>
    </div>
  )
}

export default UserDetail