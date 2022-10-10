import React from "react";
import { CMS } from "../../../services/config";

const NavigationBar = () => {
  return (
    <ul>
      {CMS.NAV_LIST.map((item: string, key: number) => {
        return <li key={key}> {item}</li>;
      })}
    </ul>
  );
};

export default NavigationBar;
