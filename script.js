// Kirim Pesan
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click",function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});

// Kirim Pesan

// Jam
setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min + ":" + sec + " " + am_pm;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
  
showTime();
// Jam

// ScrollTop
  
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// ScrollTop

// Audio
const sounds = ['applause', 'tada'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn-song');

    btn.innerText = sound;
    btn.addEventListener('click', ()=>{
        stopSongs();
        document.getElementById(sound).play()

    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}
// Audio

// Cursor Mouse
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove",moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x,y)
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
console.log(links);

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});
// Cursor Mouse