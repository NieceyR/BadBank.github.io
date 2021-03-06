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
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/" title ="Create an account to get started!">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/" title="Already have an account? Log back in!">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/" title="Make a deposit">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/" title="Make a withdrawl">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/" title="Check your remaining balance">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/" title="View your data">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }
