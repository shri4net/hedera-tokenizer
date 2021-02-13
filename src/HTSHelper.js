import {Client, AccountBalanceQuery, PrivateKey, TokenCreateTransaction} from '@hashgraph/sdk'

class HTSHelper {
    client;
    operatorId;
    operatorPrivateKey;

    constructor(operatorId, operatorPrivateKey)
    {
        this.operatorId = operatorId;
        this.operatorPrivateKey = operatorPrivateKey;
        this.client = Client.forTestnet();
        this.client.setOperator(operatorId, operatorPrivateKey);
        //this.client.setMaxQueryPayment(new Hbar(2));
    }

    getBalance = async (accountId) => {
        const balance = await new AccountBalanceQuery()
            .setAccountId(accountId)
            .execute(this.client);
    
        //console.log("Balance is :" + balance.hbars.toTinybars() + " tinybars.");
        return balance.hbars.toTinybars();
    }


    createToken = async (tokenName, tokenSymbol, amount, tsyAccIdStr, tsyPrvKeyStr, admPrvKeyStr, supPrvKeyStr) => {
        //const treasuryAccountId =  client.operatorAccountId;
        const tsyPrvKey = await PrivateKey.fromString(tsyPrvKeyStr);

        const admPrvKey = await PrivateKey.fromString(admPrvKeyStr);
        const admPubKey = admPrvKey.publicKey;

        const supPrvKey = await PrivateKey.fromString(supPrvKeyStr);
        const supPubKey = supPrvKey.publicKey;

        const tx = await new TokenCreateTransaction()
            .setTokenName(tokenName)
            .setTokenSymbol(tokenSymbol)
            .setTreasuryAccountId(tsyAccIdStr)
            .setInitialSupply(amount)
            .setAdminKey(admPubKey)
            .setSupplyKey(supPubKey)
            .freezeWith(this.client);

        const signTx = await (await (await tx.sign(admPrvKey)).sign(tsyPrvKey)).sign(supPrvKey);

        const txRes = await signTx.execute(this.client);

        const receipt = await txRes.getReceipt(this.client);

        const tokenId = receipt.tokenId;
        //console.log("TokenId: " + tokenId);
        return tokenId;
    }

    createNFT = async (tokenName, tokenSymbol) => {
        const tokenId = await this.createToken (tokenName, tokenSymbol, 1, this.operatorId, this.operatorPrivateKey, this.operatorPrivateKey, this.operatorPrivateKey )
        return tokenId;
    }

    createFT = async (tokenName, tokenSymbol, count) => {
        const tokenId = await this.createToken (tokenName, tokenSymbol, count, this.operatorId, this.operatorPrivateKey, this.operatorPrivateKey, this.operatorPrivateKey )
        return tokenId;
    }
    

}

export default HTSHelper