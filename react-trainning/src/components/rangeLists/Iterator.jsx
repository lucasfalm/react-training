import React from 'react'
import students from './data/students'

export default _ => { 
    const studentsLI = students.map((student) => {
        return (
            <li>
                <strong> ID: </strong> { student.id } 
                <strong> Name: </strong> { student.name }
            </li>
        )
    })

    return (
        <ul style= {{ listStyle:"none" }} >
            { studentsLI }
        </ul>
    )
}