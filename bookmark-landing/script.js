
const answer = document.getElementById("showAnswer");
const answer2 = document.getElementById("showAnswer2");


const modal = document.getElementById("myModal")
const modal2 = document.getElementById("myModal2")

const close = document.querySelector(".close")
const close2 = document.querySelector(".close2")





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  const showAnswer = (e) => {
    console.log("hahaha");
    modal.style.display = "block";
    
  }
  
  const showAnswer2 = (e) => {
    console.log("hahaha");
    modal2.style.display = "block";
    
  }
  // window.onClick = (e) => {
  //   if (e.target == modal){
  //     modal.style.display = "none"
  //   }
  // }
  const handleClose = () => {
    console.log("close")
    modal.style.display = "none"
  }
  const handleClose2 = () => {
    console.log("close")
    modal2.style.display = "none"
  }
 

 answer.addEventListener("click", showAnswer);
 answer2.addEventListener("click", showAnswer2);
 close.addEventListener("click", handleClose)
 close2.addEventListener("click", handleClose2)