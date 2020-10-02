import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
    <div className="container">
<form>
<div className="fixed-top">
  <div className="collapse" id="navbarToggleExternalContent">
      <h5 className="text-white h4">Collapsed content</h5>
      <span className="text-muted">Toggleable via the navbar brand.</span>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <label className="navbar-toggler-icon"></label>
    </button>
  </nav>
</div>
  <div className="titre">
  <h1> Club Membership Registration </h1>
  </div>
<div className="form-row">
<div className="form-group col-md-6">
<i className="fa fa-user"></i>
      <label htmlFor="inputname">First Name</label>
      <input type="name" className="form-control" id="inputfirstname"/>
  </div>
  <div className="form-group col-md-6">
  <i className="fa fa-user"></i>
      <label htmlFor="inputname">Last Name</label>
      <input type="name" className="form-control" id="inputlastname"/>
  </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <i className="fas fa-at"></i>
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
    <i className="fa fa-lock"></i>
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div className="form-group">
  <i className="fas fa-map-marker-alt"></i>
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <i className="fas fa-city"></i>
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
    <i className="fab fa-font-awesome-flag"></i>
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option defaultValue>Choose...</option>
        <option defaultValue>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
    <i className="fas fa-envelope-open-text"></i>
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
 <i className="fas fa-birthday-cake"></i>
  <label htmlFor="inputbirth">Birth date</label>
 </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <input type="text" className="form-control" id="day"/>
      <label htmlFor="inputbirth">Day</label>
    </div>
    <div className="form-group col-md-4">
      <input type="text" className="form-control" id="month"/>
      <label htmlFor="inputbirth">Month</label>
    </div>
    <div className="form-group col-md-4">
      <input type="text" className="form-control" id="year"/>
      <label htmlFor="inputbirth">Year</label>
    </div>
  </div>
  <div className="form-row">
 
  <div className="form-group col-md-6">
  <i className="fas fa-assistive-listening-systems"></i>
      <label htmlFor="inputState">How did you here about us?</label>
      <select id="hearabout" className="form-control">
      <option defaultValue>Choose</option>
        <option defaultValue>Social Media</option>
        <option defaultValue>Friends</option>
        <option defaultValue>Journal or Magazine</option>
      </select>
    </div>
    <div className="form-group col-md-6">
    <i className="fas fa-users"></i>
      <label htmlFor="inputState">Did you ever have experience in an association or a club?</label>
      <select id="experience" className="form-control">
      <option defaultValue>Choose</option>
        <option defaultValue>Yes</option>
        <option defaultValue>No</option>
      </select>
    </div>
    </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="button" className="btn btn-info">Submit</button>
  <nav aria-label="page">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</form>
</div>
    </div>
  );
}

export default App;
