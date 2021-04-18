import React from "react";
import { Row, Col } from "antd";

const Home = () => {
  return (
    <Row justify="center" align="middle">
      <Col style={styles.topPad}></Col>
      <Col style={styles.main}>
        <Row>
          <Col offset={1} span={22} style={styles.screen}></Col>
        </Row>
        <Row gutter={[0, 0]}>
          <Col offset={1} span={15} style={styles.numbers}></Col>
          <Col offset={1} span={6} style={styles.operators}></Col>
        </Row>
      </Col>
    </Row>
  );
};

const styles = {
  main: {
    width: "500px",
    height: "600px",
    background: "rgba(0,0,0,.05)",
  },
  topPad: {
    width: "100%",
    height: "100px",
  },
  screen: {
    height: "100px",
    marginTop: "32px",
    background: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
  numbers: {
    height: "400px",
    marginTop: "32px",
    background: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
  operators: {
    height: "400px",
    marginTop: "32px",
    background: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
};

export default Home;
