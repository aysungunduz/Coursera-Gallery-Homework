const image = document.querySelector("#image");
const pic1 = document.querySelector(".pic1");
const pic2 = document.querySelector(".pic2");
const pic3 = document.querySelector(".pic3");


image.addEventListener("click", () => {
    image.style.backgroundColor = "red";
    image.innerText = "Content changed."
})

pic1.addEventListener("mouseover", () => {
    image.style.backgroundImage = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg)";
    image.innerText = "Styling with a Bandana";
})

pic1.addEventListener("mouseout", () => {
    image.style.background = "#8e68ff";
    image.innerText = "Hover over an image below to display here."
})


pic2.addEventListener("mouseover", () => {
    image.style.backgroundImage = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG)";
    image.innerText = "With My Boy";
})

pic2.addEventListener("mouseout", () => {
    image.style.background = "#8e68ff";
    image.innerText = "Hover over an image below to display here."
})


pic3.addEventListener("mouseover", () => {
    image.style.backgroundImage = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg)";
    image.innerText = "Young Puppy";
})
pic3.addEventListener("mouseout", () => {
    image.style.background = "#8e68ff";
    image.innerText = "Hover over an image below to display here."
})






// console.log(pic3);