import React from "react";
// import customAxios from "customAxios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Back() {
  function loadItem() {
    return fetch("/temp")
      .then((response) => response.json())
      .then((json) => json.id);
  }
  loadItem().then((temperature) => {
    console.log(temperature);
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="Back">
        <header className="Back-header">
          <h1 className="App-title1">zz</h1>
        </header>
      </div>
    </DashboardLayout>
  );
}

export default Back;
