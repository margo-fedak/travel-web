function Cards(props){
    return(
        <div className="card">
            <div className="content-card">
                <img src={props.picture} alt="avatar" className="avatar"/>
                <h4><b> {props.title}</b></h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Cards