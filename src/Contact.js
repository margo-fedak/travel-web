import Input from "./Input";
import DarkButton from "./DarkButton";

function Contact(){
    return(
        <div>
    <div className="contact">
        <div className="inputs">
            <h1 className="h1">Be updated!</h1>
            <Input name="input" type="text" label="First Name*"/>
            <Input name="input" type="text" label="Last Name*" />
            <Input name="input" type="email" label="Email Subject*"/>
            <textarea className="labels b text-area" placeholder="Write something here..."></textarea>
            {/*<button className="labels black-background">Submit Email</button>*/}
            {/*<DarkButton button="Submit Email"/>*/}
        </div>
        <img src="пейзаж-1.jpg" alt="photo" className="input-img"/>
    </div>
        </div>
    )
}
export default Contact