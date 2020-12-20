function rasch()
{
var r1,r2,r3,r,sc,pr=0;

r1=kol1.value*120;
r2=nos1.value*100;
r3=fut1.value*350;

if((((r1/120)-Math.trunc(r1/120))==0)&&(r1>=0)){pr++;}
if((((r2/100)-Math.trunc(r2/100))==0)&&(r2>=0)){pr++;}
if((((r3/350)-Math.trunc(r3/350))==0)&&(r2>=0)){pr++;}

if((r1==0)&&(r2==0)&&(r3==0)) {
alert("Заполните поля!");}

else if(pr!=3) {
alert("Некоректные данные!");}

else {
kol2.value=r1;
nos2.value=r2;
fut2.value=r3;

r=r1+r2+r3;
if (r>=1000){sc=5;}
else if (r>=500){sc=3;}
else {sc=0;}
r=r/(100)*(100-sc);

skid.value=sc;
vsego.value=Math.trunc(r);
cop.value=((r-Math.trunc(r))*100).toFixed(0);
	}
}

function clean(){
kol1.value=0;
kol2.value="";
nos1.value=0;
nos2.value="";
fut1.value=0;
fut2.value="";
skid.value="";
vsego.value="";
cop.value="";
}