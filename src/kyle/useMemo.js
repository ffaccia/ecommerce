import React, { useState, useMemo, useEffect } from "react";
//import "./styles.css";

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // memoizing the slowFunction with dependency of number
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    //const doubleNumber2 = slowFunction(number);


    // Normally, points to a new memory space everytime the function is called, or component is re-rendered
    // This leads to any hooks that are watching for this change to rerun, even if the values never changed
    // To fix this, return the object from the useMemo function which will ensure that it always has the same memory space until it is actually changed.
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        };
    }, [dark]);

    /*
    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    */

    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {
        return num * 2;
    }
}
