
function initMap() {

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var options = {
        zoom: zoomIn,
        styles: mapStyle,
        center: mapCentre,
        gestureHandling: 'greedy'
    }
                                  
    var map = new google.maps.Map(document.getElementById('map'), {
            options               
            });
   
    directionsDisplay.setMap(map);

    directionsDisplay.setPanel(document.getElementById('right-panel'));

    setMarkers(map);

    var goThere = function () {calcRoute(directionsService, directionsDisplay);};

    var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', goThere, false);


  }
  
  function calcRoute(directionsService, directionsDisplay) { 

    var journeyStart = document.getElementById('start').value;
    var journeyEnd = document.getElementById('end').value;
    //console.log(journeyStart);
   //console.log(journeyEnd);
    var request = {
      origin: journeyStart,
      destination: journeyEnd,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
      else {
        window.alert('Directions request failed due to ' + status);
      }

    });
  }



//FUNCTION TO SET ICONS AND INFO WINDOW
        function setMarkers(map){
                        // LOOP THROUGH ARRAY ADDING MARKERS
                        for(var i = 0;i < markers.length;i++){
                            // Add marker
                            addMarker(markers[i]);
                        }     
            
                        //ADD MARKER FUNCTION
                        function addMarker(props){
            
                            var marker = new google.maps.Marker({
                            position:props.coords,
                            map:map,
                            icon:props.iconImage,
                            });
            
                            //CREATE INFO WINDOW FOR MARKER
                            var infoWindow = new google.maps.InfoWindow({
                            content:props.content
                            });
            
                            //ALLOW WINDOW TO APPEAR ON MOUSECLICK
                            marker.addListener('click', function(){
                            infoWindow.open(map, marker);
                            });
                        }
        }


//FUNCTION TO SET MEDIA QUERY
    /*   function screenSize(){

            var x = window.matchMedia("(max-width: 700px)")
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction) // Attach listener function on state changes

            function myFunction(x) {
                if (x.matches) { // If media query matches
                    var map = new google.maps.Map(document.getElementById('map'), {
                    options,
                    center:{lat:-27.782387, lng:117.8605},                
                    });
         
                } else {
                    var map = new google.maps.Map(document.getElementById('map'), {
                    options,
                    center:{lat:-27.782387, lng:128.607513},                
                    });
                }  
            } 
        } */



 

        

        
