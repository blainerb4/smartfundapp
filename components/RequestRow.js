import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
class RequestRow extends Component {
    onApprove = async() => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    };
//helper functions
    onFinalize = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    };
    //now we can get number of approvals incremement by 1, can only approve
    //if your marked as a approver
    render(){
        const {Row, Cell} = Table;
        const {id, request, approversCount} = this.props;
        const readyToFinalize = request.approvalCount > approversCount / 2;
        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button color="green" basic onClick={this.onApprove}>Approve</Button>
                    )}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
                    )}
                </Cell>
            </Row>
        );
    }
};

export default RequestRow;
//() is when we want to render right away
//id is the indext of the array
//campaign.sol if we forget diff properties tied to an individual strut 
//we need to fetch total number of approvers tied to a campaign contract
// not an individual request, request doesnt know the total number of approvers in the campaign

//if request.complete is true return the value null ( we will hide the button)
//if false we will render the entire button

//whenever request.complete is true, it will fire disabled
//if ready to finalize and if not been request.complete we want it to be marked as green