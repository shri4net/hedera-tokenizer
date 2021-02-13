import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import HTSHelper from './HTSHelper.js'
import HFSHelper from "./HFSHelper.js";
import TTCommon from './TokenTemplateCommon.json'
import TTCertificate from './TokenTemplateCertificate.json'
import TTArt from './TokenTemplateArt.json'
import TTITHardware from './TokenTemplateITHardware.json'

class AddToken extends Component {
    TTType = this.props.TTType;
    state = {uniqueId:'', hederaId: '', description: ''};
    TT = {};

    handleSubmit = async () => {
        const {uniqueId, hederaId, description} = this.state;

        const operatorId = '0.0.xxxxxx'; // TO DO: Change this
        const operatorPrivateKey = 'xxxxx'; // TO DO: Change this

        const hfs = new HFSHelper(operatorId, operatorPrivateKey);
        const jsondata = JSON.stringify(this.TT);
        const fid = await hfs.createFile(jsondata,"private");
        //alert(fid);

        const hts = new HTSHelper(operatorId, operatorPrivateKey);
        const classification = this.getClassification(this.TTType);
        const tid = await hts.createNFT('hedera://'+fid, classification);
        //alert(tid);
        this.setState({hederaId: tid});
    }
    
    handleChange = async (e, {name, value}) => {
        this.setState({[name]:value});
    }

    getClassification = (data) => {
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
    
    getTT = (data) => {
        switch(data) {
            case 'Art':
                return TTArt;
            case 'Certificate':
                return TTCertificate;
            case 'IT Hardware':
                return TTITHardware;
            default:
                alert('Not yet supported');
                return null;
        }
    }

    // value={field['id']} 

    render() {
        const {uniqueId, hederaId, description} = this.state;

        this.TT = this.getTT(this.TTType);

        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input name='uniqueId' value={uniqueId} onChange={this.handleChange} fluid label='Unique Id' placeholder='Enter Unique Id here' />
                <Form.Input name='hederaId' value={hederaId} onChange={this.handleChange} fluid label='Hedera Id' placeholder='Hedera Id appears here' disabled />
            </Form.Group>
            {
                this.TT['fields'].map((field) => 
                <Form.Group widths='equal'>
                    <Form.Input name={field['id']} onChange={this.handleChange} fluid label={field['label']} placeholder={field['placeholder']} />
                </Form.Group>
                )
            }
            <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default AddToken
