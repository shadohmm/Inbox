//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.4.25;
contract Inbox{
    string public message;
    function Inbox(string  _reqstring) public {
        message = _reqstring;
    }
    function setMess(string  _init) public {
        message = _init;
    }

}
