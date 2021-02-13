import React from 'react';
import { Container, Card, Form, Header, Icon, Label, List, Modal, Input } from 'semantic-ui-react';
import AddToken from './AddToken.js';
import Data from './ClassificationTree.json';

//import {LoadJsonFile} from './Utils.js';

let getClassification = (data) => {
    switch(data) {
        case 'Art':
            return '0.0.1.1.2';
        case 'Certificate':
            return '0.0.1.1.4';
        case 'IT Hardware':
            return '0.0.1.1.3';
        default:
            return '0.0.0.0.0';
    }
}


function TokenTree() {
    const [open, setOpen] = React.useState(false);
    const [ttType, setTtType] = React.useState('');

    //const data = LoadJsonFile('DataTokenTree.json');


  return (
    <div>
    <br/>
    <Header as='h2' icon textAlign="center">
        <Icon name='globe' color='yellow' />
        <Header.Content>Tokenize Anything & Everything</Header.Content>
    </Header>
    <br/>
    <Container>
    <List relaxed verticalAlign='middle' size='small' >
        <List.Item>
            <Icon name={Data['icon']} />
            <List.Content>
                <List.Header as='a'>{Data['name']}</List.Header>
                <List.List>
                    {
                        Data['children'].map((data) => 
                        <List.Item>
                            <Icon name={data['icon']} />
                            <List.Content>            
                                <List.Header as='a'>{data['name']}</List.Header>
                                <List.List>
                                {
                                    data['children'].map((d) => 
                                    <List.Item onClick={()=>{setTtType(d['name']); setOpen(true); }}> 
                                        <Icon name={d['icon']} />
                                        <List.Content>            
                                            <List.Header as='a'>{d['name']}</List.Header>
                                            <List.Description>{d['desc']}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    )
                                }
                                </List.List>
                            </List.Content>
                        </List.Item>
                        )
                    }
                </List.List>
            </List.Content>
        </List.Item>
    </List>
    </Container>
    <Modal closeIcon open={open} onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)}>
        <Modal.Header>{ttType}<Label size='small'>(Classification: {getClassification(ttType)})</Label></Modal.Header>
        <Modal.Content>
            <AddToken TTType={ttType} />
        </Modal.Content>
    </Modal>
    </div>
  )
}

export default TokenTree;