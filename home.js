function Home(){
   const ctx = React.useContext(UserContext);
   console.log(ctx.users)
    return (
     <Card
        txtcolor = "black"
        header = "BadBank Landing Page"
        title = "Welcome to the bank"
        text = "For all your banking needs"
        body = {(<img src= "bank.png" className = "img-fluid" alt = "Responsive Image"/>)}
     />
    );  
  }
  