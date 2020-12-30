function logocolor(e){
  if(e == 0){
    document.getElementById('svg_6').classList.remove("logo1");
    document.getElementById('svg_6').classList.add("logo");
  }
  else{
      document.getElementById('svg_6').classList.remove("logo");
      document.getElementById('svg_6').classList.add("logo1");
  }
}