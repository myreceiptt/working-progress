//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                                                                           ///////
////     Our Signature v.4.74                                                                                  ///////
////                                                                                                           ///////
////    *    ##     ######  ######   ######  #######        ###    ##  ######  ########  #####      ##    *    ///////
////    *    ##     ##   ## ##   ## ##    ## ##             ####   ## ##    ##    ##    ##   ##     ##    *    ///////
////    *    ##     ######  ######  ##    ## #####          ## ##  ## ##    ##    ##    #######     ##    *    ///////
////    *           ##      ##   ## ##    ## ##             ##  ## ## ##    ##    ##    ##   ##           *    ///////
////    *    ##     ##      ##   ##  ######  ##      ##     ##   ####  ######     ##    ##   ##     ##    *    ///////
////                                                                                                           ///////
////    ENDHONESA.COM by Prof. NOTA Inc. - Prof. NOTA - @MyReceipt                                             ///////
////    Deep Links: https://deeplink.endhonesa.com/                                                            ///////
////                                                                                                           ///////
////     Regards,                                                                                              ///////
////     Prof. NOTA                                                                                            ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// License-Identifier: NOTA Inc.


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

contract NOTAContentReceipt is ERC1155, EIP712 {
    struct NOTAMeta {
        string name;
        string description;
        string imageSvg;
        string pageUrl;
        bool initialized;
    }

    struct NOTAMintRequest {
        address to;
        uint256 id;
        uint256 price;
        uint256 nonce;
        uint256 deadline;
    }

    bytes32 private constant NOTA_MINT_TYPEHASH =
        keccak256(
            "NOTAMintRequest(address to,uint256 id,uint256 price,uint256 nonce,uint256 deadline)"
        );

    mapping(uint256 => NOTAMeta) private _meta;
    uint256[] private _tokenIds;

    mapping(address => bool) public admins;
    mapping(address => uint256) public nonces;

    address public signer;
    uint256 public mintPrice;

    modifier onlyAdmin() {
        require(admins[msg.sender], "Not admin");
        _;
    }

    constructor(
        address initialAdmin,
        address initialSigner
    ) ERC1155("") EIP712("NOTAContentReceipt", "1") {
        admins[initialAdmin] = true;
        signer = initialSigner;
        mintPrice = 0;
    }

    function addAdmin(address admin) external onlyAdmin {
        admins[admin] = true;
    }

    function removeAdmin(address admin) external onlyAdmin {
        admins[admin] = false;
    }

    function setSigner(address newSigner) external onlyAdmin {
        signer = newSigner;
    }

    function setMintPrice(uint256 newPrice) external onlyAdmin {
        mintPrice = newPrice;
    }

    function setNOTAMetadata(
        uint256 id,
        string calldata name,
        string calldata description,
        string calldata imageSvg,
        string calldata pageUrl
    ) external onlyAdmin {
        if (!_meta[id].initialized) {
            _tokenIds.push(id);
            _meta[id].initialized = true;
        }
        _meta[id].name = name;
        _meta[id].description = description;
        _meta[id].imageSvg = imageSvg;
        _meta[id].pageUrl = pageUrl;
    }

    function getNOTAMetadata(uint256 id) external view returns (NOTAMeta memory) {
        return _meta[id];
    }

    function getNOTATokenIds() external view returns (uint256[] memory) {
        return _tokenIds;
    }

    function mintNOTAWithSig(
        NOTAMintRequest calldata req,
        bytes calldata signature
    ) external payable {
        require(block.timestamp <= req.deadline, "Signature expired");
        require(req.price == mintPrice, "Price mismatch");
        require(msg.value == req.price, "Incorrect value");
        require(req.to == msg.sender, "Sender mismatch");
        require(balanceOf(req.to, req.id) == 0, "Already minted");
        require(req.nonce == nonces[req.to], "Invalid nonce");

        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    NOTA_MINT_TYPEHASH,
                    req.to,
                    req.id,
                    req.price,
                    req.nonce,
                    req.deadline
                )
            )
        );

        address recovered = ECDSA.recover(digest, signature);
        require(recovered == signer, "Invalid signature");

        nonces[req.to] += 1;
        _mint(req.to, req.id, 1, "");
    }

    function uri(uint256 id) public view override returns (string memory) {
        require(_meta[id].initialized, "Metadata not set");
        NOTAMeta memory m = _meta[id];

        string memory image = string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(bytes(m.imageSvg))
            )
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name":"',
                        m.name,
                        '","description":"',
                        m.description,
                        '","external_url":"',
                        m.pageUrl,
                        '","image":"',
                        image,
                        '"}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function withdraw(address payable to) external onlyAdmin {
        (bool sent, ) = to.call{value: address(this).balance}("");
        require(sent, "Withdraw failed");
    }
}
