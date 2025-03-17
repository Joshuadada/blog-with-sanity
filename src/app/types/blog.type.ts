import { StaticImport } from "next/dist/shared/lib/get-img-props";


export type BlogPost = {
    _id: string;
    _createdAt: string;
    _updatedAt?: string;
    title: string;
    slug: string;
    description: string;
    isFeature: boolean;
    isHeadline: boolean;
    image?: string | StaticImport; // Optional since not all entries might have it
    pdfUrl?: string;
    titleImageUrl?: string | StaticImport;
    category: {
      tagName: string;
    };
    sectionOneImgUrl?: string | StaticImport;
    sectionTwoImgOneUrl?: string | StaticImport;
    sectionTwoImgTwoUrl?: string | StaticImport;
    sectionThreeDescription?: string;
    sectionThreeText?: string[];
    sectionFourImgUrl?: string | StaticImport;
    sectionFiveImgUrl?: string | StaticImport;
    sectionSixImgUrl?: string | StaticImport;
    sectionSixText?: string[];
    sectionSevenCarousel?: {
      imageUrl: string | StaticImport;
    }[];
    sectionEightText?: string[];
    sectionOneText?: string[];
  };
  
  export type BlogResponse = {
    blogs: BlogPost[];
    total: number;
  }