import React from 'react';
import { YoutubeData } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    console.log(props);
    return (
        <div className={"youtube-list"}>
        {props.children}
        {YoutubeData.map((item,index)=>
        {
          if (index === 1){
            console.log(`middle item `);
          }
          return ( 
        <YoutubeItem
        key={item.id}
        image = {item.image}
        imgAuthor ={item.imgAuthor}
        title = {item.title}
        author = {item.author}
        className = { index === 1 ? "abc": ""}
        > 
        </YoutubeItem>
       )}
        )
      }
    </div>
    );
};

export default YoutubeList;