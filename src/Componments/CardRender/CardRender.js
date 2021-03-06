import React from "react"
import { Card,Grid } from 'semantic-ui-react'
class CardRender extends React.Component{
    render(){
        const p = this.props;
        return<Grid.Column width={4} stretched>
        <Card fluid style={{margin:"10px"}} width={4}>
            <Card.Content>
                <Card.Header className='text'>{p.temp}</Card.Header>
                <Card.Description className='text'>weather:{p.weather}</Card.Description>
                <Card.Description className='text'>speed:{p.speed}</Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
    }
    
}
export default CardRender;