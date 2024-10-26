import React from 'react'

const DataInputBox = () => {
  return (
    <div class="data-input-box">
        <div class="date-box-container">
            <div class="date-box"> 
                <div class="date-label"> MONTH </div>
                <div class="date-output"> JAN </div>
            </div>
            <div class="date-box"> 
                <div class="date-label"> DAY </div>
                <div class="date-output"> 01 </div>
            </div>
            <div class="date-box"> 
                <div class="date-label"> YEAR </div>
                <div class="date-output"> 1985 </div>
            </div>
            <div class="date-box">
                <div class="date-label"> HOUR </div>
                <div class="date-output"> 00 </div> </div>
            <div class="date-box"> 
                <div class="date-label"> MIN </div>
                <div class="date-output"> 00 </div>
            </div>
        </div>
        
        <div class="input-container">
            <input type="text" id="nameInput" placeholder="Enter Here:" class="input-data" />
            <div class="input-unit"> </div>
        </div>

    </div>
  )
}

export default DataInputBox