const view = {
    DESKTOP: 1,
    TAB:2,
    MOBILE: 3
  };

const HEADER_SIZE = {
    [view.DESKTOP]:80,
    [view.TAB]:80,
    [view.MOBILE]:80
}

export {HEADER_SIZE};

export const RESUME_POINTERS = [
    {
        title:"Software Engineer - OYO Hotels and Homes",
        pointers:[
            "Working as a Software Engineer in India's fastest growing startup as a part of the Supply Discovery team. My team is responsible for expansion of OYO which is a business critical function.",
            "Worked on the self-onboarding project - a business workflow which immediately puts a prospective business partner on Oyo's app within the day, thereby producing value with least logistics overhead.",
            "Maintainer of 4 backend services and 2 frontend applications - 1 internal and 1 consumer facing.",
            "Redesigned web architecture of Oyo’s partner page from scratch - http://partner.oyorooms.com/. Being Oyo’s 2nd largest consumer facing interface, reducing bounce rate by 150% and increasing incoming leads by 70%."
        ]
    },
    {
        title:"Technical Head - Bonfarmo",
        pointers:[
            "Bonfarmo is an IOT based startup which focus on farm automation using AI, mechanical engineering and embedded systems.",
            "Successfully developed and engineered the flagship product - \"Automated Bud Chipper\". Bud chipping in sugarcane farming is a labor intensive task which requires precision to produce best results. If buds generated are of correct size then it saves 50% in terms of water required and up to 50% of fertiliser cost.",
            "The Bud Chipper could potentially help save 850 dollars per hectare of land which directly adds to the income of a farmer.",
            "Secured 35000$ worth of governemnt seed funding under ARISE program"
        ]
    }
]

export default view;
