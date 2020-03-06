import React from 'react';

export class InputForms extends React.Component {

    render() {
        let inputBoxes = [];
        this.props.inputs.forEach((input) => {
            let inputObject = Object.keys(input)
            inputObject.forEach((key) => {
                let newInput = (
                    <label>
                        {input[key]}
                        {/*the state at the key will be assigned*/}
                        <input type="number" onChange={(e) => this.props.onUpdate(e)}/>
                    </label>
                )
                inputBoxes.push(newInput);
            })
        });

        return (
            <form className="form">
                {inputBoxes} <br/>
                <button type = "button" id = "submitButton" onClick={(e) => this.props.onClick(e)}>Submit</button>
            </form>
        )
    }
}
