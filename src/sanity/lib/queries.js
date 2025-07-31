export const homepageQuery = `*[_type == "homepage"][0]{
  videoBanner {
    title,
    url
  },
  bannerTitle {
    title,
    description
  },
  sale[] {
    topText,
    bottomText
  },
  introduction {
    title,
    description
  },
  coreValues[] {
    title,
    description
  }
}
`;
