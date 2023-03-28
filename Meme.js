import React, { useEffect, useState } from "react";
import Memesdata from "./Memesdata.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    // randomImages: "https://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(Memesdata);

  
  const [count, setCount] = useState(0)
  
  const [allMemes, setAllMemes] = React.useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemes(data.data.memes))
  }, [])

  console.log("allMemes", allMemes)
  

  function getMemeImage() {
    
    if(allMemes.length === count){
      setCount(0)
    }
    else{

      setCount(count+1)
    }

  }

  console.log("count", count)

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="Top_text"
          placeholder="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          className="Bottom_Text"
          placeholder="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form_button" onClick={getMemeImage}>
          Get a New Meme Image 🖼
        </button>
      </div>
      <div className="meme">
        {/* <img src={meme.randomImages} alt="" className="meme_image" /> */}

    {/* {allMemes.map((arr, i) => (
      <div>
        <img src={arr.url} alt="" className="meme_image" />
      </div>
    ))} */}

<img src={allMemes[count]?.url} alt="" className="meme_image" />

        <h2 className="meme--text--top">{meme.topText}</h2>
        <h2 className="meme--text--bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
