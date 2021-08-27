import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleMapReact from "google-map-react";

const defaultProps = {
  center: {
    lat: 8.490206,
    lng: 4.514399,
  },
  zoom: 14,
};

const AnyReactComponent = ({ text }: any) => (
  <div
    style={{
      color: "white",
      background: "#D32F2F",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

//  "AIzaSyDasOgk62PrCSNmPhCP4PGui8xziYe1B6M"
function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyADqP-igAGk41qJ-cqfKDoPyQus1ocVvUg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={8.490206}
          lng={4.514399}
          text="Deposition of Whatever"
        />
      </GoogleMapReact>
    </div>
  );
}

export default App;
// 8.490206, 4.514399
