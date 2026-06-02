const projects = {
  1: {
    title: "Slot",
    discription:
      "Led technical SEO and structured data optimization for SLOT Nigeria’s eCommerce platform, enhancing organic visibility, crawl efficiency, and rich search results. Increased organic clicks to over 5.24M, impressions to 175M, ranking keywords to 47K+ and implemented error-free product, review and merchant schema markup throughout the site.",

    summaryTitle: "SEO Case Study – SLOT Nigeria",
    summary:
      "Worked on improving the organic search visibility, structured data performance, and technical SEO health of SLOT Nigeria’s eCommerce website.",
    features: [
      "Technical SEO optimization",
      "Structured data implementation",
      "Search visibility growth",
      "Internal linking improvements",
      "Product and merchant snippet optimization",
      "Organic traffic scalability",
    ],

    projectsObj: "Project Objectives",
    projectfeatures: [
      "Boost Google Search visibility for product and category pages",
      "Increase organic clicks and impressions",
      "Strengthen structured data performance for Product, Review, and Merchant listings",
      "Improve crawlability and internal linking architecture",
      "Grow indexed keyword footprint and backlinks",
    ],

    images: [
      "assets/Slot_External_and_internal_Link.jpg",
      "assets/Slot_Merchant_Listing.jpg",
      "assets/Slot_product_Snippets_-1.jpg",
      "assets/Slot_Product_snippets_-2.jpg",
    ],
  },

  //

  //

  2: {
    title: "Samsung Experience Store",
    discription:
      "Successfully contributed to the growth and management of SES Nigeria’s eCommerce ecosystem through integrated digital marketing, SEO, advertising, and performance-driven online business strategies, supporting sustained online revenue growth and customer acquisition.",

    summaryTitle: "E-Commerce Management & Digital Growth — SES Nigeria",

    summary:
      "Managed and supported the growth of SES Nigeria’s eCommerce platform, focusing on online sales performance, digital marketing, customer acquisition, and overall website growth strategy across SEO, paid advertising, and performance optimization.",

    features: [
      "Managed day-to-day eCommerce operations",
      "Oversaw product visibility and online merchandising",
      "Managed SEO and organic traffic growth",
      "Executed Google Ads and Meta Ads campaigns",
      "Monitored website performance and customer engagement",
      "Supported conversion optimization and online sales growth",
      "Coordinated digital campaigns for Samsung product launches and promotions",
    ],

    images: ["assets/SES_Nigeria_GA4.png", "assets/SES_Website_-1.png"],
  },

  //

  3: {
    title: "Easywin Lotto",
    discription:
      "Led SEO optimization and organic growth strategies for EasyWin Nigeria, improving search visibility, keyword rankings, and organic traffic performance. Achieved over 94.8K clicks and 2.03M impressions through technical SEO, content optimization, keyword targeting, and mobile-first search improvements, contributing to stronger brand visibility and sustained organic growth across multiple African markets.",

    summaryTitle: "SEO Case Study — EasyWin Nigeria (easywin.ng)",

    summary:
      "Worked on improving the organic visibility, search performance, and technical SEO structure of EasyWin Nigeria, a betting and gaming platform operating across Nigeria and parts of Africa.",

    features: [
      "Organic traffic growth",
      "Technical SEO optimization",
      "Content visibility improvement",
      "Query ranking expansion",
      "Mobile search optimization",
      "Brand search dominance",
      "Search Console performance growth",
    ],

    images: [
      "assets/easywin (1).png",
      "assets/easywin (2).png",
      "assets/easywin (3).png",
      "assets/easywin (4).png",
      "assets/easywin (5).png",
      "assets/easywin (6).png",
      "assets/easywin (7).png",
    ],
  },
  //
  4: {
    title: "Samsung Experience Store",
    discription:
      "Successfully contributed to the growth and management of SES Nigeria’s eCommerce ecosystem through integrated digital marketing, SEO, advertising, and performance-driven online business strategies, supporting sustained online revenue growth and customer acquisition.",

    summaryTitle: "E-Commerce Management & Digital Growth — SES Nigeria",

    summary:
      "Managed and supported the growth of SES Nigeria’s eCommerce platform, focusing on online sales performance, digital marketing, customer acquisition, and overall website growth strategy across SEO, paid advertising, and performance optimization.",

    features: [
      "Managed day-to-day eCommerce operations",
      "Oversaw product visibility and online merchandising",
      "Managed SEO and organic traffic growth",
      "Executed Google Ads and Meta Ads campaigns",
      "Monitored website performance and customer engagement",
      "Supported conversion optimization and online sales growth",
      "Coordinated digital campaigns for Samsung product launches and promotions",
    ],

    images: ["assets/SES_Nigeria_GA4.png", "assets/SES_Website_-1.png"],
  },

  //

  5: {
    title: "Samsung Experience Store",
    discription:
      "Successfully contributed to the growth and management of SES Nigeria’s eCommerce ecosystem through integrated digital marketing, SEO, advertising, and performance-driven online business strategies, supporting sustained online revenue growth and customer acquisition.",

    summaryTitle: "E-Commerce Management & Digital Growth — SES Nigeria",

    summary:
      "Managed and supported the growth of SES Nigeria’s eCommerce platform, focusing on online sales performance, digital marketing, customer acquisition, and overall website growth strategy across SEO, paid advertising, and performance optimization.",

    features: [
      "Managed day-to-day eCommerce operations",
      "Oversaw product visibility and online merchandising",
      "Managed SEO and organic traffic growth",
      "Executed Google Ads and Meta Ads campaigns",
      "Monitored website performance and customer engagement",
      "Supported conversion optimization and online sales growth",
      "Coordinated digital campaigns for Samsung product launches and promotions",
    ],

    images: ["assets/SES_Nigeria_GA4.png", "assets/SES_Website_-1.png"],
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const project = projects[id];

if (project) {
  document.getElementById("title").textContent = project.title;
  document.getElementById("description").textContent = project.discription;
  document.getElementById("summaryTitle").textContent = project.summaryTitle;

  document.getElementById("summary").textContent = project.summary;

  const featuresList = document.getElementById("features");

  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  const galllery = document.getElementById("gallery");

  project.images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;
    gallery.appendChild(img);
  });
}

//
//
//
//
document.title = `${project.title} | HARDIN AGWU`;
