import React, { useContext, useState } from "react"
import GithubContext from "../context/github/githubContext"
import AlertContext from '../context/alert/alertContext'

const Search = () => {

  const { searchUsers, clearResults, users } = useContext(GithubContext)
  const { showAlert } = useContext(AlertContext)

  const [keyword, setKeyword] = useState('')

  const onChange = (e) => {
    setKeyword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(keyword === '') {
        showAlert('Lütfen bir anahtar kelime girin.', 'danger')
    } else {
        showAlert(null)
        e.target.elements.keyword.value = ""
        setKeyword('')
        searchUsers(keyword)
    }
  }

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input type="text" name="keyword" onChange={onChange} className="form-control" />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
          {
              users.length > 0 && <button className="btn btn-danger mt-3" onClick={clearResults}>Clear Results</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Search;
