import homepage from "@/sanity/schemaTypes/homepage";
import youtubeEmbed from "@/sanity/schemaTypes/youtubeEmbed";
import titleAndDescription from "@/sanity/schemaTypes/titleAndDescription";
import process from "@/sanity/schemaTypes/process";
import constructionVideo from "@/sanity/schemaTypes/constructionVideo";

export const schemas = {
    types: [homepage, youtubeEmbed, titleAndDescription, process, constructionVideo],
}
