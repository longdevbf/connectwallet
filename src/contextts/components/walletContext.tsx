"use client"
import { WalletContextType } from "@/type/contexts/walletContextType";
import React, { createContext } from "react";


const WalletContext = createContext<WalletContextType>(null!) ;
export default WalletContext;