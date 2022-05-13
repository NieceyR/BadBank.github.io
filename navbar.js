function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" aria-current="page">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/login/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }