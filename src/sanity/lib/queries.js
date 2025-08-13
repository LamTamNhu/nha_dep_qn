export const homepageQuery = `*[_type == "homepage"][0] {
  videoBanner,
  bannerTitle,
  sale,
  introduction,
  coreValues,
  whyChooseUs,
  processesTabs,
  constructionVideoSection,
  showcases[]{
    ...,
    projects[]->{
      title,
      description,
      thumbnail: mainImage,
      "thumbnailUrl": mainImage.asset->url
    }
  },
  partners,
  testimonialSection
}`;

export const contactFormQuery = `*[_type == "contactSettings"][0]{
  title,
  subtitle,
  office,
  fanpage,
  hotline,
  budgetOptions
}
`;

export const footerQuery = `*[_type == "footerSettings"][0]{
  companyName,
  ctaText,
  description,
  "logo": logo.asset->url,
  branches
}
`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  aboutShort,
  ceoQuote,
  members[]{
    name,
    title,
    "thumbnailUrl": thumbnail.asset->url
  },
  coreValues[]{
    title,
    description,
    "iconUrl": icon.asset->url
  },
  coreValues2[]{
    title,
    description,
    "iconUrl": icon.asset->url
  },
  officeImages[]{
    "url": asset->url
  },
  commitments[]{
    text,
    description
  },
  policies[]{
    title,
    icon
  }
}`

export const projectsListQuery = `*[_type == "project"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  "category": select(
    category == "urbanHome" => "Nhà phố",
    category == "countryHome" => "Nhà vườn",
    category == "commercial" => "Công trình dịch vụ",
    category == "villa" => "Biệt thự",
    category == "neoClassic" => "Nhà tân cổ điển",
    defined(category) => category,
    true => ""
  ),
  "image": mainImage.asset->url,
  "disc": description,
}`

export const projectDetailQuery = `*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  address,
  size,
  startYear,
  category,
  description,
  "mainImageUrl": mainImage.asset->url,
  "galleryUrls": projectGallery[].asset->url
}`

