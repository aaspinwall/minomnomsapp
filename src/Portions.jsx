import React from "react";
import styled from "styled-components";
import { portions } from "./data";

export default class Portions extends React.Component {
  constructor() {
    super();
    this.state = { verduras: true, cereales: true, grasas: true };
  }
  componentDidMount() {}
  render() {
    const Space = styled.div`
      margin: 70px;
    `;
    const BoxContainer = styled.div`
      margin: 1rem;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      border-radius: 20px;
      background-color: #2be18325;
      padding: 1rem;

      @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
      }
    `;
    const Box = styled.div`
      display: flex;
      padding: 0.3rem 0;
      @media screen and (min-width: 768px) {
        padding: 0 1rem;
        display: flex;
        justify-content: space-evenly;
      }
    `;
    const BoxHeader = styled(BoxContainer)`
      text-align: center;
      font-weight: bolder;
      margin-bottom: 0;
    `;
    const BoxBody = styled(BoxContainer)`
      display: ${props => (props.show ? "flex" : "none")};
      @media screen and (min-width: 768px) {
        display: ${props => (props.show ? "grid" : "none")};
        grid-template-columns: 1fr 1fr;
        text-align: justify;
      }
    `;

    const verduras = portions.verduras.map(box => {
      return (
        <div>
          <Box>{box}</Box>
        </div>
      );
    });
    const cereales = portions.cereales.map(box => {
      return (
        <div>
          <Box>{box}</Box>
        </div>
      );
    });
    const animal = portions.animal.map(box => {
      return (
        <div>
          <Box>{box}</Box>
        </div>
      );
    });
    const grasas = portions.grasas.map(box => {
      return (
        <div>
          <Box>{box}</Box>
        </div>
      );
    });
    const bebidas = portions.bebidas.map(box => {
      return (
        <div>
          <Box>{box}</Box>
        </div>
      );
    });

    return (
      <div>
        <Space />
        <BoxHeader
          onClick={() => this.setState({ verduras: !this.state.verduras })}
        >
          🥬 Verduras 🥒
        </BoxHeader>
        <BoxBody show={this.state.verduras}>{verduras}</BoxBody>
        <BoxHeader
          onClick={() => this.setState({ cereales: !this.state.cereales })}
        >
          🍚 Cereales 🍙
        </BoxHeader>
        <BoxBody show={this.state.cereales}>{cereales}</BoxBody>
        <BoxHeader
          onClick={() => this.setState({ animal: !this.state.animal })}
        >
          🍗 Origen Animal 🧀
        </BoxHeader>
        <BoxBody show={this.state.animal}>{animal}</BoxBody>
        <BoxHeader
          onClick={() => this.setState({ grasas: !this.state.grasas })}
        >
          🥑 Grasas 🥜
        </BoxHeader>
        <BoxBody show={this.state.grasas}>{grasas}</BoxBody>
        <BoxHeader
          onClick={() => this.setState({ bebidas: !this.state.bebidas })}
        >
          🥤 Bebidas ☕
        </BoxHeader>
        <BoxBody show={this.state.bebidas}>{bebidas}</BoxBody>
      </div>
    );
  }
}
