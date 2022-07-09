// Solidity program to implement
// the above approach
pragma solidity ^0.8.4;
 
// Creating a contract named Example
contract Example
{
    // Public variable of type address
    address public manager;
 
    // Constructor function to set manager
    // as address of sender
     constructor()
     {
        manager = msg.sender;
     }
}
