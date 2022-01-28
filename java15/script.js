function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  


const btnRed = document.querySelector('#btn-red');
const btnGreen = document.querySelector('#btn-green');
const btnBlue = document.querySelector('#btn-blue');
const btnYellow = document.querySelector('#btn-yellow');
const dropdown = document.querySelector('dropdown');


btnRed.addEventListener('click', () => {
    document.body.style.background = 'red';
    
})

btnGreen.addEventListener('click', () => {
    document.body.style.background = 'green';
})
btnBlue.addEventListener('click', () => {
    document.body.style.background = 'blue';
})
btnYellow.addEventListener('click', () => {
    document.body.style.background = 'yellow';
})
dropdown.addEventListener('change', function () {
    const color = this.value;
    
    if(color === 'default'){
        document.body.style.background = 'white';
    }else {
        document.body.style.background = color;
    }
})
