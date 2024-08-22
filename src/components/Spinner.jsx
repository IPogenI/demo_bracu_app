import React from 'react'
import { ClipLoader } from 'react-spinners'


const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'blue',
    borderWidth: '8px',
};


const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinner