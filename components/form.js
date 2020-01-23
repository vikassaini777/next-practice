import React from 'react'

const Form = ({state, changeHandler, selectImage, submitHandler}) =>{
    return (
        <div className="container form-container" style={{ marginTop: 30 , marginBottom: 30}}>
      <div className="row">
        <div className="col-md-4 col-sm-4 col-lg-4 col-4"></div>
        <div className="col-md-4 col-sm-4 col-lg-4 col-4">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <p>Enter store name:</p>
              <input
                name="username"
                value={state.username}
                type="text"
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Enter store location:</p>
              <input
                name="location"
                value={state.location}
                type="text"
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Enter store location:</p>
              <input
                name="image"
                type="file"
                onChange={selectImage}
                className="form-control"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Form