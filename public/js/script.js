const now = new Date();    
let date=now.getDate();
let month=now.getMonth()+1;
let year=now.getFullYear();
let day=now.getDay();
let newdate=0;
if (day=="0") newdate = date+7;
else if(day=="1")newdate = date+6;
else if(day=="2")newdate = date+5;
else if(day=="3")newdate = date+4;
else if(day=="4")newdate = date+3;
else if(day=="5")newdate = date+2;
else newdate = date+1;
document.querySelector('.date').value=`${year}-${month}-${newdate}`;
document.querySelector('.reset').addEventListener('click',function(){
document.querySelector(".name").value="";
});