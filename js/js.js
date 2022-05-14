let activeDrop;
const spisk=document.querySelectorAll(".spisk")
console.log (spisk);
let i = 0;
for(let i of spisk){ i.addEventListener("click",()=>{
    const drop=i.querySelector(".drop")
    
    console.log (drop)
    drop.classList.remove("drop-hide")
    drop.setAttribute("style", "")
    drop.classList.toggle("drop-show")
    if(!drop.classList.contains("drop-show")){
        drop.classList.add("drop-hide") ;
        setTimeout(() => {
            drop.style.display = "none";
        }, 100)
    }
   
  //  drop.classList.toggle("drop-hide")

    const title = i.querySelector(".title")
    title.classList.toggle("orange")
});}

//Слайдер на мейне
let images = ["slider/1.jpg","slider/2.jpg"];
let titles = ["Imperial Courier","Diamondback Explorer"]
let links = ["#", "diamondback-e.html"]
const slider1 = document.querySelector(".main-slider-content");
const title1 = document.querySelector(".main-slider-title")
let j = 0;
setInterval(()=>{
    slider1.style.backgroundImage = "url(" + images[j] + ")";  
    title1.innerHTML = "<a>" + titles[j] + "</a>";
    console.log(title1)
    title1.querySelector("a").setAttribute("href", links[j])
    j++;
    if (j == images.length) j = 0;
}, 5000)
