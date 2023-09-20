function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function IconSlider(props, svgRef) {
    return /*#__PURE__*/React.createElement("svg", _extends({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        focusable: false,
        ref: svgRef
    }, props), /*#__PURE__*/React.createElement("rect", {
        x: 5,
        y: 4,
        width: 17,
        height: 2,
        rx: 1,
        fill: "#AAB2BF"
    }), /*#__PURE__*/React.createElement("rect", {
        x: 2,
        y: 11,
        width: 18,
        height: 2,
        rx: 1,
        fill: "#4CC3FA"
    }), /*#__PURE__*/React.createElement("rect", {
        x: 5,
        y: 18,
        width: 17,
        height: 2,
        rx: 1,
        fill: "#AAB2BF"
    }), /*#__PURE__*/React.createElement("circle", {
        cx: 5.5,
        cy: 5,
        r: 3.5,
        fill: "#DDE3E8"
    }), /*#__PURE__*/React.createElement("circle", {
        cx: 18.5,
        cy: 12,
        r: 3.5,
        fill: "#DDE3E8"
    }), /*#__PURE__*/React.createElement("circle", {
        cx: 5.5,
        cy: 19,
        r: 3.5,
        fill: "#DDE3E8"
    }));
}

const ForwardRef = /*#__PURE__*/React.forwardRef(IconSlider);
export default ForwardRef;