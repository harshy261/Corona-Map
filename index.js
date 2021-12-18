function updateMap() {
    console.log("Updating map with realtime");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if(cases<50){
                    colorp = "rgb(0, 153, 255)";
                }
                else if(cases> 50 && cases<150){
                    colorp = "rgb(204, 204, 0)";
                }
                else if(cases> 150 && cases<255){
                    colorp = "rgb(255, 102, 0)";
                }
                else{
                    colorp = "rgb(255, 0, 0)";
                }

                // MARK ON THE MAP
                
                 new mapboxgl.Marker({color:colorp })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}


let interval = 20000;
setInterval( updateMap, interval);
