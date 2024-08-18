import React from 'react'

import Menu from "../assets/hamburger.png"
import Navbar from '../Navbar';



const BurgerMenu = () => {

    const buttons = document.querySelectorAll(".btn");
    const showClass = document.querySelectorAll(".hide");
    const title = document.querySelector(".content-text");


    buttons.forEach(btn => btn.addEventListener("click", () => {
        let attr = btn.getAttribute("data-btn-type");
        switch (attr) {
            case "search" :
                // title.innerHTML = <Navbar><img src={Menu} alt="" /></Navbar>;
                buttons[3].innerHTML = ""
                showClass.forEach(element => element.classList.add(""));
                break;
            case "run" :
                title.innerHTML = "";
                buttons[3].innerHTML = "";
                showClass.forEach(element => element.classList.add(""));
                break;
            case "hide" :
                showClass.forEach(e => e.classList.remove("show"));
                break;
        }
    }));

  return (
    <div class="general">
        
        <div class="btn-container">
            <button class="btn" data-btn-type="search">
                
            </button>
            <div class="btn" data-btn-type="run"></div>
        </div>
        <div class="black-layer hide btn" data-btn-type="hide"></div>
        <div class="side-menu hide">
            <div class="content">
                <h2 class="content-text"></h2>
                <button class="btn" data-btn-type="hide"></button>
            </div>
        </div>
        <div class="container">
            <div class="obshiy">

            </div>

            
        </div>
    </div>
        
  )
}

export default BurgerMenu