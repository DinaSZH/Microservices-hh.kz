'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let skillsData = []
    const skills = [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "PHP",
      "Ruby",
      "Swift",
      "Kotlin",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "AWS",
      "Azure",
      "Docker",
      "Git",
      "Agile Methodology",
      "Scrum",
      "Project Management",
      "UI/UX Design",
      "Graphic Design",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Microsoft Office",
      "Data Analysis",
      "Machine Learning",
      "Artificial Intelligence",
      "Big Data",
      "Data Visualization",
      "Statistical Analysis",
      "Data Mining",
      "Deep Learning",
      "Natural Language Processing",
      "Cybersecurity",
      "Network Administration",
      "Penetration Testing",
      "Ethical Hacking",
      "Web Development",
      "Mobile App Development",
      "Responsive Design",
      "RESTful APIs",
      "GraphQL",
      "Test Driven Development (TDD)",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "DevOps",
      "Software Testing",
      "User Acceptance Testing (UAT)",
      "Front-end Development",
      "Back-end Development",
      "Full Stack Development",
      "Object-Oriented Programming (OOP)",
      "Functional Programming",
      "Data Structures",
      "Algorithms",
      "UI Testing",
      "UX Research",
      "Mobile UI Design",
      "A/B Testing",
      "SEO (Search Engine Optimization)",
      "SEM (Search Engine Marketing)",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Digital Advertising",
      "Copywriting",
      "Blogging",
      "Content Management Systems (CMS)",
      "E-commerce",
      "Payment Gateways",
      "Web Analytics",
      "Customer Relationship Management (CRM)",
      "Sales Force Automation (SFA)",
      "Supply Chain Management (SCM)",
      "Inventory Management",
      "Financial Analysis",
      "Budgeting and Forecasting",
      "Risk Management",
      "Business Intelligence",
      "Decision Making",
      "Leadership",
      "Teamwork",
      "Communication",
      "Time Management",
      "Problem Solving",
      "Creativity",
      "Adaptability",
      "Critical Thinking",
      "Emotional Intelligence",
      "Negotiation",
      "Presentation Skills",
      "Sales Skills",
      "Customer Service",
      "Strategic Planning",
      "Market Research",
      "Competitive Analysis",
      "Product Management",
      "User Experience (UX) Design",
      "User Interface (UI) Design",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Visual Design",
      "Interaction Design",
      "Information Architecture",
      "Content Strategy",
      "Mobile Design",
      "Design Thinking",
      "Agile Development",
      "Lean Methodology",
      "Product Roadmapping",
      "Quality Assurance (QA)",
      "User Research",
      "Branding",
      "Marketing Strategy",
      "Market Segmentation",
      "Consumer Behavior",
      "Public Relations (PR)",
      "Event Planning",
      "Media Planning",
      "Campaign Management",
      "Social Media Management",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Content Writing",
      "Video Editing",
      "Photography",
      "Illustration",
      "Motion Graphics",
      "3D Modeling",
      "Virtual Reality (VR)"
    ];
    
    for (let i = 0; i < skills.length; i++) {
      skillsData.push({ name:  skills[i]});
    }

    await queryInterface.bulkInsert('Skills', skillsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
