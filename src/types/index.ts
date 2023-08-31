export interface Country {
  data: {
    name: string
    full_name: string
    capital: string
    iso2: string
    iso3: string
    covid19: {
      total_case: string
      total_deaths: string
      last_updated: string
    }
    current_president: {
      name: string
      gender: string
      appointment_start_date: string
      appointment_end_date: null
      href: {
        self: string
        country: string
        picture: string
      }
    }
    currency: string
    phone_code: string
    continent: string
    description: string
    size: string
    independence_date: string
    population: string
    href: {
      self: string
      states: string
      presidents: string
      flag: string
    }
  }
}

export interface Countries {
  data: {
    name: string
    full_name: string
    capital: string
    iso2: string
    iso3: string
    covid19: {
      total_case: string
      total_deaths: string
      last_updated: string
    }
    current_president: {
      name: string
      gender: string
      appointment_start_date: string
      appointment_end_date: null
      href: {
        self: string
        country: string
        picture: string
      }
    }
    currency: string
    phone_code: string
    continent: string
    description: string
    size: string
    independence_date: string
    population: string
    href: {
      self: string
      states: string
      presidents: string
      flag: string
    }
  }[]
}

export interface CountriesListProps {
  countries: Countries
}
export interface BrowserProps {
  onSearchCountries: (text: string) => void
}
export interface GlassProps {
  children: React.ReactNode
}
export interface HeaderProps {
  title: string
}
export interface CovidDataProps {
  data: null | {
    total_case: string
    total_deaths: string
    last_updated: string
  }
}
export interface CurrentPresidentProps {
  president: null | {
    name: string
    gender: string
    appointment_start_date: string
    appointment_end_date: null
    href: { picture: string }
  }
  country: string
}
export interface AboutCountryProps {
  about: {
    full_name: string | null
    capital: string | null
  }
}
export interface CustomImageProps {
  src: string
  alt: string
  height: string
  width: string
}
export interface States {
  data: { name: string }[]
}
export interface GeoStatsProps {
  stats: {
    currency: string | null
    population: string | null
    size: string | null
  }
}
export interface StatesListProps {
  states: { data: { name: string }[] }
}
export interface NoInfoProps {
  message: string
}
