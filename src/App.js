import './App.css';
import Header from "./Header";
import Comments from "./Comments";
import Footer from "./Footer";
import Cards from "./Cards";
import Title from "./Title";
import Mamory from "./Mamory";
import Columns from "./Columns";
import Contact from "./Contact";
import Airplane from "./Airplane";
import Content from "./Content";
import Input from "./Input";

function App() {
    return (
        <div>
            <div className="wrapper">
                <Header/>
                <Title/>
            </div>
            <Mamory/>
            <div className="wrapper">
                    <div className="page2">
                    <Columns picture="ph2.jpg" title="Lorem ipsum dolor sit amet" text=" Ornare arcu eleifend odio.
                    Mauris integer elit. Amet, tortor, arcu non malesuada nec ipsum accumsa."/>
                        <Columns picture="ph3.jpg" title="Lorem ipsum dolor sit amet" text=" Ornare arcu eleifend odio.
                    Mauris integer elit. Amet, tortor, arcu non malesuada nec ipsum accumsa."/>
                        <Columns picture="ph4.jpg" title="Lorem ipsum dolor sit amet" text=" Ornare arcu eleifend odio.
                    Mauris integer elit. Amet, tortor, arcu non malesuada nec ipsum accumsa."/>
                </div>
                <Airplane/>
                <Content/>
                <Comments/>
                <div className="containers">
                    <Cards picture="avatar.jpg" title="Customer Name" text=" Ornare arcu eleifend odio. Mauris integer
                    elit. Amet, tortor, arcu non malesuada nec ipsum accumsa. Ornare arcu eleifend odio. "/>
                    <Cards picture="avatar.jpg" title="Customer Name" text=" Ornare arcu eleifend odio. Mauris integer
                    elit. Amet, tortor, arcu non malesuada nec ipsum accumsa. Ornare arcu eleifend odio. "/>
                    <Cards picture="avatar.jpg" title="Customer Name" text=" Ornare arcu eleifend odio. Mauris integer
                    elit. Amet, tortor, arcu non malesuada nec ipsum accumsa. Ornare arcu eleifend odio. "/>
                </div>
                <Contact/>
            </div>
            <Footer/>

        </div>
    );
}

export default App;
