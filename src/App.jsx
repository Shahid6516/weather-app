import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setcity] = useState("Delhi");
  const [wether, setwether] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90aa7e22a66ce62d44d8320037d8ed51&units=metric
`
      )
      .then((res) => {
        setwether(res.data);
      });
  }, [city]);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
      <div className="w-84 h-110 border rounded-xl p-5">
        <input
          className="border py-2 px-4 w-full rounded-xl"
          type="text"
          placeholder=" Search Your city..."
          onChange={(e) => setcity(e.target.value)}
        />
        <div className=" w-full flex items-center justify-center mt-5 rounded-xl ">
          {/* <img src="" alt="" /> */}
          <img className="w-40"
            src={`https://openweathermap.org/img/wn/${wether?.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>

        <h3 className="text-7xl mt-2">{wether?.main?.temp} &deg;C</h3>
        <p className="text-xl mt-2">{wether?.weather?.[0]?.description}</p>
        <h1 className="mt-2 text-xl">{wether?.name}</h1>

      </div>
    </div>
  );
};

export default App;
