import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import instance from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component {
    //defines a class function getintiialprops exclsuive to next.js to retrieve iniital data
    static async getInitialProps() { 
        const campaigns = await instance.methods.getDeployedCampaigns().call();

        return { campaigns };
    }
//below is code from cards component from semantic ui lib
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                <a>View Campaigns</a>
                </Link>
                ),
                fluid: true
            }
        });

        return <Card.Group items={items} />;
    }

    render(){
        return (
        <Layout>
        <div>
        
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
        <a>
        <Button floated='right'
        content='Create Campaign'
        icon='add circle'
        primary
        />
        </a>
        </Link>
        {this.renderCampaigns()}
        </div>
        </Layout>
        );
    }
}
//our server executed the call to our contract to get address on webapge
//{this.props.campaigns[0]}
export default CampaignIndex;
//        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/api.min.js'></link>

