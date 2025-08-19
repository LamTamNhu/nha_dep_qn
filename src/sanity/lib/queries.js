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
  contactHeader,
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
  mainBranch{
    address,
    email,
    phones
  },
  footerQuotes
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
  officePictures{
    images[]{
      "imageUrl": asset->url
    }
  },
  commitments{
    items[]{
      title,
      description,
      "iconUrl": icon.asset->url
    }
  },
  coreValues{
    values[]{
      title,
      description,
      "iconUrl": icon.asset->url
    }
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

export const projectSlugsQuery = `*[_type in ["projectDetail", "completedProject"] && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}`;

export const projectBySlugQuery = `*[_type in ["projectDetail", "completedProject"] && slug.current == $slug][0]{
  _type,
  title,
  shortDescription,
  information,
  category,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  "mainImage": gallery[0],
  gallery[]{
    "url": asset->url,
    alt
  },
  seo,
  body
}`;

export const projectsQuery = `*[_type == "projectDetail"]{
  _id,
  title,
  shortDescription,
  "slug": slug.current,
  "image": gallery[0].asset->url,
  "landArea": information.landArea,
  "constructionArea": information.constructionArea,
  "location": information.location,
  "function": information.function,
  category,
  _createdAt
}`;

export const completedProjectsQuery = `*[_type == "completedProject"]{
  _id,
  title,
  shortDescription,
  "slug": slug.current,
  "image": gallery[0].asset->url,
  "landArea": information.landArea,
  "constructionArea": information.constructionArea,
  "location": information.location,
  "function": information.function,
  category,
  _createdAt
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  baseUrl,
  defaultSeo,
  robots,
  facebook,
  zalo,
  youtube
}`;

export const newsSlugsQuery = `*[_type == "news" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  category,
  excerpt,
  thumbnail,
  seo,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  body
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


