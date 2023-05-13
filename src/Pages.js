import React from 'react'
import Page1 from './API/CONTENTLISTINGPAGE-PAGE1.json'
import Page2 from './API/CONTENTLISTINGPAGE-PAGE2.json'
import Page3 from './API/CONTENTLISTINGPAGE-PAGE3.json'


export function Pages(props)
{

    const Page_Array=[Page1,Page2,Page3]
    const {content}=Page_Array[props.page_num].page['content-items']
    return(
       content.map(({item,index})=>
       {
        <ul key={index}>
            <li>{item["name"]}</li>
            <img src={item["poster-image"]} alt={item["name"]}/>
        </ul>
       }
            
        )
    )
}




