import React from 'react';
import {createRoot} from 'recat-dom/client';

const clock = document.getElementById('clock');


function constClockRunning(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString
    timeString.style.color('pink');
    timeString.style.fontWeight("20px");
    
   }
   // I'm going to try to give style 
   // css --rm- data 

   setInterval(constClockRunning, 1000);
   constClockRunning(); 