import { Link } from "react-router-dom";

function PageNotFound() {
    return(
        <div>
            Its not you, Its us!
            <Link to='/home'>Back to Home</Link>
        </div>
    )
}

export default PageNotFound;