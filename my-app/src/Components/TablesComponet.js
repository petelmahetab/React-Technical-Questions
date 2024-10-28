import React from 'react';
import './cssForTables.css';

const TablesComponet=() =>{
  return (
    <div>
        <table>
            <thead>
           <tr>
               <td><b>Sr.no</b></td>
               <td><b>Name</b></td>
               <td><b>Email</b></td>
               <td><b>Address</b></td>
           </tr>
           </thead>
           <tbody>
           <tr>
               <td>1</td>
               <td>Mahetab</td>
               <td>patelmahetab9020@gmail.com</td>
               <td>Whole World.!</td>
           </tr>
           <tr>
               <td>2</td>
               <td>Hulk</td>
               <td>smash15@gmail.com</td>
               <td>London</td>
           </tr>
           <tr>
               <td>3</td>
               <td>RDJ</td>
               <td>PlayBoi541@gmail.com</td>
               <td>USA</td>
           </tr>
           <tr>
               <td>4</td>
               <td>Thor</td>
               <td>thunder87@gmail.com</td>
               <td>ASGUARD</td>
           </tr>
           </tbody>
        </table>
    </div>
  )
}

export default TablesComponet