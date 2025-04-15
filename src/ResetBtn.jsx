import React from "react";
import "./ResetBtn.css";

function ResetBtn(
    {hanldeReset}
)
{
    return(
        <button className="resetBtn" onClick={hanldeReset}>Clear all Data <i class="bi bi-arrow-repeat resetIcon"></i></button>
    )

}
export default ResetBtn