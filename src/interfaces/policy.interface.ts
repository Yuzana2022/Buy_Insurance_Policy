export interface Policy {
  id: string;
  name: string;
  age: number;
  country: Country;
  package: Package;
  premium: number;
}

export interface Country {
  id: string;
  name: string;
  currency: Currency;
}

export interface Currency {
  id: string;
  name: string;
  rate: number;
}

export interface Package {
  id: string;
  name: string;
  morePercent : number;
}
