import React from "react";

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
        title:"Software Engineer - OYO Hotels and Homes (July 2019 - present)",
        pointers:[
            "Working as a Software Engineer in India's fastest growing startup as a part of the Supply Discovery team. My team is responsible for expansion of OYO which is a business critical function.",
            "Worked on the self-onboarding project - a business workflow which immediately puts a prospective business partner on Oyo's app within the day, thereby producing value with least logistics overhead.",
            "Maintainer of 4 backend services and 2 frontend applications - 1 internal and 1 consumer facing.",
            "Redesigned web architecture of Oyo’s partner page from scratch - http://partner.oyorooms.com/. Being Oyo’s 2nd largest consumer facing interface, reducing bounce rate by 150% and increasing incoming leads by 70%."
        ]
    },
    {
        title:"Technical Head - Bonfarmo (Jan 2019 - May 2019)",
        pointers:[
            "Bonfarmo is an IOT based startup which focus on farm automation using AI, mechanical engineering and embedded systems.",
            "Successfully developed and engineered the flagship product - \"Automated Bud Chipper\". Bud chipping in sugarcane farming is a labor intensive task which requires precision to produce best results. If buds generated are of correct size then it saves 50% in terms of water required and up to 50% of fertiliser cost.",
            "The Bud Chipper could potentially help save 850 dollars per hectare of land which directly adds to the income of a farmer.",
            "Secured 35000$ worth of governemnt seed funding under ARISE program"
        ]
    },
    {
        title:"Data Science Course Instructor (Dec 2018 - Jan 2018)",
        pointers:[
            "Conducted a series of workshops for freshers and sophomores during Winter Vacations on Machine Learning and Data Science.",
            "Conducted lessons on Python, Neural Networks and Machine Learning Models. Course github repo: https://github.com/Aditya21196/VS-Data-Science-and-Machine-Learning ",
            "Conducted implementation sessions in which skills learned were demonstrated in real world applications."

        ]
    },
    {
        title:"Data Scientist (Part time job) - AgriiPrince (June 2018 - Dec 2018)",
        pointers:[
            "Worked on Web Scraping pricing data from agmarknet (government website). The webscraped data was used to make a data lake.",
            "Scraper ran on AWS EC2 instance and on every successful scrape, a request would be made to a PHP web hook which would store the data in a SQL database on a shared server",
            "Researched commodity price forecasting using Matrix Completion (the same method used in recommender systems).",
            "Built an Android module containing webscraped plant disease data."
        ]
    },
    {
        title:"Project Developer - Edzo (Nov 2017 - Feb 2018)",
        pointers:[
            "Created a customer management platform for gyms using Android Studio and firebase.",
            "Integrated a Diet builder module, messaging and notification module and a scheduling module on a serverless backend using firebase functions."
        ]
    },
    {
        title:"Software Development Intern - Tnine Infotech (Dec 2015)",
        pointers:[
            "Learned Android Studio and Java and at the same time, singlehandedly created an Android App within the span of a month. This app was used by 5k active users every day at it's peak.",
            "The app could be used to set a circle of user input radius on a map around an input location. The alarm would ring as soons as user would enter this circle.",
            "App latest apk - https://androidappsapk.co/detail-location-alarm-io-tnine-myapplication/"

        ]
    }
]

export const SKILLS = [
    "Backend Development - Springboot (Java)",
    "Frontend Development - React (Javascript)",
    "Data Science, Machine Learning - Sklearn, Tensorflow (Python)",
    "Scripting - (Python and bash)",
    "Building Composite Containers using Docker",
    "Container Orchestration using Kubernetes"
]

export default view;
