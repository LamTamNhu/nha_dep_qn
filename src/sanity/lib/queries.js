export const homepageQuery = `*[_type == "homepage"][0] {
  videoBanner,
  bannerTitle,
  sale,
  introduction,
  coreValues,
  whyChooseUs,
  processesTabs,
  constructionVideoSection,
  showcases,
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
`