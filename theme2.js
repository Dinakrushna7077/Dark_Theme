let changeMode=()=>{
  let btn=document.getElementById("btn-mode");
  let bg=document.getElementById("bg-mode");
  if(btn.innerHTML=="Light Mode")
  {
    bg.classList="bg-white"
    btn.classList="btn-white-mode";
    btn.innerHTML="Dark Mode";
  }
  else if(btn.innerHTML=="Dark Mode")
  {
    btn.classList="btn-dark-mode";
    bg.classList="bg-dark";
    btn.innerHTML="Light Mode"
  }
  else
  alert("Something went wrong please try again later...!");
}