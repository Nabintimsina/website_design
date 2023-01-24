let right_parts = document.querySelectorAll(".fifth_section_right_part");
let control_btns= document.querySelectorAll('.training_page_template_part ul li');

// let index=1;

for (let index in control_btns) {
    if (Object.hasOwnProperty.call(control_btns, index)) {

        control_btns[index].addEventListener("mouseover", ()=>{
            
        for (let key in right_parts) {
         if (Object.hasOwnProperty.call(control_btns, key)) {
             right_parts[key].style.display ="none";
             control_btns[key].classList.remove("active_btn");
            
        }
    }
        control_btns[index].classList.add("active_btn");
        right_parts[index].style.display="block";
      
    })
}
}

let menu_bar = document.querySelector(".bars_container");
let normal_header_container = document.querySelector('.normal_header_container');
let cross_sign = document.querySelector(".cross_container")

menu_bar.addEventListener("click",()=>{
    normal_header_container.style.display= "grid"
    cross_sign.style.display ="block"
    menu_bar.style.display ="none"
})

cross_sign.addEventListener("click",()=>{
    normal_header_container.style.display= "none"
    cross_sign.style.display ="none"
    menu_bar.style.display ="block"
})
