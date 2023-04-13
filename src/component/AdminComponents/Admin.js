import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Admin() {
    return(
        <>
            <Link to='/admin/addCandidate'>Click here to add Candidates!</Link>
        </>
    )
}