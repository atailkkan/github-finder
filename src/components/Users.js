import React, { useContext } from "react";
import User from './User';
import GithubContext from "../context/github/githubContext"

const Users = () => {

  const { users } = useContext(GithubContext)

  return (
    <div className="container py-4">
      <div className="row">
          {users.map((user) => (
              <User key={user.id} user={user} />
          ))}
      </div>
    </div>
  )
}

export default Users;
