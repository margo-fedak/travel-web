import DarkButton from "./DarkButton";

function Title(){
    return(
            <div className="introduction">
                <div className="left">
                    <h1 className="main-title">Travel to your dream destination</h1>
                    <p className="paragraph">
                        Eget habitasse faucibus. In sit
                        augue mollis pellentesque non mattis in arcu sapien ultricies. Tortor, mauris hac.
                    </p>
                    <DarkButton button="Reserve Tickets"/>
                </div>
                <div className="img1">
                    <img className="main-img" src="пейзаж-1.jpg"/>
                </div>
            </div>
        )
        }
        export default Title
