"use client";
import React, {ReactNode, useContext} from "react";
import WalletContext from "../components/walletContext";
import { LucidContextType } from "@/type/contexts/LucidContextType";
import LucidContext from "../components/lucidContext";
import { Blockfrost, Lucid } from "lucid-cardano";

type Props = {
    children: ReactNode;
};
const WalletProvider = function({ children} : Props){
    const {setLucid} = useContext<LucidContextType>(LucidContext);

    const connect = async function () {
        try{
            const lucid = await Lucid.new(
                new Blockfrost(
                    "http://cardano-preprod.blockfrost.io/api/v0",
                    "preprodKg8DI8a5EnzlCeOfY1PGq1YgJnmhGaNU"

                ),
                "Preprod"
            );
            lucid.selectWallet(await window.cardano.nami.enable());
            setLucid(lucid);

        }catch (error){
                console.log(error);
        }
    };
    const disconnect = async function () {
        setLucid(null!);
    };

    return (
        <WalletContext.Provider value = {{connect, disconnect}}>
            {children}
        </WalletContext.Provider>
    );
};
export default WalletProvider;