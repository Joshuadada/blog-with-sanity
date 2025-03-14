import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getAllBlogs(page = 1, limit = 5): Promise<any[]> {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return client.fetch(
        groq`*[_type == "blog"] | order(_createdAt desc) [${startIndex}...${endIndex}]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": titleImage.asset->url,
      "category": category->{
        tagName
      },
      description,
      isFeature,
      isHeadline
    }`
    )
}

export async function getCustomerBlogs(page = 1, limit = 24): Promise<any[]> {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return client.fetch(
        `*[_type == "blog" && lower(category->tagName) == "consumer insights"]
    | order(_createdAt desc) [${startIndex}...${endIndex}] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": titleImage.asset->url,
      "category": category->{
        tagName
      },
      description,
      isFeature,
      isHeadline
    }`
    )
}

export async function getEconomicBlogs(page = 1, limit = 5): Promise<any[]> {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return client.fetch(
        `*[_type == "blog" && lower(category->tagName) == "economic insights"]
    | order(_createdAt desc) [${startIndex}...${endIndex}] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": titleImage.asset->url,
      "category": category->{
        tagName
      },
      description,
      isFeature,
      isHeadline
    }`
    )
}

export async function getHeadlineBlogs(): Promise<any[]> {
    return client.fetch(
        `*[_type == "blog" && isHeadline == true]
    | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": titleImage.asset->url,
      "category": category->{
        tagName
      },
      description,
      isFeature,
      isHeadline
    }`
    )
}

export async function getFeatureBlogs(): Promise<any[]> {
    return client.fetch(
        `
        *[_type == "blog" && isFeature == true]
        | order(_createdAt desc) {
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": titleImage.asset->url,
        "category": category->{
            tagName
        },
        description,
        isFeature,
        isHeadline
        }
    `
    )
}

export async function getBlog(slug: string) {
    return client.fetch(
        `
        *[_type == "blog" && slug.current == "${slug}"][0]{
        title,
        description,
        isFeature,
        isHeadline,
        "category": category->{
            tagName
        },
        _createdAt,
        _updatedAt,
        "slug": slug.current,
        "pdfUrl": file.asset->url,
        "titleImageUrl": titleImage.asset->url,
        
        // Section One
        "sectionOneText": content.sectionOne.sectionOneText[].children[].text,
        "sectionOneImgUrl": content.sectionOne.sectionOneImg.asset->url,
      
        // Section Two
        "sectionTwoImgOneUrl": content.sectionTwo.sectionTwoImgOne.asset->url,
        "sectionTwoImgTwoUrl": content.sectionTwo.sectionTwoImgTwo.asset->url,
      
        // Section Three
        "sectionThreeDescription": content.sectionThree.sectionThreeDescription,
        "sectionThreeText": content.sectionThree.sectionThreeText[].children[].text,
      
        // Section Four
        "sectionFourImgUrl": content.sectionFour.sectionFourImg.asset->url,
      
        // Section Five
        "sectionFiveImgUrl": content.sectionFive.sectionFiveImg.asset->url,
      
        // Section Six
        "sectionSixText": content.sectionSix.sectionSixText[].children[].text,
        "sectionSixImgUrl": content.sectionSix.sectionSixImg.asset->url,
      
        // Section Seven Carousel
        "sectionSevenCarousel": content.sectionSeven.sectionSevenCarousel[]{
          "imageUrl": asset->url,
        },
      
        // Section Eight
        "sectionEightText": content.sectionEight.sectionEightText[].children[].text
      }
    `
    )
}

export async function getAllTags(): Promise<any[]> {
    return client.fetch(
        groq`*[_type == "tag"] | order(_createdAt desc){
        _id,
        tagName
    }`
    )
}