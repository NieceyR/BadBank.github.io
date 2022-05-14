const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add(`active`);
  }
})

function Card(props){
    function classes(){
        const bg = props.bgcolor ? 'bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? 'text-' + props.txtcolor: 'text-white';
        return 'card mb-3' + bg + txt;
    }
    return (
    <div className={classes()} style= {{maxWidth: "18rem"}}>
        <div className = "card-header">{props.header}</div>
        <div className = "card-body">
            {props.title && (<p className = "card-text">{props.text}</p>)}
            {props.body}
            {props.status && (<div id = 'createStatus'>{props.status}</div>)}
        </div>
    </div>
    );
}