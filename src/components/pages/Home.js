import React from "react";
import { Row, Col, Space } from "antd";
import { Btn } from "../buttons";

const Home = () => {
  return (
    <Row justify="center" align="middle">
      <Col style={styles.topPad}></Col>
      <Col style={styles.main}>
        <Row>
          <Col offset={1} span={22} style={styles.screen}>
            <div style={styles.insideScreen}>12312312312</div>
          </Col>
        </Row>
        <Row>
          <Col offset={1} span={15} style={styles.numbers}>
            <Row gutter={[40, 64]} style={styles.numberRow}>
              <Col span={8}>
                <Btn text={7} />
              </Col>
              <Col span={8}>
                <Btn text={8} />
              </Col>
              <Col span={8}>
                <Btn text={9} />
              </Col>

              <Col span={8}>
                <Btn text={4} />
              </Col>
              <Col span={8}>
                <Btn text={5} />
              </Col>
              <Col span={8}>
                <Btn text={6} />
              </Col>

              <Col span={8}>
                <Btn text={1} />
              </Col>
              <Col span={8}>
                <Btn text={2} />
              </Col>
              <Col span={8}>
                <Btn text={3} />
              </Col>

              <Col span={8}>
                <Btn text={"0"} />
              </Col>
              <Col span={8}>
                <Btn text={"."} />
              </Col>
              <Col span={8}>
                <Btn text={"="} />
              </Col>
            </Row>
          </Col>
          <Col offset={1} span={6} style={styles.operators}>
            <Row gutter={[40, 64]} style={styles.operatorRow}>
              <Col span={24}>
                <Btn text={"/"} />
              </Col>

              <Col span={24}>
                <Btn text={"x"} />
              </Col>

              <Col span={24}>
                <Btn text={"-"} />
              </Col>

              <Col span={24}>
                <Btn text={"+"} />
              </Col>
            </Row>
          </Col>
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
  numberRow: {
    padding: "24px",
  },
  operatorRow: {
    paddingTop: "24px",
    paddingLeft: "38px",
  },
  insideScreen: {
    height: "80px",
    marginLeft: "16px",
    marginRight: "16px",
    marginTop: "10px",
    background: "rgba(0,0,0,.2)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "16px",
    fontSize: "32px",
  },
};

export default Home;
