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
                name = "MR.jos"
                imgUrl = "https://image.shutterstock.com/image-photo/kiev-ukraine-april-20-2015-260nw-273231134.jpg"
                phone = "0498.58.69.35"
                email = "dimijos14@hotmail.com"
            />
            <ContactCard
                name = "MR.Dimi"
                imgUrl = "https://image.shutterstock.com/image-photo/kiev-ukraine-april-20-2015-260nw-273231134.jpg"
                phone = "0498.58.69.35"
                email = "dimidre14@hotmail.com"
            />
            <ContactCard
                name = "MR.Dimfssrgsg"
                imgUrl = "https://image.shutterstock.com/image-photo/kiev-ukraine-april-20-2015-260nw-273231134.jpg"
                phone = "0498.58.69.35"
                email = "dimidefwe14@hotmail.com"
            />
            <ContactCard
                name = "MR.Disrfsf"
                imgUrl = "https://image.shutterstock.com/image-photo/kiev-ukraine-april-20-2015-260nw-273231134.jpg"
                phone = "0498.58.69.35"
                email = "dimisgsrgs14@hotmail.com"
            />
        </div>
    )
}

export default App











