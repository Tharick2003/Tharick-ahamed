let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nava');

window.onscroll = () => {

sections.forEach(sec => {
    let top =window.scrollY;

    let offset =sec.offsetTop -150;

    let height = sec.offsetHeight;

    let id =sec.getAttribute;

if(top >= offset && top < offset + height) { 
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*='+ id +' ]' ).classList.add
            
       


})
    }

})


}

menuIcon.onclick = () => {

menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

}
document.querySelectorAll('.circlechart').forEach(chart => {
    let percentage = chart.getAttribute('data-percentage');
    chart.style.setProperty('--percentage', percentage);
});

$(`.circlechart`).circlechart();

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });
});






// Function to open tab content
function openSkill(evt, skillName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and add active class to the clicked button
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}


