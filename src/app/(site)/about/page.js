import Image from "next/image";
import {CreditCard, Lock, ShieldUser} from "lucide-react";
import Commitments from "@/components/Commitments";
import CoreValues from "@/components/CoreValues";
import AboutHeroSection from "@/components/AboutHeroSection";
import TeamSection from "@/components/TeamSection";
import AboutPageAnimations from "@/components/AboutPageAnimations";
import {sanityFetch} from "@/sanity/lib/live";
import {aboutPageQuery} from "@/sanity/lib/queries";
import OfficePictures from "@/components/OfficePictures";

export default async function AboutPage() {
    const {data} = await sanityFetch({query: aboutPageQuery});

    return (
        <div className="w-full overflow-x-hidden bg-[#373737]">
            <AboutPageAnimations/>
            <div className="space-y-12">
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

