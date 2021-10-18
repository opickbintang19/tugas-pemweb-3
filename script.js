// Kirim Pesan
// var messages = document.getElementById("messages");
// var textbox = document.getElementById("textbox");
// var button = document.getElementById("button");

// button.addEventListener("click",function(){
//     var newMessage = document.createElement("li");
//     newMessage.innerHTML = textbox.value;
//     messages.appendChild(newMessage);
//     textbox.value = "";
// });

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
// const sounds = ['applause', 'tada'];

// sounds.forEach((sound) => {
//     const btn = document.createElement('button');
//     btn.classList.add('btn-song');

//     btn.innerText = sound;
//     btn.addEventListener('click', ()=>{
//         stopSongs();
//         document.getElementById(sound).play()

//     });

//     document.getElementById('buttons').appendChild(btn);
// });

// function stopSongs() {
//     sounds.forEach((sound) => {
//         const song = document.getElementById(sound);

//         song.pause();
//         song.currentTime = 0;
//     });
// }
// Audio


// JS Navbar
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }