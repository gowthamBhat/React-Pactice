import React from 'react'
import ListView from './ListView'

function List() {
    const PersonList = [{
        name: "gowtham",
        age: 22,
        city: "TTH"
    }, {
        name: "vishnu",
        age: 100,
        city: "Kailas"
    }]
    const mapPerson = PersonList.map((list) => {
        return <ListView key={list.name} person={list} />
    }) //key attribute is added to help react the rendaring the view easyly, it has some splc uses and 
    //the values cannot be accessed form client side
    return (
        <div>
            {mapPerson}
        </div>
    )
}

export default List
