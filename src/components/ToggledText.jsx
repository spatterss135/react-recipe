import { useState } from "react";



export default function ToggleText({text}) {
    let [toggle, setToggle] = useState(false)
    let parser = new DOMParser()
    
    let newText = text.split('<b>').map(stuff => [...stuff.split('</b>')])
    var merged = [].concat.apply([], newText).join('')
    let linkless = merged.split('<').slice(0, 1)
    let links = merged.split('<').slice(1)
    
    function handleLinks(merged){
        let cleanLinks = []
        for (let i=0;i<links.length;i+=2){
            cleanLinks.push('<' + [links[i], links[i+1]].join(''))
        }
        cleanLinks =cleanLinks.map(link => link.replace('/a>', '</a>'))
        let newLinks = cleanLinks.map(link => {
            while (link.slice(link.length-1) !== '>'){
              link = link.slice(0, link.length-1)
            }
            let tag = parser.parseFromString(link, 'text/html').body.children[0]

            return (
                <div>
                    <a href={tag.getAttribute('href')}>{tag.textContent}</a>
                </div>
                
            )
          })
          
        return(
            <div>{newLinks}</div>
        )
    }
    function handleClick(e) {
        e.preventDefault()
        setToggle(!toggle)
    }

    return (
        <div>
            <span>{!toggle ? merged.slice(0,20)+'...':linkless}</span>
            <div>{!toggle ? '':handleLinks()}</div>
            <a  className='ps-2 text-expandor' href="" onClick={handleClick}>{!toggle?'expand':'less'}</a>
        </div>
    )
}
