function initMap() {
  // Create a map centered at a specific location
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // Adjust the latitude and longitude as needed
    zoom: 12, // Adjust the zoom level as needed
  });

  // Define an array of marker locations with their titles and icons
  const markerLocations = [
    {
      position: { lat: 37.7749, lng: -122.4194 }, // Adjust the latitude and longitude as needed
      title: "Marker 1",
      icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    },
    {
      position: { lat: 37.7831, lng: -122.4039 }, // Adjust the latitude and longitude as needed
      title: "Marker 2",
      icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    },
    {
      position: { lat: 37.7913, lng: -122.4358 }, // Adjust the latitude and longitude as needed
      title: "Marker 3",
      icon: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    },
  ];

  // Loop through the markerLocations array and add markers to the map
  markerLocations.forEach(function (location) {
    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title,
      icon: location.icon,
    });

    // Create an info window for each marker
    const infoWindow = new google.maps.InfoWindow({
      content: location.title, // Set the content of the info window to the marker's title
    });

    // Open the info window when the marker is clicked
    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
}

// Call the initMap function to initialize the map
initMap();
