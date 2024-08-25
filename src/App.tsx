import { useGeolocated } from "react-geolocated";
import "./App.css";

function App() {
  const { coords } = useGeolocated({
    positionOptions: { enableHighAccuracy: true },
    watchPosition: true,
    watchLocationPermissionChange: true,
  });

  const openMap = () => {
    window.open(
      `https://www.google.com/maps/search/${coords?.latitude},${coords?.longitude}`
    );
  };

  return (
    <div>
      <p>latitude: {coords?.latitude}</p>
      <p>longitude: {coords?.longitude}</p>
      <button type="button" onClick={openMap}>
        map
      </button>
    </div>
  );
}

export default App;
