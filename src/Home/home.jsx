import "../CSS/home.css";
import Header from "../components/Header";
import Content from "../components/content";
import Footer from "../components/footer";



function Home(){
    return(
        <div className="Home">    
              <Header/> 
            <Content/>
            <Footer/>
        </div>
    );
}

export default Home;