/* <!-- geolocation --> */
let coordinates=document.getElementById("coord");
function getlocation(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showposition);
} else { 
    coordinates.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showposition(position){
    let loctime=position.timestamp;
    let date=new Date(loctime);
    coordinates.innerHTML="Latitude: " +position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude +
    "<br> timestamp is " + date;
}

/* <!-- drag & drop --> */
function allowdrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("img",ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    let data=ev.dataTransfer.getData("img");
    ev.target.appendChild(document.getElementById(data));
}
/* <!-- see technice --> */