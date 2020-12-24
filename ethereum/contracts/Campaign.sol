pragma solidity ^0.4.25;

contract CampaignFactory {
    address[] public deployedCampaigns; //holds list of all the deployed campaigns
    
    function createCampaign(uint minimum) public { //allows user to create new instance of a Campaign
        address newCampaign = new Campaign(minimum, msg.sender); //create contract that gets added to blockchain then returns addresss(store in local variable and add to deployed camapigns array)instruct contract to deploy new instance of Campaign, then returns address of newly created Campaign
        deployedCampaigns.push(newCampaign);
    }
    //returns the entire array of deployed campaigns, public(anyone can call this function), view(no data inside the contract is modified by the function), returns(return value type of address array)
    function getDeployedCampaigns() public view returns(address[]) { 
        return deployedCampaigns;
    }
}
//we create camapign with min contributiona and it will deploy new camapign and force user to pay for transaction
contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete; //starts off as false, after it goes to true no finalizing request
        uint approvalCount; //keps track of the number of yes votes
        mapping(address => bool) approvals; //keeps track of person voting on a given request
    }
   
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers; //cant do iteration, to get count of pppl in mapping to keep track on the number pf people 
    uint public approversCount; //anytime someone donates, increment value of approvers count
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor (uint minimum, address creator) public { //minimum amount of money that needs to be donated
       // manager = msg.sender; //when we create new contract msg.sender will be factory address contract not user of new capgn get address of 
        manager = creator; //msg.sender becomes address of factory (creator is the address of the person actually trying to create the new contract)
        minimumContribution = minimum;
    }
    
    function contribute() public payable{
        require(msg.value > minimumContribution); 
        approvers[msg.sender] = true;
        approversCount++; //amount of ppl joined in or contributed to contract
        
       // approvers.push(msg.sender); - only available to arrays not mapping
    } 

    function createRequest(string description, uint value, address recipient) public restricted {

        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        //approvalcount we just need to meet a minimum number pf people that vote yes for contract to be approved
        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index]; // manipulate copy of strut that exists
        require(approvers[msg.sender]); //true if address we've seen before(donated), false if not donated
        require(!request.approvals[msg.sender]); //require stateement wants to return truthify values and will reject for falsey values so we had!
        request.approvals[msg.sender] = true; //person marked as having voted on request
        request.approvalCount++; //add persons address to approvals mapping and increment approval count (++ - incrementer operator)
    }
    function finalizeRequest(uint index) public restricted { //specify the index of requests the manager wants to finalize
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2));//50 approvers 26 ppl must approve before released
        require(!request.complete); //if true flip to false so require statement fails
        request.recipient.transfer(request.value); //take money specified inside request and send to recipient
        request.complete = true; //update true aftr payin money to recipinet
        //specify how many approvals needed before finalized (>50% have to vote yess), //require statement that compares the number of approvals to the number of people that have contributed to the campaign
        
    }

    function getSummary() public view returns(
        uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
