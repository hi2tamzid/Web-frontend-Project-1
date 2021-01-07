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
function showskill(e){
  document.getElementById("skill-h1").style.display="block";
  // var i = 0;
  var j = 0.1;
    e.style.display="none";
  var temp = document.getElementsByClassName('skill-list')[0];
  temp = temp.getElementsByTagName('li');

  for(var i = 0, k =0; i < temp.length; i++,k += j){
    temp[i].style.transitionDelay= k + "s";
    temp[i].classList.add("skill-list-show");

  }
  // document.getElementById('li-1').classList.add("skill-list-show");
  // i += j;
  // document.getElementById('li-2').style.transitionDelay= i + "s";
  // document.getElementById('li-2').classList.add("skill-list-show");
  // i += j;
  // document.getElementById('li-3').style.transitionDelay= i + "s";
  // document.getElementById('li-3').classList.add("skill-list-show");
  // i += j;
  // document.getElementById('li-4').style.transitionDelay= i + "s";
  // document.getElementById('li-2').classList.add("skill-list-show");
}