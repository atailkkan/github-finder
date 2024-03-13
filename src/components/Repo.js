import React from 'react'

const Repo = ({repo}) => {
  return (
    <li className="list-group-item"><a href={repo.html_url} target="_blank">{repo.name}</a></li>
  )
}

export default Repo