
var x= document.getElementById("geoLocationId");
var y=document.getElementById("Far")
var z=document.getElementById("Cel")
var c=document.getElementById("City")
//Gets the viewers latitude and longitude
function getLocation() {
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  x.innerHTML="Geolocation is not supported by this browser.";
}
}

//Displays Location in HTML
function showPosition (position){
  console.log(position);
 
  x.innerHTML="Latittude: " + position.coords.latitude + " Longitude: "+ position.coords.longitude;


  //Weather in F
  $.ajax({
  url : "https://api.wunderground.com/api/43e282725b9ebc9f/conditions/q/"+position.coords.latitude+","+position.coords.longitude+".json",
  dataType : "jsonp",
  success : function(parsed_json) {
    //Test to see if the website is firing
    console.log("hello world")
    //Weather in F
  var temp_f = parsed_json['current_observation']['temp_f'];
  console.log("Test F " + temp_f); 
    y.innerHTML="Currently it is " + temp_f +" F"; 
    
    //Weather in C
    var temp_c = parsed_json['current_observation']['temp_c'];
  console.log("Test C " + temp_c); 
    z.innerHTML="Currently it is " + temp_c +" C";    
    //City and State
   var city=parsed_json['current_observation']['display_location']['full'];
    console.log(city);
    c.innerHTML="You are currently in "+ city;  
  }
  });
}

//Switch betwen Far and Cel
function switchVisible() {
            if (document.getElementById('Far')) 
            {
if (document.getElementById('Far').style.display == 'none') {         document.getElementById('Far').style.display = 'block';
    document.getElementById('Cel').style.display = 'none';
                }
else {
    document.getElementById('Far').style.display = 'none';
    document.getElementById('Cel').style.display = 'block';
                }
            }
}