var Calc =  function () {
  
var result = document.getElementById("result");

function Calc (elem) {
  this.lock=false;
  this.state=true;

this.value1="";
this.value2="";



this.sum =function(){
  var lets= (+this.value1+ (+this.value2)).toFixed(10);
  return delZero(lets);
};
this.minus = function(){

  var lets=(+this.value1- (+this.value2)).toFixed(10);
  return delZero(lets);
};
this.divid = function(){

 var lets=(+this.value1/(+this.value2)).toFixed(10);
 return delZero(lets);
};
 this.multi = function(){

 var lets=(+this.value1 * (+this.value2)).toFixed(10);
 return delZero(lets);

 };

 this.sgrt = function(){

var lets="" + (Math.sqrt(+result.innerHTML)).toFixed(10);
 return delZero(lets);
};

this.reset = function () {
  this.value1="";
    this.value2="";
   return "0";
};




var self=this;

document.onclick= function(event) {
var target = event.target;
var calc = target.getAttribute('data-calc');
      if (!calc) return;

   enter(target);

};


function delZero(lets) {
var arr = lets.split("");
while(arr[arr.length-1]=="0" && lets.indexOf(".")!=-1) {
  arr.pop();
}
if(arr[arr.length-1]==".") arr.pop();
return arr.join("") ;

}


function chek (elem) {
if(elem.length==1 && !self.state) {
  self.value1="";
  self.value2="";
 self.state=true;
self.lock = false;
return false;
}

if(elem!=".") return false;
if(!self.lock) {
   if(self.value1==="") {
    self.value1="0";
    return false;
}

  if(self.value1.indexOf(".")!=-1) return true;
} else if (self.lock) {

  if(self.value2==="") {
    self.value2="0";
    return false;
}
if(self.value2.indexOf(".")!=-1) return true;
}

}




function chekzero (elem) {

if(elem.length==2 &&elem[0]=="0" && elem[1]!=".") return elem[1];
return elem;
}


function revers () {

if(result.innerHTML==self.value1) {

    if(self.value1[0]=="-") {  self.value1=self.value1.substring(1);
      result.innerHTML=self.value1;
    } else {   self.value1 = "-"+self.value1;
    result.innerHTML=self.value1;
}

  } else if( result.innerHTML==self.value2) {

 if(self.value2[0]=="-") {  self.value2=self.value2.substring(1);
  result.innerHTML=self.value2;
    } else {   self.value2 = "-"+self.value2;
    result.innerHTML=self.value2;
}

  }

}


function enter (input)  {


  if(input.getAttribute('data-calc').length==1 && !self.state) {
  self.value1="";
  self.value2="";
 self.state=true;
self.lock = false;

}

   if(input.getAttribute('data-calc')=="sqrt"){
  self.value1= result.innerHTML=self.sgrt();
  self.value2="";
return;
   }

  if( chek(input.getAttribute('data-calc'))) return;

  if(input.getAttribute('data-calc')=="revers" ) {
    revers();
    return;
     }

if(input.getAttribute('data-calc')=="result") {

var result1 = self[self.lock]();
result1 = delZero(result1);
result.innerHTML=result1;
self.value1=result1;
self.value2="";
self.state=false;
self.lock=false;
return;

}


if(input.getAttribute('data-calc')=="reset" ) {
  self.lock=input.getAttribute('data-calc');
   result.innerHTML=  self[self.lock]();
   self.lock=false;
  
return;
  
}

if(input.getAttribute('data-calc').length>1 && input.getAttribute('data-calc')!="revers" && input.getAttribute('data-calc')!="sqrt" && input.getAttribute('data-calc')!="reset" && input.getAttribute('data-calc')!="result" ) {
  self.lock=input.getAttribute('data-calc') ;
  self.state=true;
  return;
}

if(!self.lock) {

self.value1 += input.getAttribute('data-calc');
self.value1 = chekzero(self.value1);
result.innerHTML=self.value1;
} else {

self.value2 += input.getAttribute('data-calc');
self.value2 = chekzero(self.value2);
result.innerHTML=self.value2;

}
}



}

new Calc (calc);

};

  
