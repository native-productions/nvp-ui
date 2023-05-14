/* eslint-disable react/display-name */
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  Fragment,
  ReactNode,
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

    const { palletes } = useTheme();

    const defaultStyles: StylesType<CSSProperties> = {
      basic: {
        color: "white",
        padding: "0.3rem 0.7rem 0.3rem 0.7rem",
        borderRadius: "5px",
        backgroundColor: palletes.light.primary,
      },
      outlined: {
        padding: "0.3rem 0.7rem 0.3rem 0.7rem",
        borderRadius: "5px",
        outline: `2px solid ${palletes.light.primary}`,
        color: palletes.light.primary,
      },
      custom: {},
    };

    const computeStyle = (v: typeof variants) => {
      return v === "basic"
        ? { ...defaultStyles.basic, ...customStyle }
        : v === "outlined"
        ? { ...defaultStyles.outlined, ...customStyle }
        : customStyle;
    };

    return (
      <button
        {...rest}
        ref={_ref}
        style={computeStyle(variants)}
        disabled={isLoading ?? rest.disabled}
      >
        {!isLoading && (
          <>
            <Fragment>{startIcon}</Fragment>
            <Fragment>{title}</Fragment>
            <Fragment>{endIcon}</Fragment>
          </>
        )}
        {!!isLoading && <Loader type="circle" size={20} />}
      </button>
    );
  }
);

Button.defaultProps = {
  variants: "basic",
};
