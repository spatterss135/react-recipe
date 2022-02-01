import { useState } from "react";



export default function ToggleText({text}) {
    let [toggle, setToggle] = useState(false)
    let parser = new DOMParser()
    
    let newText = text.split('<b>').map(stuff => [...stuff.split('</b>')])
    var merged = [].concat.apply([], newText).join('')

    function handleClick(e) {
        e.preventDefault()
        setToggle(!toggle)
    }

    return (
        <div>
            <span>{!toggle ? merged.slice(0,20):merged}</span>
            <a href="" onClick={handleClick}>{!toggle?'Expand':'Less'}</a>
        </div>
    )
}
