import {Client, FileCreateTransaction, Hbar, PrivateKey} from '@hashgraph/sdk'

class HFSHelper {
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

    createFile = async (contentStr, filePrvKeyStr) => {
        //const filePrvKey = await PrivateKey.fromString(filePrvKeyStr);
        const filePrvKey = await PrivateKey.generate();
        const filePubKey = filePrvKey.publicKey;

        const tx = await new FileCreateTransaction()
            .setKeys([filePubKey])
            .setContents(contentStr)
            .setMaxTransactionFee(new Hbar(2))
            .freezeWith(this.client);

        const signTx = await tx.sign(filePrvKey);

        const txRes = await signTx.execute(this.client);

        const receipt = await txRes.getReceipt(this.client);

        const fileId = receipt.fileId;

        return fileId;
    }
}

export default HFSHelper