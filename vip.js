// ===================================
// STOCKINTEL VIP DASHBOARD
// ===================================

// Sidebar Active Menu

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

item.addEventListener("click", () => {

menuItems.forEach(i => i.classList.remove("active"));

item.classList.add("active");

});

});

// ===================================
// Welcome Message
// ===================================

const hour = new Date().getHours();

const welcomeTitle = document.querySelector(".welcome-card h1");

if(welcomeTitle){

if(hour < 12){

welcomeTitle.innerHTML =
"Selamat Pagi VIP Member";

}else if(hour < 18){

welcomeTitle.innerHTML =
"Selamat Siang VIP Member";

}else{

welcomeTitle.innerHTML =
"Selamat Malam VIP Member";

}

}

// ===================================
// Watchlist Highlight Animation
// ===================================

const watchCards = document.querySelectorAll(".watch-card");

watchCards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-6px) scale(1.03)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px) scale(1)";

});

});

// ===================================
// Analysis Card Animation
// ===================================

const analysisCards = document.querySelectorAll(".analysis-card");

analysisCards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.border = "1px solid #1d4fff";

});

card.addEventListener("mouseleave", () => {

card.style.border = "1px solid transparent";

});

});

// ===================================
// Fake Live Clock
// ===================================

function updateClock(){

const now = new Date();

const timeString = now.toLocaleTimeString("id-ID");

const clockElement =
document.getElementById("liveClock");

if(clockElement){

clockElement.innerHTML = timeString;

}

}

setInterval(updateClock,1000);

// ===================================
// Auto Scroll To Section
// ===================================

const sections = document.querySelectorAll(
".widget-section,.watchlist-section,.analysis-section,.education-section,.community-section"
);

menuItems.forEach((item,index)=>{

item.addEventListener("click",()=>{

if(index > 0 && sections[index-1]){

sections[index-1].scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===================================
// Coming Soon Notification
// ===================================

const comingSoon = document.querySelector(".coming-soon");

if(comingSoon){

comingSoon.addEventListener("click",()=>{

alert(
"Education Center akan segera tersedia untuk Member VIP StockIntel 🚀"
);

});

}

// ===================================
// Community Button Effect
// ===================================

const communityBtn =
document.querySelector(".community-btn");

if(communityBtn){

communityBtn.addEventListener("mouseenter",()=>{

communityBtn.style.boxShadow =
"0 0 40px rgba(29,79,255,.8)";

});

communityBtn.addEventListener("mouseleave",()=>{

communityBtn.style.boxShadow =
"0 0 30px rgba(29,79,255,.4)";

});

}

// ===================================
// Dashboard Loaded
// ===================================

console.log(
"StockIntel VIP Dashboard Loaded Successfully"
);
