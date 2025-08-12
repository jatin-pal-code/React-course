import Greet from "./components/Greet";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Password from "./components/Password";

const App = () => {
  return <div>
    <Greet />
    <Header />
    <Body />
    <Footer />
    <Map />
    <Password isValid={false } />
    <User name = "Jatin PAl" age = {21} isMarried = {false} hobbies = {["coding", "Gaming", "Sleeping"]}/>
  </div>

};


const User = (props) => {
  return <section>
    <h1>Name: {props.name}</h1>
    <h1>age: {props.age}</h1>
    <h1>isMarriage: {props.isMarried}</h1>
    <h1>Hobbies: {props.hobbies}</h1>
  </section>
};


export default App;