import React from 'react'
import {Form,Button, Item} from 'semantic-ui-react'
class JumboForm extends React.Component {
    handleClick=(e)=>{
        const form = e.target.parentElement
        const formInput = form[0]
        const p = this.props
        p.find(formInput.value)
    }
    render() {
        return <div id='jumbo-from'>
            <Form style={{
                display: 'flex'
            }}> {/*  make it a flex display  */}
                <Form.Field style={{
                    width:'70%',
                    margin:0
                }}> {/*  make it 70% and remove margin  */}
                    <input id='input' placeholder='City Name' />
                </Form.Field>
                <Button onClick={this.handleClick} type='submit'>Submit</Button>
                
            </Form>
        </div>
    }
}
export default JumboForm;