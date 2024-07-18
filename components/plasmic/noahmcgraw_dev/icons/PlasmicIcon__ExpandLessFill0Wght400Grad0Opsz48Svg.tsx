// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandLessFill0Wght400Grad0Opsz48SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ExpandLessFill0Wght400Grad0Opsz48SvgIcon(
  props: ExpandLessFill0Wght400Grad0Opsz48SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M14.15 30.75L12 28.6l12-12 12 11.95-2.15 2.15L24 20.85z"}
      ></path>
    </svg>
  );
}

export default ExpandLessFill0Wght400Grad0Opsz48SvgIcon;
/* prettier-ignore-end */
