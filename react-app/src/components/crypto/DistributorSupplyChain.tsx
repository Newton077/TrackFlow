import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { decodeAddress, getProgramMetadata } from "@gear-js/api";
import { Button } from "@gear-js/ui";



function DistributorSupplyChain () {
  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();


  // Add your programID
  const programIDSupplyChain =
    "0xf51ba006e32baba7dbeab50d28d57723935ecfc9ce88acf4efc638e2178f1f0a";

   // Add your metadata.txt
  const meta =
    "01000000000105000000010a00000001170000000000000000011c000000fd2b8c00083c737570706c795f636861696e5f696f28496e697469616c697a65000014012470726f6475636572730401305665633c4163746f7249643e0001306469737472696275746f72730401305665633c4163746f7249643e00012472657461696c6572730401305665633c4163746f7249643e00013866756e6769626c655f746f6b656e08011c4163746f7249640001486e6f6e5f66756e6769626c655f746f6b656e08011c4163746f72496400000400000208000810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004000c01205b75383b2033325d00000c000003200000001000100000050300140418526573756c7408045401180445011c0108084f6b040018000000000c45727204001c00000100001800000400001c083c737570706c795f636861696e5f696f144572726f720001282c5a65726f4163746f724964000000304974656d4e6f74466f756e640001004c556e65787065637465644974656d537461746500020040416363657373526573747269637465640003004046545472616e736665724661696c6564000400444e46545472616e736665724661696c6564000500404e46544d696e74696e674661696c65640006004c4d656d6f72794c696d6974457863656564656400070034436f6e74726163744572726f720400200118537472696e6700080030547843616368654572726f7204002401545472616e73616374696f6e43616368654572726f720009000020000005020024083c737570706c795f636861696e5f696f545472616e73616374696f6e43616368654572726f7200010c4c5472616e73616374696f6e4e6f74466f756e64000000404d69736d617463686564416374696f6e00010030537465704f766572666c6f770002000028083c737570706c795f636861696e5f696f18416374696f6e0000080118616374696f6e2c012c496e6e6572416374696f6e0001106b696e6458013c5472616e73616374696f6e4b696e6400002c083c737570706c795f636861696e5f696f2c496e6e6572416374696f6e0001102050726f6475636572040030013850726f6475636572416374696f6e0000002c4469737472696275746f7204004c01444469737472696275746f72416374696f6e0001002052657461696c6572040050013852657461696c6572416374696f6e00020020436f6e73756d65720400540138436f6e73756d6572416374696f6e0003000030083c737570706c795f636861696e5f696f3850726f6475636572416374696f6e0001101c50726f64756365040138746f6b656e5f6d65746164617461340134546f6b656e4d65746164617461000000305075745570466f7253616c6508011c6974656d5f69643801184974656d49640001147072696365440110753132380001001c417070726f766508011c6974656d5f69643801184974656d496400011c617070726f7665480110626f6f6c000200105368697004003801184974656d496400030000341020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e14746f6b656e34546f6b656e4d6574616461746100001001106e616d65200118537472696e6700012c6465736372697074696f6e200118537472696e670001146d65646961200118537472696e670001247265666572656e6365200118537472696e67000038083c7072696d69746976655f74797065731055323536000004003c01205b7536343b20345d00003c0000030400000040004000000506004400000507004800000500004c083c737570706c795f636861696e5f696f444469737472696275746f72416374696f6e00011c20507572636861736508011c6974656d5f69643801184974656d496400013464656c69766572795f74696d6540010c7536340000001c5265636569766504003801184974656d49640001001c50726f6365737304003801184974656d49640002001c5061636b61676504003801184974656d4964000300305075745570466f7253616c6508011c6974656d5f69643801184974656d49640001147072696365440110753132380004001c417070726f766508011c6974656d5f69643801184974656d496400011c617070726f7665480110626f6f6c000500105368697004003801184974656d49640006000050083c737570706c795f636861696e5f696f3852657461696c6572416374696f6e00010c20507572636861736508011c6974656d5f69643801184974656d496400013464656c69766572795f74696d6540010c7536340000001c5265636569766504003801184974656d4964000100305075745570466f7253616c6508011c6974656d5f69643801184974656d49640001147072696365440110753132380002000054083c737570706c795f636861696e5f696f38436f6e73756d6572416374696f6e00010420507572636861736504003801184974656d49640000000058083c737570706c795f636861696e5f696f3c5472616e73616374696f6e4b696e640001080c4e6577000000145265747279000100005c0418526573756c7408045401600445011c0108084f6b040060000000000c45727204001c000001000060083c737570706c795f636861696e5f696f144576656e74000008011c6974656d5f69643801184974656d49640001286974656d5f73746174656401244974656d5374617465000064083c737570706c795f636861696e5f696f244974656d5374617465000008011473746174656801384974656d4576656e74537461746500010862796c0110526f6c65000068083c737570706c795f636861696e5f696f384974656d4576656e7453746174650001202050726f6475636564000000245075726368617365640001002052656365697665640002002450726f636573736564000300205061636b616765640004001c466f7253616c6500050020417070726f7665640006001c53686970706564000700006c083c737570706c795f636861696e5f696f10526f6c650001102050726f64756365720000002c4469737472696275746f720001002052657461696c657200020020436f6e73756d65720003000070083c737570706c795f636861696e5f696f14537461746500001c01146974656d7374015c5665633c284974656d49642c204974656d496e666f293e00012470726f6475636572730401305665633c4163746f7249643e0001306469737472696275746f72730401305665633c4163746f7249643e00012472657461696c6572730401305665633c4163746f7249643e00013866756e6769626c655f746f6b656e08011c4163746f7249640001486e6f6e5f66756e6769626c655f746f6b656e08011c4163746f7249640001386361636865645f616374696f6e738001705665633c284163746f7249642c20436163686564416374696f6e293e00007400000278007800000408387c007c083c737570706c795f636861696e5f696f204974656d496e666f000018012070726f647563657208011c4163746f72496400012c6469737472696275746f7208011c4163746f72496400012072657461696c657208011c4163746f72496400011473746174656401244974656d537461746500011470726963654401107531323800013464656c69766572795f74696d6540010c7536340000800000028400840000040808880088083c737570706c795f636861696e5f696f30436163686564416374696f6e00011420507572636861736504003801184974656d4964000000305075745570466f7253616c6504003801184974656d49640001001c417070726f766504003801184974656d49640002001c5265636569766504003801184974656d4964000300144f7468657200040000";

  const metadata = getProgramMetadata(`0x${meta}`);

  const message: any = {
    destination: programIDSupplyChain, // programId
    payload: {  "action":{"Distributor":{"Purchase":{"item_id":2 ,"delivery_time":4  }}},"kind":"New"},
    gasLimit: 100099819245,
    value: 0,
    
  };

  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic
        .signAndSend(
          accounts[0].address,
          { signer: injector.signer },
          ({ status }) => {
            if (status.isInBlock) {
              console.log(
                `Completed at block hash #${status.asInBlock.toString()}`
              );
              alert.success(`Block hash #${status.asInBlock.toString()}`);
            } else {
              console.log(`Current status: ${status.type}`);
              if (status.type === "Finalized") {
                alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(":( transaction failed", error);
        });
    } else {
      alert.error("Account not available to sign");
    }

    const unsub = api.gearEvents.subscribeToGearEvent(
        "UserMessageSent",
        ({
          data: {
            message: { id, source, destination, payload, value },
          },
        }) => {
          console.log(`
        messageId: ${id.toHex()}
        source: ${source.toHex()}
        payload: ${payload.toHuman()}
        `);

  

        }

       
      );
  };

  return (
  <>
  <h1>Distributor</h1>
  <Button text="Purchase" onClick={signer} />
  </>

  )
}
export { DistributorSupplyChain  };