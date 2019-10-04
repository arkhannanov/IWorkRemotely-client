import React from 'react';
import {useDropzone} from 'react-dropzone';


export default function Drop(){
        const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({
            accept: 'image/jpeg, image/png'
          });
          console.log(acceptedFiles);
        return(                    
        <div {...getRootProps()}>
        <div className="post-a-job__form-logo-dnd" htmlFor="logo">
          <div className="post-a-job__form-logo-dnd-title">{isDragActive ?'Оставьте фото тут': 'Кликните или перетащите фото в это окно'}</div>
        </div>
          <input
              {...getInputProps({name:'logo',type:'file',accept:".jpg, .png, .jpeg", id: "logo",className: "post-a-job__form-logo"})}
          />
        </div>)
}