function Columns(props){
    return(
        <div className="columns">
            <img src={props.picture} alt="photo"/>
            <h3 className="h3">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default Columns