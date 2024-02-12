function updateClock(){
    const now=new Date();
    const timeString= ${hours}:${minutes}:${seconds};
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock,1000);