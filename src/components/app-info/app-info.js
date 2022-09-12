import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Accounting for employee compensation</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Will receive a salary bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;