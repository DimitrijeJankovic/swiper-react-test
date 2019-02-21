import React, { Component } from 'react'

class Login extends Component {
    render() {
        return(
            <div>
                <div className="login-sidenav"></div>
                <div className="login-main">
                    <div class="col-md-6 col-sm-12">
                        <div className="login-main-text">
                            <h2>Login</h2>
                        </div>
                        <div class="login-form">
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" placeholder="User Name"/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-black">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login