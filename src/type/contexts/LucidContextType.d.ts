import {Lucid} from "lucid-cardano"
export type LucidContextType = {
    lucid: Lucid;
    setLucid: React.Dispatch<React.SetStateAction<Lucid>>
}
export interface LucidContextType{
    lucid?: () => void; // Adjust the type as needed
    connect?: () => void; 
}