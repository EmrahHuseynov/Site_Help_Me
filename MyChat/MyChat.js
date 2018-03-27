var openchat=document.querySelector(".chatpanel");
var livechat=document.querySelector(".livechat");
var metn=document.querySelector(".type");
var sendicon=document.querySelector(".fa-send");
var chatbody=document.querySelector(".chatbody");
var close=document.querySelector(".fa-close");
var mesajlar=document.querySelectorAll(".mesajlar");
var sil=document.querySelector(".fa-trash");



openchat.addEventListener("click",function(){
   if( livechat.style.display!="block"){
        livechat.style.display="block";
   }else{
        livechat.style.display="none";
   }
})

close.addEventListener("click",function(){
    livechat.style.display="none";
})


sendicon.addEventListener("click",function(){
sendmessaje();
    
})
document.addEventListener("keydown",function(e){
    if(e.keyCode==13){
        sendmessaje();
    }
})



function sendmessaje(){
     var mesaj=metn.value;
   if(mesaj[0]==mesaj[0].toUpperCase()){
       var girlmessaje=document.createElement("div");
       girlmessaje.classList.add("girlside");
       girlmessaje.classList.add("mesajlar");
       chatbody.appendChild(girlmessaje);
       var girlimg=document.createElement("div");
       girlimg.classList.add("girlimg");
       girlmessaje.appendChild(girlimg);
       var girlp=document.createElement("p");
       girlp.innerHTML=mesaj;
       girlmessaje.appendChild(girlp);
       girlmessaje.addEventListener("click",function(){
              if(this.classList.contains("selected")){
                 
                 this.classList.remove("selected");
                
              }
           else{
               
                  this.classList.add("selected");
           }
           
           
       })
     
   }else{
       var boymessaje=document.createElement("div");
       boymessaje.classList.add("boyside");
       boymessaje.classList.add("mesajlar");
       chatbody.appendChild(boymessaje);
      var boyimg=document.createElement("div");
      boyimg.classList.add("boyimg");
      boymessaje.appendChild(boyimg);
       var boyp=document.createElement("p");
       boyp.innerHTML=mesaj;
       boymessaje.appendChild(boyp);
       boymessaje.addEventListener("click",function(){
          if(this.classList.contains("selected")){
                 
                 this.classList.remove("selected");
                
              }
           else{
               
                  this.classList.add("selected");
           }
           
           
       })
       
   }
    
    metn.value="";
}

function sildir(){
     var silinecekler=document.querySelectorAll(".selected");
     for(var i=0;i<silinecekler.length;i++){
     silinecekler[i].remove();
       }
    
}

sil.addEventListener("click",function(){
   sildir();
    
    
})


document.addEventListener("keydown",function(e){
    if(e.keyCode==46){
     sildir();   
    }
})














//for(var i=0;i<mesajlar.length;i++){
//    mesajlar[i].addEventListener("click",function(){
//     alert();    })
//    
//                                                                 """Islemedi"""
//    
//    
//}






