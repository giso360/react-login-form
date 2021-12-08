import React from 'react'
import { useParams } from 'react-router-dom'

export default function Account(props) {
    
    // allows to grab params from URL
    const { name } = useParams();

    return (
        <div>
            Hello { name }
        </div>
    )
}
