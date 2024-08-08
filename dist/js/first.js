
// let arr=["Ritik","hh"]
// arr.forEach(nam=>{
//     let x = document.createElement("div");
// x.classList.add("mydiv");
// x.innerHTML=nam
// document.body.appendChild(x);

// })
 
// document.getElementById('team-dropdown-button').addEventListener('click', function() {
//     document.getElementById('team-dropdown-menu').classList.toggle('hidden');
//   });
//   document.getElementById('season-dropdown-button').addEventListener('click', function() {
//     document.getElementById('season-dropdown-menu').classList.toggle('hidden');
//   });

let images = ["csk.jpg", "csk.jpg", "csk.jpg", "mi.jpg", "mi.jpg", "mi.jpg", "mi.jpg"];
let photosArea = document.getElementById("photosArea");

images.forEach(img => {
  let li = document.createElement("li");
  li.style.backgroundImage = `url('${img}')`;
  li.style.backgroundSize = "cover";
  li.style.backgroundPosition = "center";
  li.style.backgroundRepeat = "no-repeat";
  li.classList.add("photos");
  console.log("hey");
});