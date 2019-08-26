import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgs: [] };
  }
  getImages() {
    let arr = [];
    for (let index = 1; index < 10; index++) {
      arr.push(<img src={"imgs/menus/" + index + ".jpeg"} />);
    }
    return arr;
  }
  render() {
    return <Wrapper>{this.getImages()}</Wrapper>;
  }
}

const Wrapper = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  img {
    height: 100%;
    width: 100%;
  }
`;
