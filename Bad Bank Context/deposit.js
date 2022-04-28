function Deposit(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>Deposit</h5>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }
  