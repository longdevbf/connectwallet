import Image from "next/image";
import readValidator from "./utils/read-validator";
import Smartcontracts from "@/components/smartcontracts";
export default function Home() {
  const validator = readValidator();
  return (
    <main>
      <div className = "max-w-2xl mx-auto mt-20 mb-10">
        <div className = "mb-10">
          <h2 className = "text-lg font-semibold white">
            Make a log and un lock tAda to contract

          </h2>
            <h3 className = "mt-4 mb-2">Smartcontracts</h3>
            <div className ="black p-2 rounded overflow-x-auto">
              {validator.script}
            </div>
        </div>

      </div>

    <Smartcontracts />

    </main>
    
  );
}
