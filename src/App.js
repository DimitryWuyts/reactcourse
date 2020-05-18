import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactCard from "./ContactCard";

function App() {
    return (<div>
            {/*<NavBar/>*/}
            {/*<Header/>*/}
            {/*<Footer/>*/}
            <ContactCard
                contact={{
                    name: "Mr.jos",
                    imgURl: "https://i.pinimg.com/originals/92/18/85/921885925bf07d85d723ee267b2b2498.jpg",
                    phone: "0498.69.14.67",
                    email: "dimi65468@tetmail.be"
                }}/>
            <ContactCard
                contact={{
                    name: "Mr.jef",
                    imgURl: "https://i.pinimg.com/originals/92/18/85/921885925bf07d85d723ee267b2b2498.jpg",
                    phone: "0498.69.14.67",
                    email: "dimi65468@tetmail.be"
                }}/>
            <ContactCard
                contact={{
                    name: "Mr.jack",
                    imgURl: "https://i.pinimg.com/originals/92/18/85/921885925bf07d85d723ee267b2b2498.jpg",
                    phone: "0498.69.14.67",
                    email: "dimi65468@tetmail.be"
                }}/>  <ContactCard
                contact={{
                    name: "Mr.jawel",
                    imgURl: "https://i.pinimg.com/originals/92/18/85/921885925bf07d85d723ee267b2b2498.jpg",
                    phone: "0498.69.14.67",
                    email: "dimi65468@tetmail.be"
                }}/>

        </div>
    )
}

export default App











