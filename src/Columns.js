function Columns(props){
    return(
        <div className="columns">
            <img src={props.picture} alt="photo"/>
            <h3 className="middle-title">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default Columns