import React from "react"
import CardRender from "../CardRender/CardRender"
import { Grid } from 'semantic-ui-react'
import Axios from 'axios'
class CardGrid extends React.Component{
    render(){
        const p = this.props
        return<Grid>
            <Grid.Row>
                {p.data.map((item) => {
                    return <CardRender weather={item.weather[0].description} deg={item.wind_deg} speed={item.wind_speed} icon={item.weather[0].icon} temp={item.temp.day}></CardRender>
                })}
            </Grid.Row>
        </Grid>
    }
}
export default CardGrid;