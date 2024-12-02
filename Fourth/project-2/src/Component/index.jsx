import React, { useState, useEffect } from 'react';

function Index() {
    // useState for the type of color
    const [TypeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#000000');

    // Generate a random HEX color
    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hash = "#";
        for (let i = 0; i < 6; i++) {
            hash += hex[generateRandom(hex.length)];
        }
        setColor(hash);
    }

    // Generate a random RGB color
    function handleCreateRandomRgbColor() {
        const r = generateRandom(256);
        const g = generateRandom(256);
        const b = generateRandom(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    // Utility function to generate random numbers
    function generateRandom(len) {
        return Math.floor(Math.random() * len);
    }

    // Side effect: Generate a random color when the type changes
    useEffect(() => {
        if (TypeOfColor === 'rgb') {
            handleCreateRandomRgbColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [TypeOfColor]);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: color // Apply the color as background
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={TypeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                Generate Random Color
            </button>

            <div style={{
                textAlign: "center",
                color: "#fff",
                fontSize: "30px",
                textShadow: "1px 1px 2px black"
            }}>
                <h2>{TypeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h2>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default Index;
