import React from "react";
import "./settings.css";
import ReactSlider from "react-slider";

function Settings(props) {
  return (
    <div className="settings">
      <div className="flex">
        <div className="all-in-wrapper">
          <div className="action" onClick={props.allIn}>
            all in
          </div>
          <div className="budget">1500$</div>
        </div>

        <div className="actions-wrapper">
          <div className="flex wrap-first-line">
            <div className="text fold" onClick={props.fold}>
              fold
            </div>
            <div className="">
              <div className="text call" onClick={props.call}>
                call
              </div>
              <div className="call-number">{props.player1.bid}</div>
            </div>

            <div className="">
              <div className="text raise" onClick={props.raise}>
                raise to
              </div>
              <div className="raise-number"></div>
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
