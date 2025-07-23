import {groq} from 'next-sanity'

export const homepageQuery = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroSlides,
  introHeading,
  introText,
  coreValues,
  chooseUsTitle,
  chooseUsBullets,
  designHeading,
  designText,
  thiCongHeading,
  thiCongText,
  testimonialHeading,
  testimonialQuote,
  testimonialAuthor,
  testimonialText,
  testimonialImage
}`
