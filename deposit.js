function Deposit(){
    const ctx = React.useContext(UserContext);
    return ( 
      <>
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Deposit</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Deposit</a>
      </div>
    </div>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }
  