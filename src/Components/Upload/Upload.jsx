import React from "react"
import './Upload.css'
const Upload=()=>{


    return (

<div class="container" >
    <div class="head">Upload Prescription Image</div>
        <form class="form" action="" method="post" enctype="" autocomplete="off">

           
           
            <div class="form-group">
                <label for="caption">Caption </label>
                <input type="text" name="caption" id="caption" class="form-controll"/>
            </div>
            <div class="form-group">
               
            <input type="file" id="images" name="images"/>
            </div>

          
            <div class="form-group">
                <button type="submit">Upload images</button>
            </div>

        </form>

        </div>

    )
}
export default Upload
