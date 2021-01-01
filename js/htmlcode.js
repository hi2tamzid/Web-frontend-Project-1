function printDate(){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  var x = new Date();
  var year = x.getFullYear();
  var month = monthNames[x.getMonth()];
  var day = x.getDate();
  // document.write(x);
  document.write(month + " " + day + ", " + year);
}
function printYear(){
  var x = new Date();
  var year = x.getFullYear();
  document.write(year);
}