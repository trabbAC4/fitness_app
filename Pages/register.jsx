const React = require("react");

function Register() {
  return (
    <Def>
      <html>
        <head>
          <h1>Register for a new account</h1>
          <form method="POST" action="/pages">
            <div className="form">
                <label htmlFor="first-name">First Name</label>
                <input className="form-input" id="first-name" name="first-name" required />
            </div>
            <div className="form">
                <label htmlFor="last-name">Last Name</label>
                <input className="form-input" id="last-name" name="last-name" required />
            </div>
            <div className="form">
                <label htmlFor="username">Username</label>
                <input className="form-input" id="username" name="username" required />
            </div>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input className="form-input" id="email" name="email" required />
            </div>
            <div className="form">
                <label htmlFor="password">Password</label>
                <input className="form-input" id="password" name="password" type="password" required />
            </div>
          </form>
        </head>
      </html>
    </Def>
  );
}

function checkPassword(){
    
}
