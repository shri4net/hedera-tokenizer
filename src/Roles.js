import React from 'react';
import {List, Image, Card, Header, Icon} from 'semantic-ui-react';
import imgadmin from './images/avatar/small/christian.jpg';
import imgtokenizer from './images/avatar/small/daniel.jpg';
import imgvalidator from './images/avatar/small/elliot.jpg';
import imglibrarian from './images/avatar/small/helen.jpg';
import imgreader from './images/avatar/small/jenny.jpg';

const Roles = () => (
    <div>
    <Header as='h2' icon textAlign="center">
        <Icon name='book' circular />
        <Header.Content>University Tokenization App</Header.Content>
    </Header>
    <br/>

    <Card centered>
        <Card.Content>
            <Card.Header>Login as</Card.Header>
        </Card.Content>
        <Card.Content>

    <List selection relaxed animated verticalAlign='middle' size='small'>
        <List.Item>
            <Image avatar src={imgadmin} />
            <List.Content>
                <List.Header as='a'>Admin</List.Header>
                <List.Description>Create users, Define asset-templates</List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src={imgtokenizer} />
            <List.Content>
                <List.Header as='a'>Tokenizer</List.Header>
                <List.Description>Tokenize assets</List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src={imgvalidator} />
            <List.Content>
                <List.Header as='a'>Validator</List.Header>
                <List.Description>Validate tokenization</List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src={imglibrarian} />
            <List.Content>
                <List.Header as='a'>Librarian</List.Header>
                <List.Description>Lend books, Claim books</List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src={imgreader} />
            <List.Content>
                <List.Header as='a'>Reader</List.Header>
                <List.Description>Borrow books, Return books</List.Description>
            </List.Content>
        </List.Item>
    </List>
    </Card.Content>
    </Card>
    </div>
)

export default Roles