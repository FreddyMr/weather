import React from "react"
import { Card, Grid } from 'semantic-ui-react'
class BigCard extends React.Component {
    render() {
        const p = this.props;
        console.log(p.curent)
        if (p.curent.main) {
            const weather = p.curent.weather[0].description
            const speed = p.curent.wind.speed
            const temp = Math.floor((p.curent.main.temp - 273.15) * 100) / 100
            return <Card fluid id='bigcard'>
                <Card.Content style={{
                    display: "flex"
                }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Card.Header id='cardheader'>{temp}</Card.Header>
                            </Grid.Column>
                            <Grid.Column width={8} id='cardheaderdata'>
                                <Card.Description>weather:{weather}</Card.Description>
                                <Card.Description>speed:{speed}</Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        }
        else {
            return <div></div>
        }
    }

}
export default BigCard;