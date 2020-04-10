import React from 'react'

function Page(){
    function createPage(){ alert('Creating..') }
    function readPage(){ alert('Displaying..') }
    function updatePage(){ alert('Updating..') }
    function delPage(){ alert('Deleting..') }
    return(
        <div>
            <h1 align="left"> Employee Management </h1>
            <p align="left"> Open Book Assignment by Sandhya</p>
            <p align ="left" ><button onClick= {createPage}> CREATE</button>
            <button onClick= {readPage}> READ </button>
            <button onClick= {updatePage}> UPDATE </button>
            <button onClick= {delPage}> DELETE </button></p>
            <p align="left"> First Name:  <input type="text" align="left" id="fname" value={document.getElementById("fname")}></input> </p>
            <p align="left"> Last Name: <input type="text1" align="left"id="lname" value={document.getElementById("lname")}></input> </p> 
            <p align="left"> Email: <input type="text2" align="left"id="email" value={document.getElementById("email")}></input> </p> 
            <p align="left"> DOB:   <input type="text3" align="left"id="dob" value={document.getElementById("dob")}></input> </p> 
            <p align="left"> Gender: 
                <label> <input type="radio" align="left" id="male" onSelect={document.getElementById("male")} ></input> male   </label> 
                <label> <input type="radio" align="left" id="female" onSelect={document.getElementById("female")} ></input> female   </label> 
            </p>
        </div>
    );
}


export default Page