// import axios from "axios";
import axios from "axios";
import MDBox from "components/MDBox";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const API_KEY = "11f51a135860cbff7041b080fabf611f";

function Weather() {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${state.center.lat}&lon=${state.center.lng}&appid=${API_KEY}`
            )
            .then((res) => {
              console.log(`You live in ${state.center.lat} and ${state.center.lng}`);
              console.log(
                `온도 : ${Math.round(res.data.main.temp - 273.15)}, 날씨 : ${
                  res.data.weather[0].main
                }`
              );
              setTemp(Math.round(res.data.main.temp - 273.15));
              setWeather(res.data.weather[0].main);
            });
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox> 위도 : {state.center.lat}</MDBox>
      <MDBox> 경도 : {state.center.lng}</MDBox>
      <MDBox> 온도 : {temp}℃</MDBox>
      <MDBox> 날씨 : {weather}</MDBox>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "현재 위치"}
            </div>
          </MapMarker>
        )}
      </Map>
      <Footer />
    </DashboardLayout>
  );
}

export default Weather;
