let changeTheme=()=>{
  let btn=document.getElementById("btn-mode");
  let bg=document.querySelector("body");
  if(btn.innerHTML=="Dark")
  {
    bg.style.backgroundColor="black";
    btn.innerHTML="White";
    btn.style.backgroundColor="white";
  }
  else if(btn.innerHTML=="White")
  {
    bg.style.backgroundColor="white";
    btn.innerHTML="Dark";
    btn.style.backgroundColor="gray";
  }
  else{
    alert("Something Went wrong...");
  }
}