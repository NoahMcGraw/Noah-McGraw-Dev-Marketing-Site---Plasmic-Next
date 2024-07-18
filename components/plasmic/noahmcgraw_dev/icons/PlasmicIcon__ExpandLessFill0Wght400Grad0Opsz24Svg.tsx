// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandLessFill0Wght400Grad0Opsz24SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ExpandLessFill0Wght400Grad0Opsz24SvgIcon(
  props: ExpandLessFill0Wght400Grad0Opsz24SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M7.4 15.375l-1.4-1.4 6-6 6 6-1.4 1.4-4.6-4.6z"}></path>
    </svg>
  );
}

export default ExpandLessFill0Wght400Grad0Opsz24SvgIcon;
/* prettier-ignore-end */
