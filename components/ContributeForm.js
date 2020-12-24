import React, {Component} from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component {
    state ={
        value: '',
        errorMessage: '',
        loading: false
    };
    onSubmit = async event => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: '' });
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch(err){
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false, value: '' }) //turn loading flag off and reset value of contribution amount when theres an error(reset form and button stopped spinning)
    };
    render(){
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
            <label>Amount to Contribute</label>
            <Input 
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether" 
            labelPosition="right"
            />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary loading={this.state.loading}>Contribute</Button>
            </Form>
        );
    }
}

export default ContributeForm; 

//<Form onSubmit={this.onSubmit}> no <Form onSubmit={this.onSubmit()}>
//parentheses because we do not want to call it at render time
//we want to pass a reference to the function so we can call it in the future
//contrubute form now has access to props.query.address