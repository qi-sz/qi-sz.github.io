import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    betterply,
    uhotel,
    coffee,
    nba,
    pneumonia,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Analyst",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "AI Engineer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Guest Service Agent",
      company_name: "Uhotel Fifth Avenue",
      icon: uhotel,
      iconBg: "#383E56",
      date: "June 2016– June 2021",
      points: [
        "Monitored hotel room sales and managed group bookings, resulting in the establishment of long-term business relationships with agencies and a 30% increase in revenue.",
        "Provided excellent customer service to accommodate guests' requests and handle complaints, leading to a 25% increase in guest loyalty and more positive reviews for the hotel",
        "Maintained up-to-date records of transactions related to front desk operations, improving the reception area workflow by implementing new organizational techniques initiative which reduced waiting time for customers by 35%",
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: "Betterply",
      icon: betterply,
      iconBg: "#E6DEDD",
      date: "February 2023– August 2023",
      points: [
        "Optimized excel functions significantly by improving efficiency and reducing redundancy, which cut down the wait time from 2 minutes to 1 second.",
        "Leveraged Apps Script and Google Sheets extensions to create a demo website, effectively transforming a Google spreadsheet into a simple database, which contributed to a 25% increase in revenue.",
        "Assembled and troubleshooted new computers, software, printers, and Wi-Fi routers for the sales team, enhancing team productivity by 40% and maintaining a smoother workflow.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pneumonia-Detection",
      description:
        "Identifying pneumonia in patients through image-based deep learning techniques. The project utilizes chest X-ray images to detect signs of pneumonia, aiming to assist in early diagnosis and treatment. The repository includes Jupyter Notebook files and PDFs detailing the methodology and findings.",
      tags: [
        {
          name: "TensorFlow",
          color: "blue-text-gradient",
        },
        {
          name: "NumPy",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: pneumonia,
      source_code_link: "https://github.com/nkbuddy/Pneumonia-Detection",
    },
    {
      name: "NBA Shooting Analysis",
      description:
        "Analyze NBA shooting data from the 2014-2015 season to determine if machine learning can accurately predict the success of a shot based on external factors within a coach's influence.",
      tags: [
        {
          name: "Scikit-learn",
          color: "blue-text-gradient",
        },
        {
          name: "XGBoost",
          color: "green-text-gradient",
        },
        {
          name: "Matplotlib & Seaborn",
          color: "pink-text-gradient",
        },
      ],
      image: nba,
      source_code_link: "https://github.com/nkbuddy/NBA-shooting",
    },
    {
      name: "Capstone Coffee Recommendation",
      description:
        "Developing a coffee recommendation system. The project involves web scraping over 1,000 coffee reviews from CoffeeReview.com, followed by data cleaning and exploratory data analysis (EDA). A key aspect of the analysis is examining the correlation between coffee prices and review scores using linear regression.",
      tags: [
        {
          name: "BeautifulSoup",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: coffee,
      source_code_link: "https://github.com/nkbuddy/coffee-recommendation-system",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };