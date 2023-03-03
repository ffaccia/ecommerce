import { css } from "styled-components";
import { dim, device } from "./data/settings";

console.log("dim vale ", dim.mobile_width);
var width_mobile = dim.mobile_width+"px"
var width_tablet = dim.tablet_width+"px"
console.log("inside responsive ",width_mobile, width_tablet)

export const mobile = (props) => {
  return css`
    @media only screen and ${device.mobileM} {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and ${device.tablet} {
      ${props}
    }
  `;
};
