import React from "react";
import "./settings.css";
import ReactSlider from "react-slider";

function Settings() {
  return (
    <div className="settings">
      <div className="flex">
        <div className="all-in-wrapper">
          <div className="action">all in</div>
          <div className="budget">1500$</div>
        </div>

        <div className="actions-wrapper">
          <div className="flex wrap-first-line">
            <div className="text fold">fold</div>
            <div className="">
              <div className="text call">call</div>
              <div className="call-number">2550</div>
            </div>

            <div className="">
              <div className="text raise">raise to</div>
              <div className="raise-number">2550</div>
            </div>
          </div>
          <div className="flex wrap-secound-line">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={[0]}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
              pearling
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
