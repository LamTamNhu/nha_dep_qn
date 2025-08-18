import homepage from "@/sanity/schemaTypes/homepage";
import youtubeEmbed from "@/sanity/schemaTypes/youtubeEmbed";
import titleAndDescription from "@/sanity/schemaTypes/titleAndDescription";
import process from "@/sanity/schemaTypes/process";
import constructionVideo from "@/sanity/schemaTypes/constructionVideo";
import project from "@/sanity/schemaTypes/project";
import partner from "@/sanity/schemaTypes/partner";
import testimonial from "@/sanity/schemaTypes/testimonial";
import contactSettings from "@/sanity/schemaTypes/contactSettings";
import footerSettings from "@/sanity/schemaTypes/footerSettings";
import aboutPage from "@/sanity/schemaTypes/aboutPage";
import visionSection from "@/sanity/schemaTypes/visionSection";
import service from "@/sanity/schemaTypes/service";
import servicesPage from "@/sanity/schemaTypes/servicesPage";
import aboutHeroSection from "@/sanity/schemaTypes/aboutHeroSection";
import teamSection from "@/sanity/schemaTypes/teamSection";
import commitments from "@/sanity/schemaTypes/commitments";
import officePictures from "@/sanity/schemaTypes/officePictures";
import coreValues from "@/sanity/schemaTypes/coreValues";

import projectDetail from "@/sanity/schemaTypes/projectDetail";
import completedProject from "@/sanity/schemaTypes/completedProject";
import siteSettings from "@/sanity/schemaTypes/siteSettings";
import news from "@/sanity/schemaTypes/news";
import blockContent from "@/sanity/schemaTypes/blockContent";


export const schemas = {
    types: [
        homepage,
        aboutPage,
        servicesPage,
        youtubeEmbed,
        titleAndDescription,
        process,
        constructionVideo,
        project,
        projectDetail,
        completedProject,
        blockContent,
        news,
        partner,
        testimonial,
        contactSettings,
        visionSection,
        service,
        aboutHeroSection,
        teamSection,
        commitments,
        officePictures,
        coreValues,
        footerSettings,
        siteSettings,
    ],
}
