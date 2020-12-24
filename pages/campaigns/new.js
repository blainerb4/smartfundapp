import React, {Component} from 'react';
import {Form, Button, Input,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import instance from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';
//link-react component that allows us to render anchor tags in react component and navigate around app
//router-programtically redirect people from one page to another in our app
class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault(); //keeps the browser from prenting to submit
        //create new camapign import factorty instance when defined in factory.js in ethrereum directory
        this.setState({ loading: true, errorMessage: '' })
        try {
        const accounts = await web3.eth.getAccounts();
        await instance.methods
        .createCampaign(this.state.minimumContribution)
        .send({
            from: accounts[0]
        });

        Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false })
    };
    //instance is instance of factory, sending trans in browser(will calculate the amount of gas)
    render(){
        return (
            <Layout>
        <h3>Create a Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}> 
        <Form.Field>
        <label>Minimum Contribution</label>
        <Input 
        label="wei" 
        labelPosition="right"
        value={this.state.minimumContribution} //take statevalue from min contirbutiion and push it backj into component
        onChange={event => 
        this.setState({minimumContribution: event.target.value})} 
        />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>
        Create
        </Button>
        </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
//!! - turn string into equivalent boolean value(false)
//thruthy value is a true value if we want boolean we want it to be true
//empty string is default false so we want to turn it into default false
// !'truthy value' - false
// !!'truthy value' -true
//!!"" - false
//turns string into equivalent boolean value
////in onChange user types triggets function and gives event object(a new value), then updates min contribution state
//causes entire component to rerender we get new value in the input
//we want to pass a reference to onsubmit in Form component so that
//it can be executed sometime in the future
//we create camapign with min contributiona and it will deploy new camapign and force user to pay for transaction
//empty string will be falsy so error will be set to false no error on screen
//but if error occurs and text gets assigned to error message it becomes a truthy value and error appears on screen