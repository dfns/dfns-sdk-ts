import { Address, encodePacked, Hex, toBytes } from "viem";
import { keccak256, toUtf8Bytes, ethers } from 'ethers';

export const multiSendAbi = [
  {
    "type": "function",
    "name": "multiSend",
    "inputs": [
      {
        "name": "transactions",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "r",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "vs",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  }
]

export interface MetaTransaction {
  to: Address;
  value: bigint;
  data: Hex;
  operation: number;
}

export const MULTISEND_TYPEHASH = keccak256(
  toUtf8Bytes(
    "MultiSend(bytes32 data,uint256 nonce)"
  )
);

export const DOMAIN_TYPEHASH = keccak256(
  toUtf8Bytes(
    "EIP712Domain(uint256 chainId,address verifyingContract)"
  )
);

export const getStorageSlot = (): string => {
  return ethers.toBeHex(BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00") & BigInt(keccak256(toUtf8Bytes("SafeLite"))));
}

const encodeMetaTransaction = (tx: MetaTransaction): string => {
  const data = toBytes(tx.data);
  const encoded = encodePacked(
    ["uint8", "address", "uint256", "uint256", "bytes"],
    [tx.operation, tx.to, tx.value, BigInt(data.length), tx.data],
  );
  return encoded.slice(2);
};

export const encodeMultiSend = (txs: MetaTransaction[]): `0x${string}` => {
  return "0x" + txs.map((tx) => encodeMetaTransaction(tx)).join("") as `0x${string}`;
};

export const getPayloadAndDataToSign = (verifyingContract: string, transactions: MetaTransaction[], nonce: number, chainId: number) => {
  const encodedTx = encodeMultiSend(transactions);

  const domain = {
    chainId,
    verifyingContract,
  };

  const types = {
    MultiSend: [
      { name: "data", type: "bytes32" },
      { name: "nonce", type: "uint256" }
    ]
  };

  const transactionsHash = keccak256(encodedTx);

  const message = {
    data: transactionsHash,
    nonce: nonce
  };

  const dataToSign = { domain, types, message, primaryType: 'MultiSend' }

  return { encodedTx, dataToSign }
}
