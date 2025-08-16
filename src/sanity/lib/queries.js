export const homepageQuery = `*[_type == "homepage"][0] {
  videoBanner,
  bannerTitle,
  sale,
  introduction,
  visionSection{
    vision{
      title,
      description1,
      description2,
      images[]{"url": asset->url}
    },
    mission{
      title,
      description1,
      description2,
      images[]{"url": asset->url}
    }
  },
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
`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  heroSection{
    title,
    companyName,
    descriptions,
    "imageUrl": image.asset->url,
    imageAlt
  },
  teamSection{
    aboutShort,
    ceo{
      name,
      title,
      "thumbnailUrl": thumbnail.asset->url
    },
    members[]{
      name,
      title,
      "thumbnailUrl": thumbnail.asset->url
    }
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

export const servicesPageQuery = `*[_type == "servicesPage"][0]{
  services[]{
    title,
    description,
    alt,
    "image": image.asset->url,
    "slug": slug.current
  }
}`

export const projectSlugsQuery = `*[_type == "projectDetail" && defined(slug.current)]{
  "slug": slug.current
}`;

export const projectBySlugQuery = `*[_type == "projectDetail" && slug.current == $slug][0]{
  title,
  information,
  category,
  isCompleted,
  _createdAt,
  "slug": slug.current,
  gallery[]{
    "url": asset->url,
    alt
  },
  description,
  sections[]{
    content,
    image{
      "url": asset->url,
      alt
    },
    imageSubtitle
  }
}`;

export const projectsQuery = `*[_type == "projectDetail" && isCompleted != true]{
  _id,
  title,
  "slug": slug.current,
  "image": gallery[0].asset->url,
  "shortDescription": information.shortDescription,
  "landArea": information.landArea,
  "constructionArea": information.constructionArea,
  "location": information.location,
  category,
  isCompleted,
  _createdAt
}`;

export const completedProjectsQuery = `*[_type == "projectDetail" && isCompleted == true]{
  _id,
  title,
  "slug": slug.current,
  "image": gallery[0].asset->url,
  "shortDescription": information.shortDescription,
  "landArea": information.landArea,
  "constructionArea": information.constructionArea,
  "location": information.location,
  category,
  isCompleted,
  _createdAt
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  facebook,
  zalo,
  youtube
}`;

export const newsSlugsQuery = `*[_type == "news" && defined(slug.current)]{
  "slug": slug.current
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0]{
  title,
  category,
  _createdAt,
  "slug": slug.current,
  sections[]{
    header,
    content,
    images[]{
      "url": asset->url,
      alt
    }
  }
}`;

export const newsQuery = `*[_type == "news"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  "image": thumbnail.asset->url,
  excerpt,
  category,
  _createdAt
}`;

