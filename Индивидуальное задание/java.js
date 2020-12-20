function rasch()
{
var r1,r2,r3,r,sc,pr=0;

r1=parseFloat((document.getElementById('kol1').value))*120;
r2=parseFloat((document.getElementById('nos1').value))*100;
r3=parseFloat((document.getElementById('fut1').value))*350;

if((((r1/120)-Math.trunc(r1/120))==0)&&(r1>=0)){pr++;}
if((((r2/100)-Math.trunc(r2/100))==0)&&(r2>=0)){pr++;}
if((((r3/350)-Math.trunc(r3/350))==0)&&(r2>=0)){pr++;}

if((r1==0)&&(r2==0)&&(r3==0)) {
alert("Заполните поля!");}

else if(pr!=3) {
alert("Некоректные данные!");}

else {
document.getElementById('kol2').value=r1;
document.getElementById('nos2').value=r2;
document.getElementById('fut2').value=r3;

r=r1+r2+r3;
if (r>=1000){sc=5;}
else if (r>=500){sc=3;}
else {sc=0;}
r=r/(100)*(100-sc);

document.getElementById('skid').value=sc;
document.getElementById('vsego').value=Math.trunc(r);
document.getElementById('cop').value=((r-Math.trunc(r))*100).toFixed(0);
	}
}

function clean(){
document.getElementById('kol1').value=0;
document.getElementById('kol2').value="";
document.getElementById('nos1').value=0;
document.getElementById('nos2').value="";
document.getElementById('fut1').value=0;
document.getElementById('fut2').value="";
document.getElementById('skid').value="";
document.getElementById('vsego').value="";
document.getElementById('cop').value="";
}