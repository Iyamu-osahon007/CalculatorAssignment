import "./Screen.css";
// import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
    return (
        <div className="screen" mode="single" max={70}>
          {value}
        </div>
    );
};

export default Screen;