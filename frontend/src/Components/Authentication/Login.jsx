import React from 'react'

function Login() {
  return (
    <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div className="text-center">
                <img src="assets/img/logo.png" alt="logo" width="200" className="shadow-light rounded-circle"/>
              </div>
    
              <div className="card card-primary">
                <div className="card-header"><h4>Login</h4></div>
    
                <div className="card-body">
                  <form method="POST" id="form-login" className="needs-validation" novalidate="">
                    <div className="form-group">
                      <label for="username">Username</label>
                      <input id="username" type="username" className="form-control" name="username" tabindex="1" required autofocus/>
                      <div className="invalid-feedback">
                        Please fill in your username
                      </div>
                    </div>
    
                    <div className="form-group">
                      <div className="d-block">
                      	<label for="password" className="control-label">Password</label>
                        <div className="float-right">
                          <a href="#" className="text-small">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <input id="password" type="password" className="form-control" name="password" tabindex="2" required/>
                      <div className="invalid-feedback">
                        please fill in your password
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" id="login_btn" className="btn btn-primary btn-lg btn-block" tabindex="4">
                        Login
                      </button>
                    </div>
                    <div className="mt-5 text-muted text-center">
                        Don't have an account? <a href="#">Ok Stay here <i className="far fa-laugh-wink" aria-hidden="true"></i></a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login