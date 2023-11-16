import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners//PulseLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#F89878",
};

function Spinner(props) {
    const { loading } = props
    //   let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <div className="sweet-loading flex bg-[#f3f3f3] h-[100vh] items-center">
            <PulseLoader
                color={'#0F88D9'}
                loading={loading}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;