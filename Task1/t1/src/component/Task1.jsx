import React from 'react';
import { useState } from 'react';

const userList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }, 
    { id: 3, name: 'Charlie' }
]

const Task1 = () => {
    /* We Need to create "Toggle Favorite Users".
    1. 2 state Variable for the array for Users,Toggle.
    */
    const [users, setUsers] = useState([]);
    const [isFavoriteToggle, setIsFavoriteToggle] = useState(false);

    function isToggleFunction(id) {
        setUsers((pre) => {
         return pre.includes(id) ? pre.filter(userId => userId !== id) : [...pre, id]
        })
    }

    const filterUsers = isFavoriteToggle ? userList.filter(user=>users.includes(user.id)):userList;

    return (
        <>
            <div className={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px'}}>
               
                    <h1>Users</h1>
                    <button onClick={() => setIsFavoriteToggle(pre => !pre)}>
                        {isFavoriteToggle ? 'Show All Users' : 'Show Favorites Only'}
                    </button>
               
                <ul>
                {filterUsers.map(user=>(
                    <li key={user.id}>
                       <p>{user.name}</p>
                       <button onClick={()=>isToggleFunction(user.id)}>
                           {users.includes(user.id)? '💔 Not Favorable':'❤️ Favorable'}
                       </button>
                    </li>
                ))}
                </ul>

            </div>
        </>
    )
}

export default Task1
