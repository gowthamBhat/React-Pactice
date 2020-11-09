import React from 'react'

function ReactFragmentComponent() {
    return (
        <React.Fragment>
            <p>using react fragment, it is not enclosed in a div tag like others</p>
        </React.Fragment>
    )
}

export default ReactFragmentComponent
//we can also use

// return (
//     <>
//         <p>using react fragment, it is not enclosed in a div tag like others</p>
//     </>
// )
//only disadvantage is can't pass args in this empty tags, rest will work fine

//! pure and memo components: re rendaring same data an avoid madathe 