const buttons = document.querySelector(".button");
const count = document.querySelector(".count");
const flexContainer = document.querySelector(".container");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      count.textContent++;
      setColor();
    }else if (e.target.classList.contains("subtract")) {
      count.textContent--;
      setColor();
    }else if (e.target.classList.contains("reset")) {
      count.innerHTML = 0;
      setColor();
    }
  });
  
  function setColor() {
    if (count.innerHTML > 0) {
      count.style.color = "#49e1f1";
      flexContainer.style.backgroundColor = '#cdf8fc'; // Change background color to red
    } else if (count.innerHTML < 0) {
      count.style.color = "orangered";
      flexContainer.style.backgroundColor = '#f45151'; // Change background color to red
    } else {
      count.style.color = "#fff";
      flexContainer.style.backgroundColor = 'white'; // Change background color to red
    }
  }