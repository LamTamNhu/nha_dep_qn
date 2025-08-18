import Image from "next/image";
import {CreditCard, Lock, ShieldUser} from "lucide-react";
import Commitments from "@/components/Commitments";
import CoreValues from "@/components/CoreValues";
import AboutHeroSection from "@/components/AboutHeroSection";
import TeamSection from "@/components/TeamSection";
import AboutPageAnimations from "@/components/AboutPageAnimations";
import {client} from "@/sanity/lib/client";
import {aboutPageQuery} from "@/sanity/lib/queries";
import OfficePictures from "@/components/OfficePictures";

export default async function AboutPage() {
    const data = await client.fetch(aboutPageQuery);

    return (
        <div className="w-full overflow-x-hidden bg-[#373737]">
            <AboutPageAnimations/>
            <div className="px-4 sm:px-6 md:px-10 space-y-12">
                <AboutHeroSection data={data?.heroSection}/>
                <TeamSection data={data?.teamSection}/>
                {/*Office pictures*/}
                <OfficePictures data={data?.officePictures}/>
                <Commitments data={data?.commitments}/>
                <CoreValues data={data?.coreValues}/>
            </div>
        </div>
    );
}

