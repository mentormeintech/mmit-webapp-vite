import React, { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#F89878",
};

export default function Loader(props) {
    const { loading } = props
    //   let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <PulseLoader
            color={'#fff'}
            loading={loading}
            cssOverride={override}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}
