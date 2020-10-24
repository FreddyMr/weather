import React from "react"
import { Menu } from 'semantic-ui-react'
import JumboForm from '../JumboForm/JumboForm'
import CardGrid from '../CardGrid/CardGrid'
import Axios from 'axios'
import BigCard from '../BigCard/BigCard';
import WaitMessage from '../WaitMessage/WaitMessage'
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            lonlat: {},
            curent: [],
            show: false,
        }
    }
    find = (cityname) => {
        this.setState({
            show: true
        })
        Axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=cd04b53f667916513b6b6c7b7d6aed4f').then((res) => {
            this.setState({
                lonlat: res.data.coord,
                curent: res.data
            })
            Axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.state.lonlat.lat + '&lon=' + this.state.lonlat.lon + '&units=metric&exclude=hourly&appid=cd04b53f667916513b6b6c7b7d6aed4f').then((res) => {
                this.setState({
                    data: res.data.daily,
                    show: false
                })
                console.log(this.state.data)
            })
        })
    }
    render() {
        if (this.state.show) {
            return <div>
                <JumboForm find={this.find}></JumboForm>
                <WaitMessage></WaitMessage>
                <BigCard curent={this.state.curent}></BigCard>
                <CardGrid data={this.state.data}></CardGrid>
            </div>
        } else {
            return <div>
                <JumboForm find={this.find}></JumboForm>
                <BigCard curent={this.state.curent}></BigCard>
                <CardGrid data={this.state.data}></CardGrid>
            </div>
        }

    }

}
export default Main;