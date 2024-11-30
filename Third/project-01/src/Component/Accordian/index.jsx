import { Data } from './data';
import React, { useState } from 'react';
import './style.css';

function Index() {
    // State for single selection
    let [singleSelect, setSingleSelect] = useState(null);

    // State for multi-selection
    let [enableMutli, setEnableMutli] = useState(false);
    let [mutli, setMulti] = useState([]);

    // Function for single selection toggle
    function handleSingle(item) {
        // Toggle single item selection
        setSingleSelect(singleSelect === item ? null : item);
    }

    // Function for multi-selection
    function handleMutliSelection(item) {
        let cpyMulti = [...mutli];
        const findIndexOfCurrentId = cpyMulti.indexOf(item);
        
        // If item is not in the array, add it; if it is, remove it
        if (findIndexOfCurrentId === -1) {
            cpyMulti.push(item);
        } else {
            cpyMulti.splice(findIndexOfCurrentId, 1);
        }

        setMulti(cpyMulti);
    }

    // Function to toggle enabling/disabling multi-selection
    function toggleMultiSelection() {
        setEnableMutli(!enableMutli);
    }

    console.log("Single selected:", singleSelect);
    console.log("Multi selected:", mutli);

    return (
        <div className='wrapper'>
            {/* Button to enable/disable multi-selection */}
            <button onClick={toggleMultiSelection}>
                {enableMutli ? "Disable Multiple Texts" : "Enable Multiple Texts"}
            </button>

            <div className="card">
                {Data && Data.length > 0 ? (
                    Data.map((item) => {
                        return (
                            <div className='item' key={item.id}>
                                {/* Conditionally setting the onClick handler */}
                                <div
                                    onClick={enableMutli ? () => handleMutliSelection(item.id) : () => handleSingle(item.id)}
                                    className='title'
                                >
                                    <h3>{item.title}</h3>
                                    <span>+</span>
                                </div>

                                {/* Conditionally render the content if the item is selected */}
                                {(singleSelect === item.id || mutli.indexOf(item.id) !== -1) && (
                                    <div className='answer'>{item.content}</div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div>No data Found..!</div>
                )}
            </div>
        </div>
    );
}
///DONE...
export default Index;
