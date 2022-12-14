import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // Handle input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value

    setUser({...user, [name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = user;
    try {
      const res = await fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })

      if(res.status === 400 || !res) {
        window.alert('Invalid credentials')
      } else {
        window.location.reload();
        navigate('/');
        // Token is generated when we login
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center">
            <h1 className="display-4 fw-bolder">Welcome back!</h1>
            <p className="lead text-center">Enter your credentials to login</p>
            <h5>OR</h5>
            <Link
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </Link>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Login</h1>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
