import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
    emil: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  
  return (
    <div className="login-container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={onChangeHandler}>
              <div className="form-floating mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="name@example.com" 
                  name='email'
                  onChange={onChangeHandler}
                  value={data.emil}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  id="floatingPassword" 
                  placeholder="Password" 
                  name='password'
                  onChange={onChangeHandler}
                  value={data.password}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              
              <div className="d-grid">
                <button className="btn btn-outline-primary btn-login text-uppercase mt-2 " type="reset">Sign
                  in</button>
                  <button className="btn btn-outline-danger btn-login text-uppercase " type="submit">Reset</button>
              </div>
             <div className="mt-4">
                Don't have an account? <Link to="/register">Sign up</Link>
             </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Login;