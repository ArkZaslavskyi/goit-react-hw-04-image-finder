import { ProgressBar } from "react-loader-spinner";

const Loader = () => (
    <ProgressBar
        height="80"
        width="160"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#bbbbbb'
        barColor = '#3f51b5'
    />
);

export default Loader;