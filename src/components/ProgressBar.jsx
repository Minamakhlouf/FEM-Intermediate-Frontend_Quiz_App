import "./ProgressBar.css"; 

const ProgressBar = (props) => {
    return (
        <div className="progress-bar background" style={{width: "100%", height: "8px", borderRadius: "10px", overflow: "hidden"}} >
            <div style={{ width: `${props.progress}%`, backgroundColor: '#A729F5', height: "8px" }}></div>
        </div>
    )
}

export default ProgressBar; 