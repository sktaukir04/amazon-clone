import React, { useState ,useEffect} from 'react'
import './slide.css';


const Slideshow = ({imgs}) => {
    const [index,setIndex] = useState();
    useState(()=>{
        setIndex(0)
    },[])

const nextImage= ()=>{
    if(index===imgs.length -1 ){
        setIndex(0);
    }else{
        setIndex(index+1);
    }

}

const previousImage=()=>{
    if(index===imgs.length -1 ){
        setIndex(0);
    }else{
        setIndex(index-1);
    }

}

    return <div className='SlideShow'>
        <div className='carousel'>
        <button className='carouselbtn btnprevious' onClick={previousImage}>&#8656;</button>
        <button className='carouselbtn btnnext' onClick={nextImage}>&#8658;</button>
        <img className='mainloop' src={imgs[index]}/>
        </div>

    </div>

}
function slide() {
  return (
    <div className='Slide'>
        <h1>Products</h1>
        <Slideshow
        imgs={[
            "https://m.media-amazon.com/images/I/41TTFCS7H7S._AC_SY780_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/31wJr8oTWAL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/41T4r+pvjlL._AC_SX296_SY426_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/317Czb1Cm4L._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg",

        ]}


/>


    </div>
  )
}

export default slide









// const slideImages = [
//     { url: "https://m.media-amazon.com/images/I/41TTFCS7H7S._AC_SY780_FMwebp_.jpg", caption:'Slide' },
//     { url: "https://m.media-amazon.com/images/I/31wJr8oTWAL._AC_SY200_.jpg", caption:'Slide' },
//     { url: "https://m.media-amazon.com/images/I/41T4r+pvjlL._AC_SX296_SY426_FMwebp_QL65_.jpg", caption:'Slide' },
//     { url: "https://m.media-amazon.com/images/I/317Czb1Cm4L._AC_SY200_.jpg", caption:'Slide' },
//     { url: "https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg", caption:'Slide' },
//     { url: "https://m.media-amazon.com/images/I/41xssMLI2DL._AC_SY200_.jpg", caption:'Slide' },
//     { url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022219953" , caption:'slide'},
// ];