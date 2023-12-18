const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movieList");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        
        let clicks = 2;
        if (window.matchMedia("(max-width: 1170px)").matches){
            clicks = 3;
        }
        if (window.matchMedia("(max-width: 875px)").matches){
            clicks = 4;
        }
        if (window.matchMedia("(max-width: 768px)").matches){
            clicks = 2;
        }
        if (window.matchMedia("(max-width: 587px)").matches){
            clicks = 3;
        }
        if (window.matchMedia("(max-width: 425px)").matches){
            clicks = 2;
        }

        if (clickCounter <= clicks){
            movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }
        else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

let menuIcon = document.querySelector('#MenuIcon');
let menuList = document.querySelector('.menuList');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuList.classList.toggle('open');
}

let btn = document.getElementById("btn");
let btnImg = document.getElementById("btnImg");
let qrImg = document.querySelector(".qrImg")

btn.onclick = function(){
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")){
        btnImg.src = "https://static.vecteezy.com/system/resources/previews/009/664/587/non_2x/sun-sun-ray-icon-transparent-free-png.png";
        qrImg.src = "Media/qrWhite.png";
    }
    else{
        btnImg.src = "https://www.freeiconspng.com/uploads/moon-icon-32.png";
        qrImg.src = "Media/qrBlack.png";
    }
}

function goToBooking(movie){
    const encodedMovieName = encodeURIComponent(movie);
    window.location.href = 'booking.html?movie=' + encodedMovieName;
}

const urlParams = new URLSearchParams(window.location.search);
const movieName = urlParams.get('movie');
document.getElementById("nameMovie").innerHTML = "Select your seat(s) for " + movieName;
document.getElementById("bookingTitle").innerHTML = "Movie Book | " + movieName;

var seats = document.querySelectorAll('.seat');
seats.forEach(function(div){
    div.addEventListener('click', function(){
        div.classList.toggle('selected');

        var selectedSeats = document.querySelectorAll(".selected");
        var count = selectedSeats.length;
        var total = (count - 1) * 500;
        document.getElementById("seatCount").innerHTML = count - 1;
        document.getElementById("seatTotal").innerHTML = total;

        if (count > 1){
            document.getElementById("btnNext").style.display = "block";
            document.getElementById("btnNext").innerHTML = "Pay ₹" + total;
            document.getElementById("btnNext").addEventListener('click', function(){
                window.location.href = 'payments.html?amt=' + total;
            });
        }
        else{
            document.getElementById("btnNext").style.display = "none";
        }
    });
});