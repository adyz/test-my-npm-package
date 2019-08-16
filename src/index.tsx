import * as React from "react";
import { render } from "react-dom";
import { data as originalNodes } from "./customData";
import VirtualTree from "react-tree-grid-flat";

import "./styles.css";

const buttonStyle = {
  border: 0,
  fontSize: "14px",
  marginRight: "10px",
  height: "24px",
  width: "24px",
  lineHeight: "24px",
  background: "#E7D3AF",
  borderRadius: "50%",
  fontFamily: "PT Mono, monospace"
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandboooooox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <VirtualTree nodes={originalNodes} allExpanded={false}>
        {({ style, node, index, selectNode, expandOrCollapse }) => {
          return (
            <div style={style}>
              <div
                style={{
                  overflow: "auto",
                  borderBottom: "1px solid #fff",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  color: "#775E32"
                }}
              >
                <p
                  style={{
                    padding: "10px 0",
                    paddingLeft: node.nesting * 20 + "px",
                    background: "#FFF1F1",
                    margin: "0",
                    display: "block",
                    lineHeight: "24px"
                  }}
                >
                  {node.hasChildren ? (
                    <button
                      style={buttonStyle}
                      onClick={e => {
                        e.stopPropagation();
                        expandOrCollapse(node.path);
                      }}
                    >
                      {node.expanded ? "-" : "+"}
                    </button>
                  ) : (
                    <button style={{ ...buttonStyle, background: "#fff" }}>
                      -
                    </button>
                  )}
                  <label htmlFor={node.path}>
                    Path: {node.path} / i: {node.i} / Name: {node.name}
                  </label>
                </p>
              </div>
            </div>
          );
        }}
      </VirtualTree>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
