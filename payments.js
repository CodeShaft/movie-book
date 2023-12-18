var urlParams2 = new URLSearchParams(window.location.search);
var totalVal = urlParams2.get('amt');
var totalVal = Number(totalVal);
var disc = 0.1 * totalVal;
var tax = 0.2 * (totalVal - disc);
var gt = (totalVal + tax) - disc;

document.getElementById("total").innerHTML = "₹" + totalVal;
document.getElementById("disc").innerHTML = "₹" + disc;
document.getElementById("tax").innerHTML = "₹" + tax;
document.getElementById("gt").innerHTML = "₹" + gt;