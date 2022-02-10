import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [memeImage , setMemeImage] = React.useState("")
    
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    function getMemeImage(){
    const  memeArray = memesData.data.memes;
    const  randomNumber = Math.floor(Math.random() * memeArray.length)
    setMemeImage(memeArray[randomNumber].url)

    }



    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}