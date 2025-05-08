const BackBar = () => {
    return (
        <div className="back-bar">
            <button label="BACK" className="back-button" onClick={() => window.history.back()}>BACK</button>
        </div>
    );
};

export default BackBar;