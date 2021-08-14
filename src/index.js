import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  render(){
    return(
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form name="myForm" method="get" onsubmit="return validateForm()">

              <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <div>
              <label><b>Email:</b></label>
              </div>
              <input type="text" className="form-control" placeholder="email"pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
              </div>
              <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text"><i class="fa fa-lock"></i></span>
              </div>
              <div>
              <label><b>Password:</b></label>
              </div>
              <input type="text" className="form-control" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
              </div>
              <button type="submit" >LOGIN</button>
              <div>
              <a href="signup.html ">I Don't have An Account</a>
              </div>
           </form>
            
          </div>
        </div>
       </div>   
    )
  }
}
 



ReactDOM.render(<App />, document.getElementById('root'));