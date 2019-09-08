pragma solidity ^0.5.11;

contract DiceGame {
    address[] public players;
    bytes32 public a = "18";
    string public str;
    bytes public byt;
    mapping(address => bytes32) map;
    
    function hash() public view returns (bytes32) {
        return keccak256("10");
    }
    
    function g(bytes32 _a) public {
        a=_a;
    }
    
    function f() public view returns (bytes memory) {
        bytes memory b = abi.encode(16);
        return b;
    }
    
    function isValid(bytes memory number) public view returns (bool) {
        if (keccak256(number) == keccak256("5")) {
            a[1];
            return true;
        } else {
            return false;
        }
    }
    
    function isValid1(bytes32 hash) public view returns (bool) {
        if (hash == keccak256("5")) {
            return true;
        } else {
            return false;
        }
    }
    

}