import React from 'react'
import "./home.css";
import Product from "./product"
function Home() {
    return (
        <div className="home">
            {/* <img className="home_image" src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" alt="home" /> */}
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home" />

            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"}
                />

            </div>

            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"}
                />
                
            </div>

            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"}
                />
            </div>



        </div>
    )
}

export default Home