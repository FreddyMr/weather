import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

class WaitMessage extends React.Component {
  render() {
    return <Message icon>
      <Icon name='circle notched' loading />
      <Message.Content>
        <Message.Header>Just one minute</Message.Header>
      We are fetching the data of the weather for you.
    </Message.Content>
    </Message>
  }
}

export default WaitMessage