import React from 'react'
import Repo from './Repo'

const Repos = ({repos}) => {
  return (
    <ul className='list-group mt-3'>
      {
        repos.map((repo, i) => <Repo key={repo.id} repo={repo} />)
      }
    </ul>
  )
}

export default Repos