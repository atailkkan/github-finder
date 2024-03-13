import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {

  const { alert } = useContext(AlertContext)

  return (
    <>
      {
        alert !== null && alert.msg && 
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className={`alert alert-${alert.type} m-0`}>{ alert.msg }</div>
                    </div>
                </div>
            </div>
      }
    </>
  )
}

export default Alert