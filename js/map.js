

        function initMap(){

            // Map options
            var options = {
                zoom:5,
                styles: mapStyle
            }
                
           
            var map = new google.maps.Map(document.getElementById('map'), {
                    options,
                    center:{lat:-26.782387, lng:118.607513},
                    gestureHandling: 'greedy'               
                    });

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

  /*          function myFunction(x) {
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
            
            var x = window.matchMedia("(max-width: 700px)")
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction) // Attach listener function on state changes
*/
        }

    

