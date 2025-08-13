import homepage from "@/sanity/schemaTypes/homepage";
import youtubeEmbed from "@/sanity/schemaTypes/youtubeEmbed";
import titleAndDescription from "@/sanity/schemaTypes/titleAndDescription";
import process from "@/sanity/schemaTypes/process";
import constructionVideo from "@/sanity/schemaTypes/constructionVideo";
import projectCard from "@/sanity/schemaTypes/projectCard";
import partner from "@/sanity/schemaTypes/partner";
import testimonial from "@/sanity/schemaTypes/testimonial";
import contactSettings from "@/sanity/schemaTypes/contactSettings";
import footerSettings from "@/sanity/schemaTypes/footerSettings";
import aboutPage from "@/sanity/schemaTypes/aboutPage";
import projectDocument from "@/sanity/schemaTypes/projectDocument";

export const schemas = {
    types: [
        homepage,
        youtubeEmbed,
        titleAndDescription,
        process,
        constructionVideo,
        projectCard,
        partner,
        testimonial,
        contactSettings,
        footerSettings,
        aboutPage,
        projectDocument,
    ],
}
