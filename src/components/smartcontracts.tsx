import LucidContext from "@/contextts/components/lucidContext";
import { LucidContextType } from "@/type/contexts/LucidContextType";
import React, { useContext} from "react";
import {WalletContextType} from "@/type/contexts/walletContextType"
import WalletContext from "@/contextts/components/walletContext";
type Props = {};
 const Smartcontracts = function({}: Props) {
    const { lucid } = useContext<LucidContextType> (LucidContext);
    const { connect } = useContext<WalletContextType> (WalletContext);
    return (
        <div>
            {!lucid && (
                <div className="mt-10 grid grid-cols-1 gap-y-8">
                    <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 active:text-blue-100"
                    onClick = { connect }
                    >
                        Connect Wallet
                </button>
                </div>
            )}
        </div>
    );
 };
 export default Smartcontracts;