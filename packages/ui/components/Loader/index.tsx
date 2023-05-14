/* eslint-disable react/display-name */
import "./loader.css";

import React from "react";

export interface LoaderType {
  size?: number;
  type?: "circle" | "dots" | "custom";
  el?: JSX.Element;
}

export const Loader = React.forwardRef<HTMLDivElement, LoaderType>(
  (props, _ref) => {
    const { size, el, type = "circle" } = props;

    console.log(size, el, type);

    return (
      <div ref={_ref}>
        <svg
          className={`nvp-loader-${type}`}
          style={{ transform: `scale(${size / 30})` }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="33.625"
          height="33.65625"
          id="svg9613"
        >
          <defs id="defs9615" />
          <g transform="translate(-333.1875,-515.53125)" id="layer1">
            <path
              d="m 349.97795,515.77746 c -9.15653,0 -16.54062,7.42819 -16.54062,16.58472 0,9.15653 7.38409,16.58472 16.54062,16.58472 9.15653,0 16.58472,-7.42819 16.58472,-16.58472 0,-9.15653 -7.42819,-16.58472 -16.58472,-16.58472 z m 0,4.10207 c 6.88691,0 12.48265,5.59574 12.48265,12.48265 0,6.88691 -5.59574,12.43854 -12.48265,12.43854 -6.88692,0 -12.43854,-5.55163 -12.43854,-12.43854 0,-6.88691 5.55162,-12.48265 12.43854,-12.48265 z"
              id="path15290-7-0-9-5-1-59-0-3-2"
              style={
                {
                  color: "#000000",
                  fill: "#000000",
                  fillOpacity: 0.08333333,
                  fillRule: "nonzero",
                  stroke: "#565656",
                  strokeWidth: "0.5",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: "4",
                  strokeOpacity: "0.19607843",
                  strokeDasharray: "none",
                  strokeDashoffset: "0",
                  marker: "none",
                  visibility: "visible",
                  display: "inline",
                  overflow: "visible",
                  "enable-background": "accumulate",
                } as any
              }
            />
            <path
              d="m 476.58997,1097.2634 c 0,15.522 -10.4255,29.1088 -25.41856,33.1261"
              transform="matrix(0.42314442,0,0,0.42314442,162.84247,68.046643)"
              id="path15290-6-0-6-1-0-0-16-1-0-06"
              style={
                {
                  color: "#000000",
                  fill: "none",
                  stroke: "#3366bb",
                  strokeWidth: 8.33705616,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  strokeOpacity: 1,
                  strokeDashoffset: 0,
                  marker: "none",
                  visibility: "visible",
                  display: "inline",
                  overflow: "visible",
                  enableBackground: "accumulate",
                } as any
              }
            />
          </g>
        </svg>
      </div>
    );
  }
);

Loader.defaultProps = {
  size: 20,
  el: null,
  type: "circle",
};
