import React from "react";
import { Input } from "./ui/input";
import { CountryCode } from "./CountryCode";
import { Options } from "./Options";
import { Button } from "./ui/button";
  
export default function App() {
  return (
    <div className="-translate-y-32">
        <div className="bg-zinc-50 h-[500px] rounded-xl max-w-[420px] mx-auto font-sans">
            <h1 className="bg-[#E84D84] rounded-t-xl font-bold text-white text-center text-sm py-2">FILL THE FORM BELOW TO ENQUIRE</h1>
            <div className="px-10 pt-4">
                <p className="text-sm font-semibold">*Enter your name</p>
                <Input type="email" placeholder="Eg. Aneesha Mehra" />
            </div>

            <div className="px-10 pt-4">
                <p className="text-sm font-semibold">*Enter your WhatsApp Number</p>
                <div className="flex items-center gap-2">
                    <div className="country-code">
                        <CountryCode />
                    </div>
                    <div className="number">
                        <Input type="email" placeholder="Eg. 00000000" className="w-[255px]" />
                    </div>
                </div>
            </div>

            <div className="px-10 pt-4">
                <p className="text-sm font-semibold">*Select your profession</p>
                <Options />
            </div>

            <div className="px-10 pt-4">
                <p className="text-sm font-semibold">*Select your goal</p>
                <Options />
            </div>

            <div className="px-10 pt-4">
                <p className="text-sm font-semibold">*Select your city</p>
                <Options />
            </div>

            <div className="flex justify-center px-10 pt-4">
                <Button className="w-full bg-button">Button</Button> 
            </div>
        </div>
    </div>
  );
}
