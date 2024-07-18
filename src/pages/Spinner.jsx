import React from 'react'
import { ClipLoader } from 'react-spinners'


const override = {
    postion: "relative"
};


const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            loading={loading}
            cssOverride={override}
        />
    )
}

export default Spinner