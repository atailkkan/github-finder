import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="col-lg-3 col-md-6 col-12 mb-3">
        <div className="card m-2">
            <img src={ avatar_url } alt="" className="img-fluid" />
            <div className="card-body p-4">
                <h5 className="card-title mb-3">{ login }</h5>
                <Link className="btn btn-sm btn-primary" to={`/user/${login}`}>Go Profile</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default User;
