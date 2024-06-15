
import {
    //services logos
    dashboard,
    increase,
    maintenance,
    cleaning,
    rate,
    support,

    //testimonials
    Face1,
    Face2,
    Face3,

    email,
    phone,
    location,
} from '../assets'

export const servicesData = [
      /* {
        img: dashboard,
        title: "Owners Portal",
        text: "We provide an owners portal that will help you keep track of your property's performance. You will be able to see how much money you are making and how your property is doing.",
      }, */
      {
        img: increase,
        title: "Increased Occupancy Rates",
        text: "We will help you increase your property's occupancy rates. We will help you get more bookings and make more money.",
        link: '/OccupancyRate'
      },
      {
        img: maintenance,
        title: "Maintenance",
        text: "We will help you maintain your property. We will make sure that everything is working properly and that your guests are happy",
        link: '/Maintenance'
      },
    {
        img: cleaning,
        title: "Home Cleaning",
        text: "We will help you clean your property. We will make sure that your property is clean and ready for your guests",
        link: '/HouseCleaning'
      },
    {
        img: rate,
        title: "5-Star Hosting",
        text: "We will help you provide 5-star hosting to your guests. We will make sure that your guests are happy and that they have a great experience",
        link: '/PremiumHosting'
      },
    {
        img: support,
        title: "24/7 Support",
        text: "We will provide you with 24/7 support. We will be there to help you with any questions or concerns that you may have",
        link: '/CustomerSupport'
      }
]

    export const infoData = [
        {
            link: "tel:+971-58-5885892",
            img: phone,
            title: 'Contact Details',
            text: '+971-58-5885892'
        },
        {
            id: 'email',
            link: "mailto:inquiry@marketech.com",
            img: email,
            title: 'Email',
            text: 'inquiry@marketech.com',
        },
        {
            link: "https://maps.app.goo.gl/ZQoww88RG6ttzxek7",
            img: location,
            title: 'Location',
            text: "Office 2704, 27st Floor, Fairmont Dubai, Al badaa, Sheikh Zayed Road, Dubai, United Arab Emirates"
        },
    ]

export const testimonials = [
    {
      name: 'John Doe',
      quote: 'This service was great, would definitely do it again.',
      image: Face1,
      rating: 5
    },
    {
      name: 'Jane Smith',
      quote: 'Highly recommend this company for their excellent service.',
      image: Face2,
      rating: 4
    },
    {
        name: 'Jane Smith',
        quote: 'Highly recommend this company for their excellent service.',
        image: Face2,
        rating: 4
      },
      {
        name: 'Jane Smith',
        quote: 'Highly recommend this company for their excellent service.',
        image: Face2,
        rating: 4
      },
  ];
  