import React,{useState, useEffect} from "react";


const ImageContainer = () => {
    const[imgGalUrl, setImgGalUrl] =useState([])
    const[filteredImgGal, setFilteredImgGal] = useState()
    const[imgUrl, setImgUrl] = useState()

    useEffect(() => {
        getImgGalUrl();
        getImgUrl();
        // filterImgUrl();
    },)

    const getImgGalUrl = function() {
        fetch('https://images-api.nasa.gov/search?q=orion')
        .then(res => res.json())
        // .then(imageGal => console.log(imageGal.collection.items[0].href))
        .then(imageGal => setImgGalUrl(imageGal.collection.items[0].href))
    }

    const getImgUrl = function(){
        fetch(imgGalUrl)
        .then(res => res.json())
        // .then(image => console.log(image))
        .then(images => images.filter(image => image.endsWith("jpg")))
        .then(images => setImgUrl(images))
    }

    const getNewImg = function(){
        setFilteredImgGal(imgUrl[Math.floor(Math.random()* imgUrl.length)])
    }

    // const filterImgUrl =function(){
    //     const result = imgUrl.filter(image => image.endsWith("jpg"))
    //     setFilteredImgGal(result)
    //     console.log(filterImgUrl)
    // }

    return (
        <div>
            <h2>This works</h2>
            <img src={filteredImgGal} />
            <button onClick={getNewImg}>New image</button>
        </div>
    )

}

export default ImageContainer;

