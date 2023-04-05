import Header from "./header";
import Footer from "./footer";
import React from "react";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
