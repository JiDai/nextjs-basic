import MapboxMap from "react-mapbox-wrapper";

export default function SimpleMap() {
  return (
    <div style={{ height: 400, width: 400 }}>
      <MapboxMap
        accessToken="pk.eyJ1IjoibWVpbGxldXJzYWdlbnRzIiwiYSI6ImNqMWV5YnRpMDAwMHkyeXRnd3JkdXRiaDEifQ.emcFsn3Ox6WcKmOHhbTOPQ"
        coordinates={{ lat: 48.872198, lng: 2.3366308 }}
      />
    </div>
  );
}
