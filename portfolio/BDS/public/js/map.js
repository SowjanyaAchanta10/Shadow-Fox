// Map variables
let map;
let userMarker;
let centerMarkers = [];
let infoWindow;

// Initialize the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Default to India center
        zoom: 5,
    });
    
    infoWindow = new google.maps.InfoWindow();
    
    // Event listeners for buttons
    document.getElementById('findLocation').addEventListener('click', findNearbyCenters);
    document.getElementById('showAllCenters').addEventListener('click', showAllCenters);
}

// Find centers near user's location
async function findNearbyCenters() {
    if (navigator.geolocation) {
        document.getElementById('status').textContent = "Finding your location...";
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                
                document.getElementById('status').textContent = Found your location (${userLat.toFixed(4)}, ${userLng.toFixed(4)});
                
                // Center map on user's location
                const userLocation = new google.maps.LatLng(userLat, userLng);
                map.setCenter(userLocation);
                map.setZoom(13);
                
                // Add user marker
                if (userMarker) userMarker.setMap(null);
                userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Your Location",
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                });
                
                // Call Firebase Function to find nearby centers
                try {
                    const findNearby = firebase.functions().httpsCallable('findNearbyCenters');
                    const response = await findNearby({
                        latitude: userLat,
                        longitude: userLng,
                        radius: 10 // in km
                    });
                    
                    displayCenters(response.data, userLat, userLng);
                } catch (error) {
                    console.error("Error finding centers:", error);
                    document.getElementById('status').textContent = "Error finding centers. Please try again.";
                }
            },
            (error) => {
                let errorMessage = "Error getting your location: ";
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage += "Permission denied.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage += "Position unavailable.";
                        break;
                    case error.TIMEOUT:
                        errorMessage += "Request timed out.";
                        break;
                    default:
                        errorMessage += "Unknown error.";
                }
                document.getElementById('status').textContent = errorMessage;
            }
        );
    } else {
        document.getElementById('status').textContent = "Geolocation is not supported by your browser.";
    }
}

// Show all centers in database
async function showAllCenters() {
    document.getElementById('status').textContent = "Loading all centers...";
    
    try {
        const getAllCenters = firebase.functions().httpsCallable('getAllCenters');
        const response = await getAllCenters();
        
        // Default to current map center if no user location
        const center = map.getCenter();
        displayCenters(response.data, center.lat(), center.lng());
        
        document.getElementById('status').textContent = Showing all ${response.data.length} centers;
    } catch (error) {
        console.error("Error getting centers:", error);
        document.getElementById('status').textContent = "Error loading centers. Please try again.";
    }
}

// Display centers on map and list
function displayCenters(centers, userLat, userLng) {
    // Clear previous markers
    centerMarkers.forEach(marker => marker.setMap(null));
    centerMarkers = [];
    
    // Clear list
    const centersList = document.getElementById('centersList');
    centersList.innerHTML = '';
    
    // Add each center to map and list
    centers.forEach(center => {
        const centerLocation = new google.maps.LatLng(center.location.latitude, center.location.longitude);
        
        // Calculate distance if user location is provided
        let distance = '';
        if (userLat && userLng) {
            distance = calculateDistance(userLat, userLng, center.location.latitude, center.location.longitude);
            distance = ` - ${distance.toFixed(1)} km away`;
        }
        
        // Add marker
        const marker = new google.maps.Marker({
            position: centerLocation,
            map: map,
            title: center.name,
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }
        });
        
        // Add click listener for info window
        marker.addListener('click', () => {
            infoWindow.setContent(`
                <div>
                    <h3>${center.name}</h3>
                    <p>${center.address}</p>
                    <p>Phone: ${center.phone || 'Not available'}</p>
                    ${distance ? <p>Distance: ${distance.replace(' - ', '')}</p> : ''}
                </div>
            `);
            infoWindow.open(map, marker);
        });
        
        centerMarkers.push(marker);
        
        // Add to list
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${center.name}</strong>${distance}<br>
            ${center.address}<br>
            ${center.phone ? Phone: ${center.phone} : ''}
            ';
        centersList.appendChild(li);
    });
    
    // Adjust map bounds to show all markers if showing all centers
    if (!userLat || !userLng) {
        const bounds = new google.maps.LatLngBounds();
        centerMarkers.forEach(marker => bounds.extend(marker.getPosition()));
        map.fitBounds(bounds);
    }
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

// Initialize the map when window loads
window.onload = initMap;