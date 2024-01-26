/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo } from "react";

const Child = ({ Abc }) => {
    console.log('child component');
    return (
        <div>Child Component</div>
    )
}

export default memo(Child)