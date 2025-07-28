export const introQuery = `*[_type == "introduction"][0]{
  heading,
  description
}`

export const homepageQuery = `*[_type == "homepage"][0] {
  heroSlides[]{asset->{url}},
  introHeading,
  introDescription,
  coreValues[]{title, description, iconName},
  whyChooseUs[]{reason},
  designProjects[]{
    title,
    description,
    "imageUrl": image.asset->url
  },
  executionProjects[]{
    title,
    description,
    "imageUrl": image.asset->url
  },
  testimonial {
    quote,
    author,
    link,
    "avatarUrl": avatar.asset->url
  }
}`;
