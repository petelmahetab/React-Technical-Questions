import React, { useState } from 'react'

function Index() {
    //useState for the type of color
    const [TypeOfColor, setTypeOfColor] = useState("hex")


    const [color, setcolor] = useState('#000000')

    //function for generating an random colors

    function handleCreateRandomHexColor() {
//HEX values Should be for array and its range  0 to 9 it pickes randomly,A to F alphabets and for Starting #
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hash="#";
//iterate in that hex array for getting random hex number with math random.6 beacause we need 6 digit hex Number
        for(let i=0;i<6;i++){
    hash+=hash[generateRandom(hex.length)]
        }

        console.log(hash);
    }

    //I am going to create an Function for random generating element using MATH.random method.
 
    function generateRandom(len){
        return Math.floor(Math.random()*len)
    }


    function handleCreateRandomRgbColor(){

    }

    return (
        <div style={{
            width: "100vw",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px"
        }}>
            <button onClick={() => {
                setTypeOfColor('hex')
            }}>Create HEX Color</button>

            <button onClick={() => {
                setTypeOfColor('rgb')
            }}>Create RGB Color</button>
            {/* on This button we have to perform an function for generating RANDOM Color based on HEX and RGB .If type of color will be matches with the Hex then generat color based on HEX value.*/}
            <button onClick={TypeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor }>Generate Random Color</button>
        </div>
    )
}

export default Index