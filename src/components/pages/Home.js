import { Col, Row } from "antd";
import React, { useState } from "react";
import Queue from "../../utils/Queue";
import { Btn } from "../buttons";

const equation = new Queue();

const Home = () => {
  const [screen, setScreen] = useState("0");
  const [currentEquation, setEquation] = useState(" ");
  const [lastEquation, setLastEquation] = useState(" ");
  const [calculationDone, setCalculationDone] = useState(false);

  const handleClick = (e) => {
    const { value } = e.target;
    const characters = screen.replace(/\s/g, "");

    switch (value) {
      case "x":
      case "-":
      case "/":
      case "+":
        equation.enqueue(screen);
        equation.enqueue(value);
        setEquation(equation.print());
        setScreen("0");
        break;

      case "=":
        setCalculationDone(true);

        equation.enqueue(screen);

        const leftSide = equation.print();

        const result = equation.solve();

        setEquation(leftSide + " = " + result);
        setScreen("0");
        break;

      default:
        if (characters.length >= 9) {
          return;
        } else {
          if (screen === "0") {
            if (calculationDone) {
              setLastEquation(currentEquation);
              setScreen(value);
              setEquation(value);
              setCalculationDone(false);
            } else if (currentEquation.length > 1) {
              setScreen(value);
              setEquation(currentEquation + " " + value);
            } else {
              setScreen(value);
              setEquation(value);
            }
          } else {
            setScreen(screen + value);
            setEquation(currentEquation + value);
          }
        }
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col style={styles.topPad}></Col>
      <Col style={styles.main}>
        <Row style={styles.screen}>
          <Col offset={1} span={1} style={{ alignSelf: "center" }}>
            <Btn
              handleClick={() => {
                setScreen("0");
                setEquation(" ");
                setLastEquation(" ");
                setCalculationDone(false);
              }}
              text="Clear"
            />
          </Col>
          <Col
            offset={4}
            span={18}
            style={{ alignSelf: "flex-end", paddingBottom: "16px" }}
          >
            <div style={styles.insideScreen}>
              <div>{lastEquation}</div>
              <div>{currentEquation}</div>
              <div>{screen}</div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginRight: "16px", marginLeft: "16px" }}>
          <Col offset={0} span={16} style={styles.numbers}>
            <Row gutter={[16, 32]} style={styles.numberRow}>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"7"} value={"7"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"8"} value={"8"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"9"} value={"9"} />
              </Col>

              <Col span={8}>
                <Btn handleClick={handleClick} text={"4"} value={"4"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"5"} value={"5"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"6"} value={"6"} />
              </Col>

              <Col span={8}>
                <Btn handleClick={handleClick} text={"1"} value={"1"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"2"} value={"2"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"3"} value={"3"} />
              </Col>

              <Col span={8}>
                <Btn handleClick={handleClick} text={"0"} value={"0"} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"."} value={"."} />
              </Col>
              <Col span={8}>
                <Btn handleClick={handleClick} text={"="} value={"="} />
              </Col>
            </Row>
          </Col>
          <Col push={2} span={6} style={styles.operators}>
            <Row
              gutter={[64, 32]}
              style={styles.operatorRow}
              justify="center"
              align="middle"
            >
              <Col span={24} style={{ textAlign: "center" }}>
                <Btn handleClick={handleClick} text={"/"} value={"/"} />
              </Col>

              <Col span={24} style={{ textAlign: "center" }}>
                <Btn handleClick={handleClick} text={"x"} value={"x"} />
              </Col>

              <Col span={24} style={{ textAlign: "center" }}>
                <Btn handleClick={handleClick} text={"-"} value={"-"} />
              </Col>

              <Col span={24} style={{ textAlign: "center" }}>
                <Btn handleClick={handleClick} text={"+"} value={"+"} />
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
    height: "566px",
    background: "rgba(0,0,0,.05)",
  },
  topPad: {
    width: "100%",
    height: "16px",
  },
  screen: {
    height: "200px",
    marginTop: "16px",
    marginLeft: "16px",
    marginRight: "16px",
    background: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
  numbers: {
    height: "300px",
    marginTop: "32px",
    background: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
  operators: {
    height: "300px",
    marginTop: "32px",
    background: "rgba(0,0,0,.1)",
    borderRadius: "5px",
  },
  numberRow: {
    padding: "24px",
  },
  operatorRow: {
    paddingTop: "24px",
  },
  insideScreen: {
    height: "166px",
    marginLeft: "16px",
    marginRight: "16px",
    marginTop: "10px",
    background: "rgba(0,0,0,.2)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: "16px",
    fontSize: "32px",
    flexDirection: "column",
  },
};

export default Home;
