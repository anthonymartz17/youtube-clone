import "../assets/styles/TagBar.css"
import { getMostPopular } from "../services/youtubeApi"
import { useState,useEffect } from "react"

export function TagBar(){

    const [tags,setTags] = useState("");

    useEffect(()=>{
        getMostPopular().then(response => setTags(response))
    },[])

    return(
        <ul className="tagbar-list overflow-auto hover:overflow-scroll">
            <li className="tagbar-list_li">All</li>
            {tags.items.map((tag) => tag.snippet.tags && tag.snippet.tags.map(ele => ele.length < 11 && <li className="tagbar-list_li">{ele}</li>))}
        </ul>
    )
}