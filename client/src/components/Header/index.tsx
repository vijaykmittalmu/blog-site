import React from "react";
import * as COMMON from "../common";
import NavigationBar from "./NavigationBar";
import { BiSearchAlt } from "react-icons/bi";
import { CMS } from "../../services/config";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <section className="inline-container padding-0 border-bottom">
        <section className="title">
          <p>Blog</p>
        </section>
        <section className="inline-wrapper">
          <section className="inline-auth-section search">
            <COMMON.InputType
              type="search"
              name="Search"
              placeholder="Search..."
              classes={["search-type"]}
            />
            <COMMON.Button
              type="withImageTitle"
              btnClasses={["btnTransparent btnAlignment"]}
            >
              <BiSearchAlt size={25} />
            </COMMON.Button>
          </section>
          <COMMON.Button
            type="outline"
            btnClasses={["outline"]}
            btnTitle={CMS.LOGIN}
          />
        </section>
      </section>
      <section className="navigations">
        <NavigationBar />
      </section>
    </header>
  );
};

export default Header;
