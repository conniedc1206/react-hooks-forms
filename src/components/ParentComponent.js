import React, {useState} from 'react'
import Form from './Form'
import DisplayData from './DisplayData';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        };
        console.log(firstName)

        const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        };
        
    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    )
}

export default ParentComponent