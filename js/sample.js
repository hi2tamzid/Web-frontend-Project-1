function view(e){
  // document.getElementById('li-1').classList.remove('all-li');
  e.style.display="none";
  // alert(e.innerHTML);
  document.getElementById('li-1').classList.add('lol');
  document.getElementById('li-2').style.transitionDelay=".5s";
  document.getElementById('li-2').classList.add('lol');
}