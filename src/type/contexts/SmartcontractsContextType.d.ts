export type SmartcontractsContextType = {
    tAda: string;
    setTAda: React.Dispatch<React.SetStateAction<string>>;
    lockUntil: string;
    setLockUntil:React.Dispatch<React.SetStateAction<string>>;
    lockTxHash: string;
    unlockTxHash: string;
    waitingLockTx: boolean;
    waitingUnlockTx: boolean;

    lockSmartcontracts: ({lucid} : {lucid: Lucid }) => Promise<void>
    unlockSmartcontracts: ({lucid} : {lucid: Lucid}) => Promise<void>

}