import { PrimaryButton, SecondaryButton } from "../../components/button";
import profile from "../../configs/portfolio.json";
import WrapperBody from "../../layouts/wrapper";

export default function Bio() {
  return (
    <div id="bio" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <h1 className="font-['Geist'] font-[700] text-4xl">👋 I'm {profile.name}</h1>
          <p className="w-full 2xl:w-2/3">{profile.bio}</p>
        </div>
        <div className="flex mt-4 gap-4">
          {/* <PrimaryButton href="#contacts" label="Get contacts" /> */}
          <SecondaryButton target="_blank" href={"https://docs.google.com/document/d/11LIFDY13penEyPTKnnovpVj2y69hwFX5/edit?usp=sharing&ouid=111439221931648296533&rtpof=true&sd=true"} label="Resume" />
        </div>
      </WrapperBody>
    </div>
  );
}