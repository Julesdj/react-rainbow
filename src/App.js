import "./App.css";
import React, { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import ColorForm from "./components/ColorForm";

function App() {
    let [colors, setColors] = useState([
        "violet",
        "blue",
        "lightblue",
        "green",
        "greenyellow",
        "yellow",
        "orange",
        "red",
    ]);
    const addColor = (newcolor) => {
        setColors([...colors, newcolor]);
    };
    let colorMap = colors.map((color, i) => {
        return <ColorBlock color={color} key={i} />;
    });
    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    );
}

export default App;
