import { useTheme } from "../context/ThemeContext";


const ToggleButton = () => {
 
const {theme, toggleTheme} = useTheme()

    return (
        
        <div>
            <button className=" outline p-1.5" onClick={toggleTheme}>Switch {theme==="Light" ? "Dark" : "Light"} mode</button>
        </div>
    );
};

export default ToggleButton;