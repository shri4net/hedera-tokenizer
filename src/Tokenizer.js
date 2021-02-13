import React from 'react';
import { Card, Form, Header, Icon, Label, List, Modal, Input } from 'semantic-ui-react';
import AddToken from './AddToken.js';

function Tokenizer() {
    const [open, setOpen] = React.useState(false);

  return (
    <div>
    <br/>
    <Header as='h2' icon textAlign="center">
        <Icon name='book' circular />
        <Header.Content>Tokenizer</Header.Content>
    </Header>
    <br/>
    <Card.Group>
    <Card centered>
        <Card.Content>
            <Card.Header>Physical Assets</Card.Header>
        </Card.Content>
        <Card.Content>
            <List selection relaxed animated verticalAlign='middle' size='small'>
                <List.Item>
                    <Icon name='building' />
                    <List.Content>
                        <List.Header as='a'>Real Estate</List.Header>
                        <List.Description>Tokenize buildings, etc.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name='paint brush' />
                    <List.Content>
                        <List.Header as='a'>Fine Art</List.Header>
                        <List.Description>Tokenize arts, etc.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item onClick={()=>setOpen(true)}>
                    <Icon name='computer' />
                    <List.Content>
                        <List.Header as='a'>IT Hardware</List.Header>
                        <List.Description>Tokenize desktops, etc.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item onClick={()=>setOpen(true)}>
                    <Icon name='certificate' />
                    <List.Content>
                        <List.Header as='a'>Certificate</List.Header>
                        <List.Description>Tokenize certificate, etc.</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Card.Content>
    </Card>
    <Card centered>
        <Card.Content>
            <Card.Header>Digital Assets</Card.Header>
        </Card.Content>
        <Card.Content>
            <List selection relaxed animated verticalAlign='middle' size='small'>
                <List.Item>
                    <Icon name='bookmark' />
                    <List.Content>
                        <List.Header as='a'>Intellectual Property</List.Header>
                        <List.Description>Tokenize IP, etc.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name='database' />
                    <List.Content>
                        <List.Header as='a'>Data</List.Header>
                        <List.Description>Tokenize data, etc.</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name='drivers license' />
                    <List.Content>
                        <List.Header as='a'>IT Software</List.Header>
                        <List.Description>Tokenize software, etc.</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Card.Content>
    </Card>
    </Card.Group>

    <Modal closeIcon open={open} onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)}>
        <Modal.Header>IT Hardware</Modal.Header>
        <Modal.Content>
            <AddToken />
        </Modal.Content>
    </Modal>
    </div>
  )
}

export default Tokenizer;