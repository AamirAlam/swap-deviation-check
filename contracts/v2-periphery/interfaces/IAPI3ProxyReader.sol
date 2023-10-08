pragma solidity >=0.6.2;


interface IAPI3ProxyReader  {
    function setProxyAddress(address _token, address _proxyAddress) external;
     function readDataFeed(address _tokenAddress)
        external
        view
        returns (int224 value, uint256 timestamp);
}
