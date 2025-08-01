import homepage from "@/sanity/schemaTypes/homepage";
import youtubeEmbed from "@/sanity/schemaTypes/youtubeEmbed";
import titleAndDescription from "@/sanity/schemaTypes/titleAndDescription";
import step from "@/sanity/schemaTypes/step";
import processTabs from "@/sanity/schemaTypes/processTabs";

export const schemas = {
    types: [homepage, youtubeEmbed, titleAndDescription, step, processTabs],
}
