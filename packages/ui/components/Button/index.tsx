/* eslint-disable react/display-name */
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  Fragment,
  ReactNode,
  useMemo,
} from "react";

type StylesType<T> = {
  custom: T;
  primary: T;
  outlined: T;
};

const defaultStyles: StylesType<CSSProperties> = {
  custom: {},
  primary: {},
  outlined: {},
};

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  isLoading?: boolean;
  variants?: "primary" | "outlined" | "custom";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  (props, _ref) => {
    const { title, endIcon, startIcon, variants, isLoading, ...rest } = props;

    const computedStyle = useMemo(() => {
      const computeStyle = (v: typeof variants) => {
        return v === "primary"
          ? defaultStyles.primary
          : v === "outlined"
          ? defaultStyles.outlined
          : defaultStyles.custom;
      };

      return computeStyle(variants);
    }, []);

    return (
      <button
        {...rest}
        ref={_ref}
        style={computedStyle ?? rest.style}
        disabled={isLoading ?? rest.disabled}
      >
        <Fragment>{startIcon}</Fragment>
        <Fragment>{title}</Fragment>
        <Fragment>{endIcon}</Fragment>
      </button>
    );
  }
);
