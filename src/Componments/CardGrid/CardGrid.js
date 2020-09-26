import React from "react"
import CardRender from "../CardRender/CardRender"
import { Grid } from 'semantic-ui-react'
import Axios from 'axios'
class CardGrid extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        Axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&exclude=hourly&appid=cd04b53f667916513b6b6c7b7d6aed4f').then((res) => {
            this.setState({
                data: res.data.daily
            })
            console.log(this.state.data)
        })
    }
    render(){
        return<Grid>
            <Grid.Row>
                {this.state.data.map((item) => {
                    return <CardRender weather={item.weather[0].description} deg={item.wind_deg} speed={item.wind_speed} icon={item.weather[0].icon} temp={item.temp.day}></CardRender>
                })}
            </Grid.Row>
        </Grid>
    }
}
export default CardGrid;