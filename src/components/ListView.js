import React from 'react'

function ListView({ person }) {

    return (
        <div>
            <h2>persons name is {person.name} his city is {person.city}</h2>
        </div>
    )
}

export default ListView
