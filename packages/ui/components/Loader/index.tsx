import React from "react";

export interface LoaderType {
  size?: number | string;
  type?: "circle" | "dots" | "custom";
  el?: JSX.Element;
}

const Loader = ({ size, el, type = "circle" }: LoaderType) => {
  return <div>Loader</div>;
};

export default Loader;
