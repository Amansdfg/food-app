'use client'

import { useRef,useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image";
export default function ImagePicker({label,name}){
    const[currentImage,setCurrentImage]=useState();
    const imageRef=useRef();
    function handlePickClick(){
        imageRef.current.click();
    }
    function imageChange(event){
        const file=event.target.files[0];
        if(!file){
            return;
        }
        const fileReader=new FileReader();
        fileReader.onload=()=>{
            setCurrentImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!currentImage && <p>No image picked yet.</p>}
                    {currentImage && <Image src={currentImage}  alt="The image selected by user" fill/>}
                </div>
                <input 
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg" 
                    name={name}
                    ref={imageRef}
                    onChange={imageChange}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                    >
                    Pick an Image
                </button>
            </div>            
        </div>
    )
}