import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container text-center ">
      <h3>
        Current weather of {location.name},{location.region}
      </h3>
      <div className="row mt-5">
        {/* col-1 */}
        <div className="col-3">
          <div className="card">
            <img
              src={currentWeather.condition.icon}
              className="card-img-top"
              style={{ width: "60px", height: "60px" }}
            />
            <h5 className="card-title">{currentWeather.condition.text} </h5>
          </div>
        </div>
        {/* col-2 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Temp(in c):{currentWeather.temp_c} </h5>
            </div>
          </div>
        </div>
        {/* col-3 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Temp(in f):{currentWeather.temp_f} </h5>
            </div>
          </div>
        </div>
        {/* col-4 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Humidity:{currentWeather.humidity} </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        {/* col-1 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Wind degree:{currentWeather.wind_degree}{" "}
              </h5>
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wind dir:{currentWeather.wind_dir} </h5>
            </div>
          </div>
        </div>
        {/* col-3 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Wind speed(kph):{currentWeather.wind_kph}{" "}
              </h5>
            </div>
          </div>
        </div>
        {/* col-4 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Wind speed(mph):{currentWeather.wind_mph}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
