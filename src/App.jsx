import { useContext, useEffect, useState } from "react";
import "./App.css";
import Combine from "./components/Combine/Combine";
import { CONTEXT } from "./misc/Context";
import Notification from "./components/NotificationError/Notification";

function App() {
  const { settingUpWeatherData, searchValue, notification } = useContext(CONTEXT);
  useEffect(() => {
    settingUpWeatherData("berlin");
  }, []);

  return (
    <>
        <Combine />
        {notification && <Notification city={searchValue?.value} />}
    </>
  );
}

export default App;
