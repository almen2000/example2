pragma solidity ^0.5.11;

contract DiceGame {
    address[] playersAddress;
    uint8 public serverValue;
    mapping(address => bytes32) players;
    
    modifier between1and12(uint value) {
        require(value >= 1 && value <= 12, "The number is not from 1 to 12");
        _;
    }
    
    function setUserValueHash(bytes32 hashNumber) public {
        address senderAddress = msg.sender;
        require(players[senderAddress] == 0, "Player already bet number");
        players[senderAddress] = hashNumber;
        playersAddress.push(senderAddress);
    }
    
    function setServerValue(uint8 dice) public between1and12(dice) {
        serverValue = dice;
    }
    
    function checkUserValue(uint8 userValue) public view between1and12(userValue) returns (bool) {
        require(userValue == serverValue, "User input does not match server value ");
        bytes32 userHash = keccak256(abi.encode(userValue));
        require(userHash == players[msg.sender], "User input does not match its hash");
        return true;
    }
    
    function refreshPlayers() public returns (bool) {
       uint length = playersAddress.length;
       for (uint i = 0; i < length; i++) {
           delete players[playersAddress[i]];
       }
       playersAddress.length = 0;
       return true;
    }
}