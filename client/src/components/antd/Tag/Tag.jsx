import React from "react";
import "./Tag.scss";
import { Tag } from "antd";

const $Tag = ({ colors, tag, isPO = false }) => {
  // console.log(aa);
  let colorSplit = tag.split(" ");
  const color = (s, v) => {
    console.log(s);
    if (v === "Revoked") {
      return "volcano";
    } else if (v === "PO Issued" && isPO == true) {
      return "blue";
    } else {
      switch (s) {
        case "Reject":
          return "#FF00008B";

        case "Pending":
          return "blue";

        case "Use":
          return "blue";

        default:
          return "green";
      }
    }
  };
  // let color =
  //   colorSplit[colorSplit.length - 1] === "Rejected" ? "volcano" : "green";
  return (
    <>
      <Tag color={colors} key={tag}>
        {tag}
      </Tag>
    </>
  );
};

export default $Tag;
