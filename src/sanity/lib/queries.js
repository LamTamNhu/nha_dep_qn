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
  testimonialSection[]{
    _key,
    quote,
    authorName,
    authorInfo,
    avatar,
    link
  }
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
    members[]{
      name,
      title,
      "thumbnailUrl": thumbnail.asset->url,
      aboutShort
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
  information {
    landArea,
    constructionArea,
    location,
    function
  },
  category,
  "createdDate": coalesce(createdDate, _createdAt),
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  "mainImage": gallery[0],
  gallery[] {
    "url": asset->url,
    alt
  },
  seo,
  body
}`;


export const projectsQuery = `*[_type == "projectDetail"] | order(coalesce(createdDate, _createdAt) desc){
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
  "createdDate": coalesce(createdDate, _createdAt),
  _createdAt
}`;

export const completedProjectsQuery = `*[_type == "completedProject"] | order(coalesce(createdDate, _createdAt) desc){
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
  "createdDate": coalesce(createdDate, _createdAt),
  _createdAt
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  baseUrl,
  defaultSeo,
  robots,
  facebook,
  zalo,
  youtube,
  phoneNumber
}`;

export const newsSlugsQuery = `*[_type == "news" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  category,
  thumbnail,
  "mainImage": thumbnail,
  seo,
  "createdDate": coalesce(createdDate, _createdAt),
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  body
}`;

export const newsQuery = `*[_type == "news"] | order(coalesce(createdDate, _createdAt) desc){
  _id,
  title,
  "slug": slug.current,
  "image": thumbnail.asset->url,
  "excerpt": coalesce(
    excerpt,
    select(
      count(body) > 2 => pt::text(body[0..1]) + "…",
      pt::text(body)
    ),
    ""
  ),
  category,
  "createdDate": coalesce(createdDate, _createdAt),
  _createdAt
}`;



export const bannerQuery = `*[_type == "siteBanner"][0]{
  defaultSlides[]{"url": asset->url, alt},
  newsUseDefault,
  newsSlides[]{"url": asset->url, alt},
  projectsUseDefault,
  projectsSlides[]{"url": asset->url, alt},
  servicesUseDefault,
  servicesSlides[]{"url": asset->url, alt},
  completedUseDefault,
  completedSlides[]{"url": asset->url, alt}
}`;
