import React from "react";

export default props => {
    return (
        <div>
            { props.typeName } <strong> { props.flowerName } </strong> 
        </div>
    );
};