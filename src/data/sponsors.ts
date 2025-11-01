export interface Sponsor {
  name: string;
  tier: string;
  logo: string;
  website: string;
  description: string;
}

export const sponsorsData: Sponsor[] = [
  {
    name: "Love's Travel Stops",
    tier: "Gold",
    logo: "/Digital- Loves Horizontal Container.svg",
    website: "https://www.loves.com",
    description: "Love's Travel Stops is one of the nation's leading travel stop networks, supporting innovation and community development"
  }
];
