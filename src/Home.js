import React from 'react'
import "./home.css";
import Product from "./product"
import Slide from "./slide";
import { useEffect } from 'react';


function Home() {
    useEffect(() => {
        document.title = "Amazon Shopping"
      }, [])
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
                    image={"https://m.media-amazon.com/images/I/41TTFCS7H7S._AC_SY780_FMwebp_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/31wJr8oTWAL._AC_SY200_.jpg"}
                />

            </div>

            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/41T4r+pvjlL._AC_SX296_SY426_FMwebp_QL65_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/317Czb1Cm4L._AC_SY200_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/51tbcILVglL._AC_SY200_.jpg"}
                />

            </div>

            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022219953"}
                />
            </div>
            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022219953"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022219953"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg"}
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022219953"}
                />
            </div>
            {/* <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            /> */}

            <Slide/>




        </div>
    )
}

export default Home