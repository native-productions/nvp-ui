import { Button } from "ui";
import "./styles.css";

/**
 * Primary UI component for user interaction
 */
Button.defaultProps = {
  title: "Hello world",
  onClick: () => alert("hello world"),
};
