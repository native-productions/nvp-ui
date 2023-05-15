/* eslint-disable react/display-name */
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  Fragment,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import useTheme from "../../hooks/useTheme";
import { Loader } from "../Loader";

type StylesType<T> = {
  basic: T;
  custom: T;
  outlined: T;
};

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  isLoading?: boolean;
  customStyle?: CSSProperties;
  variants?: "basic" | "outlined" | "custom";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  (props, _ref) => {
    const {
      title,
      endIcon,
      startIcon,
      variants = "basic",
      isLoading = false,
      customStyle = null,
      ...rest
    } = props;

    const [loaderSize, setLoaderSize] = useState(0);

    const btnref = useRef(null);
    const { palletes, colorScheme } = useTheme();

    const defaultStyles: StylesType<CSSProperties> = {
      basic: {
        color: "white",
        display: "flex",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.3rem 0.7rem 0.3rem 0.7rem",
        backgroundColor: palletes[colorScheme].primary,
      },
      outlined: {
        display: "flex",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.3rem 0.7rem 0.3rem 0.7rem",
        color: palletes[colorScheme].primary,
        outline: `2px solid ${palletes[colorScheme].primary}`,
      },
      custom: {},
    };

    const computeStyle = (v: typeof variants) => {
      return v === "basic"
        ? { ...defaultStyles.basic, ...customStyle, ...rest.style }
        : v === "outlined"
        ? { ...defaultStyles.outlined, ...customStyle, ...rest.style }
        : customStyle;
    };

    useEffect(() => {
      if (btnref) {
        setLoaderSize(btnref.current.clientHeight / 1.7);
      }
    }, [btnref]);

    if (variants === "custom" && customStyle === null) {
      throw new Error(
        `customStyle property is not provided. 
         <Button 
           variants='custom' 
           customStyle={/*CSSProperties*/} 
         />`
      );
    }

    return (
      <button
        {...rest}
        ref={_ref ?? btnref}
        style={computeStyle(variants)}
        disabled={isLoading ?? rest.disabled}
        className={`nvp-button ${rest.className}`}
      >
        {!isLoading && (
          <>
            <Fragment>{startIcon}</Fragment>
            <Fragment>{title}</Fragment>
            <Fragment>{endIcon}</Fragment>
          </>
        )}
        {!!isLoading && (
          <Loader
            type="circle"
            color={palletes[colorScheme].secondary}
            size={loaderSize}
          />
        )}
      </button>
    );
  }
);

Button.defaultProps = {
  variants: "basic",
};
