import React from 'react';
import ImageCard from './ImageCard.js'
import './css/ImageList.css'
 const ImageList=(props)=>{
     const Images= props.images.map(({description,id,urls})=> {
   return(
            <ImageCard key={id} alt={description} src={urls.regular}/>
       )
     })
 return(
     <div className="grid">
         {Images}
     </div>
 )
 };
 export default ImageList;