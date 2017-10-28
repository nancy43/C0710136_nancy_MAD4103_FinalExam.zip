$( window ).on( "orientationchange", function( event ) {
   
      var time = 1000;
   
   navigator.vibrate(time);
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
      image.style.display = 'block';
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 

});
 
// You can also manually force this event to fire.
$( window ).orientationchange();