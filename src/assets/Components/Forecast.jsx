import React from "react";

const Forecast = ({ forecastWeather, location }) => {
  return (
    <div className="container mt-5 text-center">
      <h3>
        Forecast weather of {location.name},{location.region}
      </h3>
      {forecastWeather.forecastday.map((data, index) => {
        return (
          <div
            className="accordion accordion-flush mt-4"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div class="p-2">{data.date}</div>
                    <div class="p-2">
                      <img src={data.day.condition.icon} />
                    </div>
                    <div class="p-2">{data.day.condition.text}</div>
                    <div class="p-2">Min temp: {data.day.mintemp_c}c</div>
                    <div class="p-2">Max temp: {data.day.maxtemp_c}c</div>
                  </div>
                </button>
              </h2>
              <div
                id={`${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map((data) => {
                    return (
                      <>
                        {data.time}
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            style={{ width: `${data.temp_c}%` }}
                          >
                            {`${data.temp_c}%`}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
