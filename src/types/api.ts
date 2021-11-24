export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

type IconElement = {
  icon: {
    alternativeText: string
    url: string
  }
  title: string
}

export type SectionTechProps = {
  title: string
  techIcons: IconElement[]
}

type ConceptElement = {
  title: string
  id: string
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptElement[]
}

type ModuleElement = {
  id: string
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: ModuleElement[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLinkElement = {
  title: string
  url: string
}

export type AuthorElement = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  description: string
  socialLinks: SocialLinkElement[]
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorElement[]
}

export type ReviewElement = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewElement[]
}

export type QuestionElement = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionElement[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
