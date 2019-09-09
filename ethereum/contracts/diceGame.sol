pragma solidity ^0.5.11;

contract DiceGame {
    address public manager;
    uint gameId = 0;
    
    struct Player {
        bytes32 hashValue;
        uint betValue;
    }
    struct Game {
        mapping(address => Player) players;
        address[] playerAddresses;
        uint8 winningValue;
        uint winnerCount;
        uint allWinnersBalance;
        uint restBalance;
        uint gameBalance;
    }
    mapping(uint => Game) games;
    
    modifier between1and12(uint value) {
        require(value >= 1 && value <= 12, "The number is not from 1 to 12");
        _;
    }
    
    modifier isManager() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }
    
    constructor() public {
        manager = msg.sender;
    }
    
    function setUserBetAndHash(bytes32 hashValue) public payable {
        address senderAddress = msg.sender;
        require(games[gameId].players[senderAddress].hashValue == 0, "Player already bet number");
        games[gameId].players[senderAddress].hashValue = hashValue;
        games[gameId].players[senderAddress].betValue = msg.value;
        games[gameId].playerAddresses.push(senderAddress);
        games[gameId].gameBalance += msg.value;
    }
    
    function checkUserValue(uint8 userValue, uint id) private view between1and12(userValue) returns (bool) {
        require(id >= 0 && id < gameId, "Game is not ended");
        require(userValue == games[id].winningValue, "User input does not match winning value");
        bytes32 userHash = keccak256(abi.encode(userValue));
        require(userHash == games[id].players[msg.sender].hashValue, "User input does not match its hash");
        return true;
    }
    
    function setServerValue(uint8 dice) private between1and12(dice) {
        games[gameId].winningValue = dice;
    }
    
    function setGame() private {
        address[] storage gamePlayerAdresses = games[gameId].playerAddresses;
        uint length = gamePlayerAdresses.length;
        
        for (uint i = 0; i < length; i++) {
            bytes32 playerHash = games[gameId].players[gamePlayerAdresses[i]].hashValue;
            if (playerHash == keccak256(abi.encode(games[gameId].winningValue))) {
                games[gameId].winnerCount++;
                games[gameId].allWinnersBalance += games[gameId].players[gamePlayerAdresses[i]].betValue;
            }
        }
        
        games[gameId].restBalance = games[gameId].gameBalance;
    }
    
    function newGame(uint8 dice) public isManager {
        setServerValue(dice);
        setGame();
        gameId++;
    }
    
    function getGameById(uint id) public view returns(uint8, uint, uint, uint, uint) {
        
    }
    
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
    
}