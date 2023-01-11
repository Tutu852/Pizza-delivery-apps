

import { useState, useEffect } from "react";

export default function DataBindingComponent(){
     const [mars, setMars] = useState();

     useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=> response.json())
        .then(data=>{
            setMars(data);
        })
     },[])

    return(
        <div className="container">
            <h2>Mars Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
               <>
               <tbody>
                    {
                        mars.photos.map(photos=>
                            <tr>
                                <td>{photos.id}</td>
                                <td>{photos.camera.full_name}</td>
                                <td>{photos.rover.name}</td>
                                <td>
                                    <img src={photos.img_src} width="100" height="100"/>
                                </td>
                            </tr>
                            )
                    }
                </tbody>  
               </>
            </table>
        </div>
    )
                  }