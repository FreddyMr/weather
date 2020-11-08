import React from 'react'
import { Form, Button, Item } from 'semantic-ui-react'
import csc from 'country-state-city'
//const cities = require('all-the-cities');
class JumboForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: {},
            state: {},
            city: {},
        }
    }
    handleClick = (e) => {
        const form = e.target.parentElement
        var formInput = form[2]
        if (formInput.value == '') {
            formInput = form[1]
        }
        console.log(form)
        console.log(formInput)
        const p = this.props
        p.find(formInput.value)
    }
    selectedCountry = (e) => {
        const form = e.target.parentElement
        const value = form.children[0].value
        const countries = csc.getAllCountries()
        const exists = countries.find(item => {
            return item.name === value
        })
        if (!exists) {
            return -1
        }
        this.setState({
            country: exists,
            city:{},
            state:{}
        })
    }
    selectedState = (e) => {
        const form = e.target.parentElement
        const value = form.children[1].value
        const countries = csc.getStatesOfCountry(this.state.country.id)
        const exists = countries.find(item => {
            return item.name === value
        })
        if (!exists) {
            return -1
        }
        this.setState({
            state: exists,
            city: {}
        })
    }
    selectedCity = (e) => {
        const form = e.target.parentElement
        const formInput = form[2]
        console.log(form)
        console.log(formInput)
        const p = this.props
        p.find(formInput.value)
    }
    render() {
        return <div id='jumbo-from'>
            <Form style={{
                display: 'flex'
            }}> {/*  make it a flex display  */}
                <Form.Field style={{
                    width: '70%',
                    margin: 0
                }}> {/*  make it 70% and remove margin  */}
                    <input id='input' list='countries' placeholder='Country Name' onSelect={this.selectedCountry} />
                    <input id='input' list='states' placeholder='State Name' onSelect={this.selectedState} />
                    <input id='input' list='cities' placeholder='City Name' />
                    <datalist id='cities'>
                        {csc.getCitiesOfState(this.state.state.id).map((item) => {
                            return <option value={item.name}>{item.name}</option>
                        })}
                    </datalist>
                    <datalist id='states'>
                        {csc.getStatesOfCountry(this.state.country.id).map((item) => {
                            return <option value={item.name}>{item.name}</option>
                        })}
                    </datalist>
                    <datalist id='countries'>
                        {csc.getAllCountries().map((item) => {
                            return <option value={item.name}>{item.name}</option>
                        })}
                    </datalist>
                </Form.Field>
                <Button onClick={this.handleClick} type='submit'>Submit</Button>

            </Form>
        </div>
    }
}
export default JumboForm;