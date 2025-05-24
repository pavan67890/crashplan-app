const engineeringDisciplines = {
  "CSE": {
    "id": "CSE",
    "name": "Computer Science Engineering",
    "description": "Computer Science Engineering focuses on the study of computer systems, software development, and the theoretical foundations of computation.",
    "image": "/images/disciplines/cse.png",
    "courses": {
      "Data Structures and Algorithms": {
        "id": "Data Structures and Algorithms",
        "name": "Data Structures and Algorithms",
        "description": "Study of data organization, management, and storage formats, along with algorithm design and analysis.",
        "learningTime": "3–6 months",
        "difficulty": 8,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Basic Programming",
          "Discrete Mathematics"
        ],
        "keyTopics": [
          "Trees",
          "Graphs",
          "Sorting Algorithms",
          "Dynamic Programming"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Introduction to Algorithms by Cormen",
          "Data Structures and Algorithm Analysis in C++ by Mark Allen Weiss"
        ],
        "roles": [
          {
            "id": "CSE-DSA-1",
            "name": "Software Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Java",
              "C++",
              "Python"
            ],
            "toolsAndTechnologies": [
              "Git",
              "JIRA",
              "Eclipse"
            ],
            "certificationRecommendations": [
              "Oracle Certified Professional",
              "AWS Certified Developer"
            ],
            "keyResponsibilities": [
              "Develop and maintain software applications",
              "Collaborate with cross-functional teams",
              "Optimize algorithms for performance"
            ],
            "relatedRoles": [
              "Backend Developer",
              "Frontend Developer",
              "Full Stack Developer",
              "DevOps Engineer",
              "Mobile App Developer",
              "Game Developer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CSE-DSA-2",
            "name": "Data Scientist",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Statistics",
              "Machine Learning",
              "Data Visualization"
            ],
            "toolsAndTechnologies": [
              "Python",
              "R",
              "Tableau"
            ],
            "certificationRecommendations": [
              "Certified Data Scientist",
              "Google Data Analytics"
            ],
            "keyResponsibilities": [
              "Analyze complex datasets",
              "Build predictive models",
              "Communicate insights to stakeholders"
            ],
            "relatedRoles": [
              "Machine Learning Engineer",
              "Business Analyst",
              "Data Engineer",
              "AI Researcher",
              "Quantitative Analyst",
              "Statistician"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Web Development": {
        "id": "Web Development",
        "name": "Web Development",
        "description": "Focuses on the development of applications and services for the World Wide Web.",
        "learningTime": "4–8 months",
        "difficulty": 7,
        "logicalThinking": 6,
        "memoryBased": 4,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "keyTopics": [
          "Frontend Frameworks",
          "Backend Development",
          "RESTful APIs",
          "Responsive Design"
        ],
        "topOpenSources": [
          "FreeCodeCamp",
          "Codecademy",
          "Udacity"
        ],
        "recommendedBooks": [
          "Eloquent JavaScript by Marijn Haverbeke",
          "You Don’t Know JS by Kyle Simpson"
        ],
        "roles": [
          {
            "id": "CSE-WD-1",
            "name": "Frontend Developer",
            "currentSalaryINR": "₹6–12 LPA",
            "skills": [
              "HTML",
              "CSS",
              "JavaScript"
            ],
            "toolsAndTechnologies": [
              "React",
              "Vue.js",
              "Bootstrap"
            ],
            "certificationRecommendations": [
              "Certified Web Developer",
              "JavaScript Certification"
            ],
            "keyResponsibilities": [
              "Build user interfaces",
              "Optimize web applications for speed",
              "Collaborate with designers"
            ],
            "relatedRoles": [
              "UI/UX Designer",
              "Full Stack Developer",
              "Web Designer",
              "Mobile App Developer",
              "SEO Specialist",
              "Content Manager"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹2 LPA",
              "year3": "₹4 LPA",
              "year5": "₹6 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CSE-WD-2",
            "name": "Full Stack Developer",
            "currentSalaryINR": "₹10–18 LPA",
            "skills": [
              "Node.js",
              "Express",
              "MongoDB"
            ],
            "toolsAndTechnologies": [
              "Git",
              "Docker",
              "Postman"
            ],
            "certificationRecommendations": [
              "Full Stack Web Developer Certification",
              "Node.js Certification"
            ],
            "keyResponsibilities": [
              "Develop both client and server software",
              "Manage database and server-side logic",
              "Ensure responsiveness of applications"
            ],
            "relatedRoles": [
              "Software Engineer",
              "DevOps Engineer",
              "Backend Developer",
              "API Developer",
              "Cloud Engineer",
              "Mobile App Developer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Operating Systems": {
        "id": "Operating Systems",
        "name": "Operating Systems",
        "description": "Study of the principles and design of operating systems.",
        "learningTime": "4–8 months",
        "difficulty": 7,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Computer Architecture",
          "Data Structures"
        ],
        "keyTopics": [
          "Process Management",
          "Memory Management",
          "File Systems",
          "Concurrency"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Operating System Concepts by Silberschatz",
          "Modern Operating Systems by Tanenbaum"
        ],
        "roles": [
          {
            "id": "CSE-OS-1",
            "name": "Systems Programmer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "C/C++",
              "Assembly Language",
              "Kernel Development"
            ],
            "toolsAndTechnologies": [
              "GDB",
              "Makefile",
              "Linux"
            ],
            "certificationRecommendations": [
              "Linux Professional Institute Certification",
              "CompTIA Linux+"
            ],
            "keyResponsibilities": [
              "Develop and maintain operating system components",
              "Optimize system performance",
              "Collaborate with hardware engineers"
            ],
            "relatedRoles": [
              "Embedded Systems Engineer",
              "Firmware Engineer",
              "DevOps Engineer",
              "Network Engineer",
              "Cloud Engineer",
              "Security Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "CSE-OS-2",
            "name": "DevOps Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "CI/CD",
              "Containerization",
              "Scripting"
            ],
            "toolsAndTechnologies": [
              "Docker",
              "Kubernetes",
              "Jenkins"
            ],
            "certificationRecommendations": [
              "AWS Certified DevOps Engineer",
              "Docker Certified Associate"
            ],
            "keyResponsibilities": [
              "Automate deployment processes",
              "Monitor system performance",
              "Collaborate with development teams"
            ],
            "relatedRoles": [
              "Systems Administrator",
              "Cloud Engineer",
              "Site Reliability Engineer",
              "Network Engineer",
              "Security Engineer",
              "Software Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Database Management": {
        "id": "Database Management",
        "name": "Database Management",
        "description": "Study of database design, implementation, and management.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "SQL",
          "Data Structures"
        ],
        "keyTopics": [
          "Database Design",
          "Normalization",
          "SQL Queries"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Database System Concepts by Silberschatz",
          "SQL Fundamentals by John Viescas"
        ],
        "roles": [
          {
            "id": "CSE-DB-1",
            "name": "Database Administrator",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "SQL",
              "Database Design",
              "Backup and Recovery"
            ],
            "toolsAndTechnologies": [
              "Oracle",
              "MySQL",
              "PostgreSQL"
            ],
            "certificationRecommendations": [
              "Oracle Certified Professional",
              "Microsoft Certified: Azure Database Administrator"
            ],
            "keyResponsibilities": [
              "Manage database systems",
              "Ensure data integrity",
              "Optimize database performance"
            ],
            "relatedRoles": [
              "Data Analyst",
              "Data Engineer",
              "Business Intelligence Analyst",
              "ETL Developer",
              "Data Scientist",
              "Cloud Database Administrator"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CSE-DB-2",
            "name": "Data Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "ETL Processes",
              "Data Warehousing",
              "Big Data Technologies"
            ],
            "toolsAndTechnologies": [
              "Apache Hadoop",
              "Apache Spark",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Data Engineer",
              "AWS Certified Data Analytics"
            ],
            "keyResponsibilities": [
              "Design and maintain data pipelines",
              "Ensure data quality",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Analyst",
              "Database Administrator",
              "Big Data Engineer",
              "Business Intelligence Developer",
              "Machine Learning Engineer",
              "Data Architect"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Software Testing": {
        "id": "Software Testing",
        "name": "Software Testing",
        "description": "Focuses on the methodologies and tools used for software testing.",
        "learningTime": "4–8 months",
        "difficulty": 6,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 7,
        "overallRating": 7,
        "prerequisites": [
          "Software Engineering",
          "Programming"
        ],
        "keyTopics": [
          "Test Automation",
          "Manual Testing",
          "Performance Testing"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Lessons Learned in Software Testing by Cem Kaner",
          "Agile Testing by Lisa Crispin"
        ],
        "roles": [
          {
            "id": "CSE-ST-1",
            "name": "QA Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Test Automation",
              "Selenium",
              "JIRA"
            ],
            "toolsAndTechnologies": [
              "Selenium",
              "JMeter",
              "Postman"
            ],
            "certificationRecommendations": [
              "ISTQB Certified Tester",
              "Certified Software Tester"
            ],
            "keyResponsibilities": [
              "Design test plans",
              "Execute test cases",
              "Report bugs and issues"
            ],
            "relatedRoles": [
              "Test Automation Engineer",
              "Performance Tester",
              "Software Developer in Test",
              "Release Manager",
              "DevOps Engineer",
              "Product Manager"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CSE-ST-2",
            "name": "Test Automation Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Selenium",
              "Cucumber",
              "TestNG"
            ],
            "toolsAndTechnologies": [
              "Jenkins",
              "Git",
              "Docker"
            ],
            "certificationRecommendations": [
              "Certified Selenium Tester",
              "Automation Testing Certification"
            ],
            "keyResponsibilities": [
              "Develop automated test scripts",
              "Integrate testing into CI/CD pipelines",
              "Collaborate with development teams"
            ],
            "relatedRoles": [
              "QA Engineer",
              "Performance Tester",
              "DevOps Engineer",
              "Software Developer in Test",
              "Release Manager",
              "Product Manager"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Cloud Computing": {
        "id": "Cloud Computing",
        "name": "Cloud Computing",
        "description": "Focuses on the delivery of computing services over the internet.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Networking Fundamentals",
          "Operating Systems"
        ],
        "keyTopics": [
          "Cloud Architecture",
          "Service Models",
          "Deployment Models"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Cloud Computing: Concepts, Technology & Architecture by Thomas Erl",
          "Architecting the Cloud by Michael J. Kavis"
        ],
        "roles": [
          {
            "id": "CSE-CC-1",
            "name": "Cloud Solutions Architect",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Cloud Architecture",
              "AWS",
              "Azure"
            ],
            "toolsAndTechnologies": [
              "AWS",
              "Azure",
              "Google Cloud"
            ],
            "certificationRecommendations": [
              "AWS Certified Solutions Architect",
              "Microsoft Certified: Azure Solutions Architect Expert"
            ],
            "keyResponsibilities": [
              "Design cloud solutions",
              "Optimize cloud infrastructure",
              "Collaborate with development teams"
            ],
            "relatedRoles": [
              "Cloud Engineer",
              "DevOps Engineer",
              "Systems Administrator",
              "Network Engineer",
              "Security Engineer",
              "Data Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "CSE-CC-2",
            "name": "Cloud Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Cloud Services",
              "Scripting",
              "Networking"
            ],
            "toolsAndTechnologies": [
              "AWS CLI",
              "Terraform",
              "Ansible"
            ],
            "certificationRecommendations": [
              "AWS Certified Cloud Practitioner",
              "Google Cloud Professional Cloud Architect"
            ],
            "keyResponsibilities": [
              "Manage cloud infrastructure",
              "Implement cloud solutions",
              "Monitor cloud performance"
            ],
            "relatedRoles": [
              "Cloud Solutions Architect",
              "DevOps Engineer",
              "Systems Administrator",
              "Network Engineer",
              "Security Engineer",
              "Data Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Computer Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      }
    }
  },
  "ECE": {
    "id": "ECE",
    "name": "Electronics and Communication Engineering",
    "description": "Electronics and Communication Engineering deals with the design and development of electronic circuits, devices, and communication systems.",
    "image": "/images/disciplines/ece.png",
    "courses": {
      "Digital Signal Processing": {
        "id": "Digital Signal Processing",
        "name": "Digital Signal Processing",
        "description": "Study of the manipulation of signals to improve their efficiency and performance.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Signals and Systems",
          "Linear Algebra"
        ],
        "keyTopics": [
          "Fourier Transform",
          "Z-Transform",
          "Filter Design",
          "Sampling Theorem"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Digital Signal Processing by Proakis",
          "Signals and Systems by Alan V. Oppenheim"
        ],
        "roles": [
          {
            "id": "ECE-DSP-1",
            "name": "Signal Processing Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "MATLAB",
              "Python",
              "DSP Algorithms"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Simulink",
              "LabVIEW"
            ],
            "certificationRecommendations": [
              "MATLAB Certification",
              "DSP Certification"
            ],
            "keyResponsibilities": [
              "Design and implement signal processing algorithms",
              "Analyze signal data",
              "Collaborate with hardware engineers"
            ],
            "relatedRoles": [
              "Embedded Systems Engineer",
              "Telecommunications Engineer",
              "RF Engineer",
              "Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ECE-DSP-2",
            "name": "Telecommunications Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Network Protocols",
              "RF Design",
              "Signal Analysis"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Cisco Packet Tracer",
              "Ansys HFSS"
            ],
            "certificationRecommendations": [
              "Cisco Certified Network Associate",
              "Telecommunications Certification"
            ],
            "keyResponsibilities": [
              "Design and optimize communication systems",
              "Conduct signal analysis",
              "Work with cross-functional teams"
            ],
            "relatedRoles": [
              "Network Engineer",
              "RF Engineer",
              "Systems Engineer",
              "Signal Processing Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Embedded Systems": {
        "id": "Embedded Systems",
        "name": "Embedded Systems",
        "description": "Focuses on the design and development of embedded systems for various applications.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Microcontrollers",
          "C Programming"
        ],
        "keyTopics": [
          "Microcontroller Programming",
          "Real-Time Operating Systems",
          "Sensor Integration"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Embedded Systems: Introduction to the MSP432 Microcontroller by Jonathan W. Valvano",
          "Programming Embedded Systems in C and C++ by Michael Barr"
        ],
        "roles": [
          {
            "id": "ECE-ES-1",
            "name": "Embedded Software Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "C/C++",
              "RTOS",
              "Microcontrollers"
            ],
            "toolsAndTechnologies": [
              "Keil",
              "IAR Embedded Workbench",
              "Arduino"
            ],
            "certificationRecommendations": [
              "Embedded Systems Certification",
              "C Programming Certification"
            ],
            "keyResponsibilities": [
              "Develop embedded software for devices",
              "Test and debug embedded systems",
              "Collaborate with hardware teams"
            ],
            "relatedRoles": [
              "Firmware Engineer",
              "Systems Engineer",
              "IoT Developer",
              "Robotics Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ECE-ES-2",
            "name": "Firmware Engineer",
            "currentSalaryINR": "₹10–18 LPA",
            "skills": [
              "Embedded C",
              "Debugging",
              "Hardware Interfacing"
            ],
            "toolsAndTechnologies": [
              "JTAG",
              "Oscilloscope",
              "Logic Analyzer"
            ],
            "certificationRecommendations": [
              "Firmware Development Certification",
              "Embedded Systems Certification"
            ],
            "keyResponsibilities": [
              "Develop firmware for embedded devices",
              "Conduct hardware-software integration",
              "Optimize firmware performance"
            ],
            "relatedRoles": [
              "Embedded Systems Engineer",
              "Software Engineer",
              "IoT Developer",
              "Robotics Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Control Systems": {
        "id": "Control Systems",
        "name": "Control Systems",
        "description": "Study of the behavior of dynamic systems and the design of controllers.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Signals and Systems",
          "Mathematics"
        ],
        "keyTopics": [
          "Feedback Control",
          "Stability Analysis",
          "PID Controllers"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Control Systems Engineering by Norman S. Nise",
          "Modern Control Engineering by Ogata"
        ],
        "roles": [
          {
            "id": "ECE-CS-1",
            "name": "Control Systems Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Control Theory",
              "MATLAB",
              "Simulink"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Simulink",
              "LabVIEW"
            ],
            "certificationRecommendations": [
              "Control Systems Certification",
              "MATLAB Certification"
            ],
            "keyResponsibilities": [
              "Design control systems",
              "Analyze system stability",
              "Collaborate with design teams"
            ],
            "relatedRoles": [
              "Automation Engineer",
              "Embedded Systems Engineer",
              "Robotics Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ECE-CS-2",
            "name": "Automation Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "PLC Programming",
              "Control Systems",
              "Robotics"
            ],
            "toolsAndTechnologies": [
              "PLC",
              "SCADA",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Automation Engineer",
              "Control Systems Certification"
            ],
            "keyResponsibilities": [
              "Develop automation solutions",
              "Test and validate automation systems",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Control Systems Engineer",
              "Robotics Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Telecommunications": {
        "id": "Telecommunications",
        "name": "Telecommunications",
        "description": "Focuses on the transmission of information across channels.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Signals and Systems",
          "Electromagnetics"
        ],
        "keyTopics": [
          "Network Design",
          "Wireless Communication",
          "Optical Fiber Communication"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Wireless Communications by Theodore S. Rappaport",
          "Optical Fiber Communications by Gerd Keiser"
        ],
        "roles": [
          {
            "id": "ECE-TC-1",
            "name": "Telecommunications Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Network Protocols",
              "RF Design",
              "Signal Analysis"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Cisco Packet Tracer",
              "Ansys HFSS"
            ],
            "certificationRecommendations": [
              "Cisco Certified Network Associate",
              "Telecommunications Certification"
            ],
            "keyResponsibilities": [
              "Design and optimize communication systems",
              "Conduct signal analysis",
              "Work with cross-functional teams"
            ],
            "relatedRoles": [
              "Network Engineer",
              "RF Engineer",
              "Systems Engineer",
              "Signal Processing Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "ECE-TC-2",
            "name": "Network Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Network Configuration",
              "Troubleshooting",
              "Security Protocols"
            ],
            "toolsAndTechnologies": [
              "Cisco Routers",
              "Wireshark",
              "SolarWinds"
            ],
            "certificationRecommendations": [
              "Cisco Certified Network Associate",
              "CompTIA Network+"
            ],
            "keyResponsibilities": [
              "Manage network infrastructure",
              "Ensure network security",
              "Monitor network performance"
            ],
            "relatedRoles": [
              "Telecommunications Engineer",
              "Systems Administrator",
              "Security Analyst",
              "Cloud Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      },
      "Microelectronics": {
        "id": "Microelectronics",
        "name": "Microelectronics",
        "description": "Focuses on the design and fabrication of small electronic components.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Solid State Physics",
          "Circuit Theory"
        ],
        "keyTopics": [
          "Semiconductor Devices",
          "Integrated Circuits",
          "VLSI Design"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Microelectronic Circuits by Sedra and Smith",
          "CMOS VLSI Design by Weste and Harris"
        ],
        "roles": [
          {
            "id": "ECE-ME-1",
            "name": "Microelectronics Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "VLSI Design",
              "Circuit Simulation",
              "Semiconductor Physics"
            ],
            "toolsAndTechnologies": [
              "Cadence",
              "SPICE",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Microelectronics Engineer",
              "VLSI Design Certification"
            ],
            "keyResponsibilities": [
              "Design microelectronic circuits",
              "Conduct simulations",
              "Collaborate with fabrication teams"
            ],
            "relatedRoles": [
              "VLSI Design Engineer",
              "Embedded Systems Engineer",
              "Firmware Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "ECE-ME-2",
            "name": "VLSI Design Engineer",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Digital Design",
              "FPGA Programming",
              "Circuit Layout"
            ],
            "toolsAndTechnologies": [
              "Cadence",
              "Xilinx",
              "Altera"
            ],
            "certificationRecommendations": [
              "VLSI Design Certification",
              "FPGA Certification"
            ],
            "keyResponsibilities": [
              "Design VLSI circuits",
              "Conduct layout design",
              "Collaborate with testing teams"
            ],
            "relatedRoles": [
              "Microelectronics Engineer",
              "Embedded Systems Engineer",
              "Firmware Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Electronics Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      }
    }
  },
  "ME": {
    "id": "ME",
    "name": "Mechanical Engineering",
    "description": "Mechanical Engineering involves the design, analysis, and manufacturing of mechanical systems.",
    "image": "/images/disciplines/me.png",
    "courses": {
      "Thermodynamics": {
        "id": "Thermodynamics",
        "name": "Thermodynamics",
        "description": "Study of energy, heat, and work interactions in mechanical systems.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Basic Physics",
          "Calculus"
        ],
        "keyTopics": [
          "Laws of Thermodynamics",
          "Heat Transfer",
          "Refrigeration Cycles"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Thermodynamics: An Engineering Approach by Yunus Çengel",
          "Fundamentals of Thermodynamics by Richard Sonntag"
        ],
        "roles": [
          {
            "id": "ME-TH-1",
            "name": "Thermal Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Heat Transfer",
              "Thermal Analysis",
              "Fluid Mechanics"
            ],
            "toolsAndTechnologies": [
              "ANSYS",
              "MATLAB",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Thermal Engineer",
              "ANSYS Certification"
            ],
            "keyResponsibilities": [
              "Design thermal systems",
              "Conduct thermal simulations",
              "Optimize energy efficiency"
            ],
            "relatedRoles": [
              "HVAC Engineer",
              "Energy Consultant",
              "Mechanical Engineer",
              "Project Engineer",
              "Systems Engineer",
              "Design Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ME-TH-2",
            "name": "HVAC Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "HVAC Design",
              "Refrigeration",
              "Energy Management"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "Revit",
              "Trane Software"
            ],
            "certificationRecommendations": [
              "HVAC Certification",
              "LEED Certification"
            ],
            "keyResponsibilities": [
              "Design HVAC systems",
              "Conduct energy audits",
              "Ensure compliance with regulations"
            ],
            "relatedRoles": [
              "Mechanical Engineer",
              "Energy Consultant",
              "Project Engineer",
              "Systems Engineer",
              "Design Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Fluid Mechanics": {
        "id": "Fluid Mechanics",
        "name": "Fluid Mechanics",
        "description": "Study of fluids and the forces acting on them, essential for various engineering applications.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Basic Physics",
          "Calculus"
        ],
        "keyTopics": [
          "Fluid Statics",
          "Fluid Dynamics",
          "Bernoulli's Equation"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Fluid Mechanics by Frank M. White",
          "Hydraulics and Fluid Mechanics by R. K. Bansal"
        ],
        "roles": [
          {
            "id": "ME-FM-1",
            "name": "Hydraulic Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Hydraulic Systems",
              "Fluid Dynamics",
              "Piping Design"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "ANSYS Fluent",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Hydraulic Engineer",
              "Fluid Mechanics Certification"
            ],
            "keyResponsibilities": [
              "Design hydraulic systems",
              "Analyze fluid flow",
              "Collaborate with project teams"
            ],
            "relatedRoles": [
              "Mechanical Engineer",
              "Civil Engineer",
              "Project Engineer",
              "Systems Engineer",
              "Design Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ME-FM-2",
            "name": "Piping Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Piping Design",
              "Fluid Mechanics",
              "Stress Analysis"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "CAESAR II",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Piping Design Certification",
              "Fluid Mechanics Certification"
            ],
            "keyResponsibilities": [
              "Design piping systems",
              "Conduct stress analysis",
              "Ensure compliance with standards"
            ],
            "relatedRoles": [
              "Mechanical Engineer",
              "Project Engineer",
              "Systems Engineer",
              "Quality Control Engineer",
              "Design Engineer",
              "Energy Consultant"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Machine Design": {
        "id": "Machine Design",
        "name": "Machine Design",
        "description": "Focuses on the design and analysis of mechanical components and systems.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Engineering Mechanics",
          "Material Science"
        ],
        "keyTopics": [
          "Stress Analysis",
          "Fatigue Design",
          "Failure Theories"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Machine Design: An Integrated Approach by Norton",
          "Shigley's Mechanical Engineering Design by Richard Budynas"
        ],
        "roles": [
          {
            "id": "ME-MD-1",
            "name": "Machine Design Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "CAD Software",
              "Finite Element Analysis",
              "Material Selection"
            ],
            "toolsAndTechnologies": [
              "SolidWorks",
              "ANSYS",
              "AutoCAD"
            ],
            "certificationRecommendations": [
              "Certified Machine Design Engineer",
              "CAD Certification"
            ],
            "keyResponsibilities": [
              "Design mechanical components",
              "Conduct stress analysis",
              "Collaborate with manufacturing teams"
            ],
            "relatedRoles": [
              "Mechanical Engineer",
              "Product Designer",
              "Systems Engineer",
              "Quality Control Engineer",
              "Project Engineer",
              "Manufacturing Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ME-MD-2",
            "name": "Product Design Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "3D Modeling",
              "Prototyping",
              "User-Centered Design"
            ],
            "toolsAndTechnologies": [
              "SolidWorks",
              "CATIA",
              "Fusion 360"
            ],
            "certificationRecommendations": [
              "Certified Product Design Engineer",
              "CAD Certification"
            ],
            "keyResponsibilities": [
              "Develop product designs",
              "Create prototypes",
              "Collaborate with marketing teams"
            ],
            "relatedRoles": [
              "Machine Design Engineer",
              "Mechanical Engineer",
              "Systems Engineer",
              "Quality Control Engineer",
              "Manufacturing Engineer",
              "Project Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Manufacturing Processes": {
        "id": "Manufacturing Processes",
        "name": "Manufacturing Processes",
        "description": "Focuses on the methods and techniques used in manufacturing.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Material Science",
          "Engineering Mechanics"
        ],
        "keyTopics": [
          "Casting",
          "Machining",
          "Welding"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Manufacturing Engineering and Technology by Serope Kalpakjian",
          "Fundamentals of Manufacturing Processes by J. Barry DuVall"
        ],
        "roles": [
          {
            "id": "ME-MP-1",
            "name": "Manufacturing Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Process Optimization",
              "Quality Control",
              "Lean Manufacturing"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "SolidWorks",
              "MS Project"
            ],
            "certificationRecommendations": [
              "Certified Manufacturing Engineer",
              "Lean Six Sigma Certification"
            ],
            "keyResponsibilities": [
              "Optimize manufacturing processes",
              "Conduct quality assessments",
              "Collaborate with production teams"
            ],
            "relatedRoles": [
              "Production Engineer",
              "Quality Control Engineer",
              "Process Engineer",
              "Project Engineer",
              "Systems Engineer",
              "Design Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "ME-MP-2",
            "name": "Process Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Process Design",
              "Quality Assurance",
              "Safety Management"
            ],
            "toolsAndTechnologies": [
              "MS Project",
              "AutoCAD",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Process Engineer",
              "Lean Six Sigma Certification"
            ],
            "keyResponsibilities": [
              "Design manufacturing processes",
              "Ensure compliance with safety standards",
              "Conduct process audits"
            ],
            "relatedRoles": [
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Production Engineer",
              "Project Engineer",
              "Systems Engineer",
              "Design Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Robotics": {
        "id": "Robotics",
        "name": "Robotics",
        "description": "Study of robot design, construction, operation, and use.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Control Systems",
          "Programming"
        ],
        "keyTopics": [
          "Robot Kinematics",
          "Control Systems",
          "Sensors and Actuators"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Robotics: Modelling, Planning and Control by Bruno Siciliano",
          "Introduction to Robotics: Mechanics and Control by John J. Craig"
        ],
        "roles": [
          {
            "id": "ME-RO-1",
            "name": "Robotics Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Robot Programming",
              "Control Systems",
              "Sensor Integration"
            ],
            "toolsAndTechnologies": [
              "ROS",
              "MATLAB",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Robotics Engineer",
              "Robotics Certification"
            ],
            "keyResponsibilities": [
              "Design and develop robotic systems",
              "Test and validate robots",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Automation Engineer",
              "AI Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "ME-RO-2",
            "name": "Automation Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Automation Tools",
              "Control Systems",
              "Programming"
            ],
            "toolsAndTechnologies": [
              "PLC",
              "SCADA",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Automation Engineer",
              "Robotics Certification"
            ],
            "keyResponsibilities": [
              "Develop automation solutions",
              "Test and validate automation systems",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Robotics Engineer",
              "AI Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Mechanical Engineering",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      }
    }
  },
  "CE": {
    "id": "CE",
    "name": "Civil Engineering",
    "description": "Civil Engineering involves the design, construction, and maintenance of the physical and naturally built environment.",
    "image": "/images/disciplines/ce.png",
    "courses": {
      "Structural Engineering": {
        "id": "Structural Engineering",
        "name": "Structural Engineering",
        "description": "Focuses on the design and analysis of structures to ensure they can withstand loads and forces.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Engineering Mechanics",
          "Material Science"
        ],
        "keyTopics": [
          "Load Analysis",
          "Structural Dynamics",
          "Finite Element Analysis"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Structural Analysis by Russell C. Hibbeler",
          "Design of Reinforced Concrete by Jack C. McCormac"
        ],
        "roles": [
          {
            "id": "CE-SE-1",
            "name": "Structural Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "AutoCAD",
              "STAAD Pro",
              "SAP2000"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "Revit",
              "ETABS"
            ],
            "certificationRecommendations": [
              "Certified Structural Engineer",
              "LEED Certification"
            ],
            "keyResponsibilities": [
              "Design structural systems",
              "Conduct load calculations",
              "Collaborate with architects"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Project Manager",
              "Site Engineer",
              "Construction Manager",
              "Quality Control Engineer",
              "Geotechnical Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-SE-2",
            "name": "Project Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Project Management",
              "Cost Estimation",
              "Risk Management"
            ],
            "toolsAndTechnologies": [
              "MS Project",
              "Primavera",
              "AutoCAD"
            ],
            "certificationRecommendations": [
              "Project Management Professional (PMP)",
              "Certified Construction Manager"
            ],
            "keyResponsibilities": [
              "Oversee construction projects",
              "Manage project timelines",
              "Ensure compliance with safety regulations"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Site Engineer",
              "Construction Manager",
              "Quality Control Engineer",
              "Geotechnical Engineer",
              "Environmental Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Geotechnical Engineering": {
        "id": "Geotechnical Engineering",
        "name": "Geotechnical Engineering",
        "description": "Focuses on the behavior of earth materials and their interaction with structures.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Soil Mechanics",
          "Engineering Mechanics"
        ],
        "keyTopics": [
          "Soil Properties",
          "Foundation Design",
          "Slope Stability"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Principles of Geotechnical Engineering by Braja M. Das",
          "Soil Mechanics by R. F. Craig"
        ],
        "roles": [
          {
            "id": "CE-GE-1",
            "name": "Geotechnical Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Soil Analysis",
              "Foundation Design",
              "Site Investigation"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "PLAXIS",
              "Geostudio"
            ],
            "certificationRecommendations": [
              "Geotechnical Engineering Certification",
              "Soil Mechanics Certification"
            ],
            "keyResponsibilities": [
              "Conduct soil tests",
              "Design foundations",
              "Analyze site conditions"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Structural Engineer",
              "Site Engineer",
              "Environmental Engineer",
              "Construction Manager",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-GE-2",
            "name": "Site Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Construction Management",
              "Site Supervision",
              "Quality Control"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "MS Project",
              "Primavera"
            ],
            "certificationRecommendations": [
              "Certified Construction Manager",
              "Site Management Certification"
            ],
            "keyResponsibilities": [
              "Supervise construction activities",
              "Ensure quality standards",
              "Coordinate with contractors"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Project Engineer",
              "Geotechnical Engineer",
              "Environmental Engineer",
              "Quality Control Engineer",
              "Construction Manager"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Transportation Engineering": {
        "id": "Transportation Engineering",
        "name": "Transportation Engineering",
        "description": "Focuses on the design and management of transportation systems.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Traffic Engineering",
          "Geometric Design"
        ],
        "keyTopics": [
          "Traffic Flow Theory",
          "Highway Design",
          "Public Transportation Systems"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Traffic Engineering by Roger P. Roess",
          "Transportation Engineering: An Introduction by C. S. Papacostas"
        ],
        "roles": [
          {
            "id": "CE-TE-1",
            "name": "Transportation Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Traffic Analysis",
              "Highway Design",
              "Public Transport Planning"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "VISSIM",
              "Synchro"
            ],
            "certificationRecommendations": [
              "Certified Transportation Engineer",
              "Traffic Engineering Certification"
            ],
            "keyResponsibilities": [
              "Design transportation systems",
              "Conduct traffic studies",
              "Collaborate with urban planners"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Urban Planner",
              "Traffic Analyst",
              "Site Engineer",
              "Project Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-TE-2",
            "name": "Traffic Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Traffic Modeling",
              "Signal Design",
              "Data Analysis"
            ],
            "toolsAndTechnologies": [
              "Synchro",
              "VISSIM",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Traffic Engineering Certification",
              "Certified Transportation Engineer"
            ],
            "keyResponsibilities": [
              "Analyze traffic patterns",
              "Design traffic signals",
              "Collaborate with city planners"
            ],
            "relatedRoles": [
              "Transportation Engineer",
              "Civil Engineer",
              "Urban Planner",
              "Site Engineer",
              "Project Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Environmental Engineering": {
        "id": "Environmental Engineering",
        "name": "Environmental Engineering",
        "description": "Focuses on the protection of the environment by reducing waste and pollution.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Chemistry",
          "Biology"
        ],
        "keyTopics": [
          "Water Resources Management",
          "Waste Management",
          "Air Quality Control"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Introduction to Environmental Engineering by Mackenzie L. Davis",
          "Environmental Engineering: Fundamentals, Sustainability, Design by James R. Mihelcic"
        ],
        "roles": [
          {
            "id": "CE-EE-1",
            "name": "Environmental Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Environmental Impact Assessment",
              "Water Quality Analysis",
              "Waste Management"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "GIS",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Environmental Engineer",
              "LEED Certification"
            ],
            "keyResponsibilities": [
              "Conduct environmental assessments",
              "Design waste management systems",
              "Collaborate with regulatory agencies"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Water Resources Engineer",
              "Sustainability Consultant",
              "Site Engineer",
              "Project Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-EE-2",
            "name": "Water Resources Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Hydrology",
              "Water Quality Management",
              "Irrigation Systems"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "GIS",
              "Hydraulic Modeling Software"
            ],
            "certificationRecommendations": [
              "Certified Water Resources Engineer",
              "LEED Certification"
            ],
            "keyResponsibilities": [
              "Design water management systems",
              "Conduct hydrological studies",
              "Collaborate with environmental agencies"
            ],
            "relatedRoles": [
              "Environmental Engineer",
              "Civil Engineer",
              "Site Engineer",
              "Project Engineer",
              "Quality Control Engineer",
              "Sustainability Consultant"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Construction Management": {
        "id": "Construction Management",
        "name": "Construction Management",
        "description": "Focuses on the planning, coordination, and control of a construction project.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Project Management",
          "Construction Techniques"
        ],
        "keyTopics": [
          "Construction Planning",
          "Cost Estimation",
          "Risk Management"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Construction Management: Principles and Practice by Alan Griffith",
          "Project Management for Construction by Chris Hendrickson"
        ],
        "roles": [
          {
            "id": "CE-CM-1",
            "name": "Construction Manager",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Project Management",
              "Cost Control",
              "Quality Assurance"
            ],
            "toolsAndTechnologies": [
              "MS Project",
              "Primavera",
              "AutoCAD"
            ],
            "certificationRecommendations": [
              "Project Management Professional (PMP)",
              "Certified Construction Manager"
            ],
            "keyResponsibilities": [
              "Oversee construction projects",
              "Manage project budgets",
              "Ensure compliance with safety regulations"
            ],
            "relatedRoles": [
              "Civil Engineer",
              "Site Engineer",
              "Project Engineer",
              "Quality Control Engineer",
              "Geotechnical Engineer",
              "Environmental Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "CE-CM-2",
            "name": "Site Manager",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Site Supervision",
              "Quality Control",
              "Safety Management"
            ],
            "toolsAndTechnologies": [
              "AutoCAD",
              "MS Project",
              "Primavera"
            ],
            "certificationRecommendations": [
              "Certified Construction Manager",
              "Site Management Certification"
            ],
            "keyResponsibilities": [
              "Supervise construction activities",
              "Ensure quality standards",
              "Coordinate with contractors"
            ],
            "relatedRoles": [
              "Construction Manager",
              "Civil Engineer",
              "Project Engineer",
              "Quality Control Engineer",
              "Geotechnical Engineer",
              "Environmental Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Civil Engineering",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      }
    }
  },
  "CHE": {
    "id": "CHE",
    "name": "Chemical Engineering",
    "description": "Chemical Engineering involves the design and operation of processes that convert raw materials into valuable products.",
    "image": "/images/disciplines/che.png",
    "courses": {
      "Process Engineering": {
        "id": "Process Engineering",
        "name": "Process Engineering",
        "description": "Focuses on the design and optimization of chemical processes.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Thermodynamics",
          "Fluid Mechanics"
        ],
        "keyTopics": [
          "Chemical Reaction Engineering",
          "Separation Processes",
          "Process Control"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Elementary Principles of Chemical Processes by Richard M. Felder",
          "Chemical Engineering Design by Gavin Towler"
        ],
        "roles": [
          {
            "id": "CHE-PE-1",
            "name": "Process Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Process Design",
              "Chemical Reaction Engineering",
              "Process Optimization"
            ],
            "toolsAndTechnologies": [
              "Aspen Plus",
              "HYSYS",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Process Engineer",
              "Chemical Engineering Certification"
            ],
            "keyResponsibilities": [
              "Design chemical processes",
              "Optimize production efficiency",
              "Conduct safety assessments"
            ],
            "relatedRoles": [
              "Chemical Engineer",
              "Production Engineer",
              "Quality Control Engineer",
              "Process Safety Engineer",
              "Environmental Engineer",
              "Research Scientist"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹3 LPA",
            "year3": "₹5 LPA",
            "year5": "₹8 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "0–2 years preferred"
        },
        {
          "id": "CHE-PE-2",
          "name": "Production Engineer",
          "currentSalaryINR": "₹10–20 LPA",
          "skills": [
            "Production Planning",
            "Quality Control",
            "Safety Management"
          ],
          "toolsAndTechnologies": [
            "SAP ERP",
            "MS Project",
            "AutoCAD"
          ],
          "certificationRecommendations": [
            "Certified Production Engineer",
            "Six Sigma Certification"
          ],
          "keyResponsibilities": [
            "Manage production processes",
            "Ensure product quality",
            "Implement safety protocols"
          ],
          "relatedRoles": [
            "Chemical Engineer",
            "Process Engineer",
            "Quality Control Engineer",
            "Manufacturing Engineer",
            "Research Scientist",
            "Environmental Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹4 LPA",
            "year3": "₹6 LPA",
            "year5": "₹10 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "1–3 years preferred"
        }
      ]
    },
      "Biochemical Engineering": {
        "id": "Biochemical Engineering",
        "name": "Biochemical Engineering",
        "description": "Focuses on the application of biological processes in the production of chemicals.",
        "learningTime": "6–12 months",
        "difficulty": 7,
      "logicalThinking": 7,
      "memoryBased": 5,
      "presentWorth": 8,
      "overallRating": 8,
      "prerequisites": [
        "Biochemistry",
        "Thermodynamics"
      ],
      "keyTopics": [
        "Fermentation Technology",
        "Bioreactor Design",
        "Process Optimization"
      ],
      "topOpenSources": [
        "Coursera",
        "edX",
        "NPTEL"
      ],
      "recommendedBooks": [
        "Biochemical Engineering Fundamentals by Gary T. Tsao",
        "Bioprocess Engineering by Shuler"
      ],
      "roles": [
        {
          "id": "CHE-BE-1",
          "name": "Biochemical Engineer",
          "currentSalaryINR": "₹8–15 LPA",
          "skills": [
            "Bioprocess Design",
            "Fermentation Technology",
            "Process Control"
          ],
          "toolsAndTechnologies": [
            "MATLAB",
            "Aspen Plus",
            "Bioreactor Systems"
          ],
          "certificationRecommendations": [
            "Biochemical Engineering Certification",
            "Process Engineering Certification"
          ],
          "keyResponsibilities": [
            "Design bioprocesses",
            "Optimize fermentation processes",
            "Conduct quality assessments"
          ],
          "relatedRoles": [
            "Chemical Engineer",
            "Process Engineer",
            "Quality Control Engineer",
            "Research Scientist",
            "Production Engineer",
            "Environmental Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹3 LPA",
            "year3": "₹5 LPA",
            "year5": "₹8 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "0–2 years preferred"
        },
        {
          "id": "CHE-BE-2",
          "name": "Process Development Engineer",
          "currentSalaryINR": "₹10–20 LPA",
          "skills": [
            "Process Development",
            "Quality Control",
            "Safety Management"
          ],
          "toolsAndTechnologies": [
            "SAP ERP",
            "MS Project",
            "AutoCAD"
          ],
          "certificationRecommendations": [
            "Certified Process Development Engineer",
            "Six Sigma Certification"
          ],
          "keyResponsibilities": [
            "Develop and optimize biochemical processes",
            "Ensure compliance with regulations",
            "Conduct safety assessments"
          ],
          "relatedRoles": [
            "Biochemical Engineer",
            "Production Engineer",
            "Quality Control Engineer",
            "Research Scientist",
            "Environmental Engineer",
            "Chemical Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹4 LPA",
            "year3": "₹6 LPA",
            "year5": "₹10 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "1–3 years preferred"
        }
      ]
    },
      "Chemical Reaction Engineering": {
        "id": "Chemical Reaction Engineering",
        "name": "Chemical Reaction Engineering",
        "description": "Focuses on the design and optimization of chemical reactors.",
        "learningTime": "6–12 months",
        "difficulty": 8,
      "logicalThinking": 8,
      "memoryBased": 5,
      "presentWorth": 9,
      "overallRating": 8,
      "prerequisites": [
        "Thermodynamics",
        "Fluid Mechanics"
      ],
      "keyTopics": [
        "Reaction Kinetics",
        "Reactor Design",
        "Catalysis"
      ],
      "topOpenSources": [
        "Coursera",
        "edX",
        "NPTEL"
      ],
      "recommendedBooks": [
        "Elements of Chemical Reaction Engineering by H. Scott Fogler",
        "Chemical Reaction Engineering by Octave Levenspiel"
      ],
      "roles": [
        {
          "id": "CHE-RE-1",
          "name": "Reaction Engineer",
          "currentSalaryINR": "₹8–15 LPA",
          "skills": [
            "Reaction Kinetics",
            "Reactor Design",
            "Process Optimization"
          ],
          "toolsAndTechnologies": [
            "Aspen Plus",
            "MATLAB",
            "HYSYS"
          ],
          "certificationRecommendations": [
            "Certified Chemical Reaction Engineer",
            "Process Engineering Certification"
          ],
          "keyResponsibilities": [
            "Design chemical reactors",
            "Optimize reaction conditions",
            "Conduct safety assessments"
          ],
          "relatedRoles": [
            "Chemical Engineer",
            "Process Engineer",
            "Production Engineer",
            "Quality Control Engineer",
            "Research Scientist",
            "Environmental Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹3 LPA",
            "year3": "₹5 LPA",
            "year5": "₹8 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "0–2 years preferred"
        },
        {
          "id": "CHE-RE-2",
          "name": "Catalysis Engineer",
          "currentSalaryINR": "₹10–20 LPA",
          "skills": [
            "Catalyst Design",
            "Reaction Engineering",
            "Process Optimization"
          ],
          "toolsAndTechnologies": [
            "MATLAB",
            "Aspen Plus",
            "HYSYS"
          ],
          "certificationRecommendations": [
            "Certified Catalysis Engineer",
            "Chemical Engineering Certification"
          ],
          "keyResponsibilities": [
            "Design catalysts for chemical reactions",
            "Optimize catalytic processes",
            "Conduct safety assessments"
          ],
          "relatedRoles": [
            "Chemical Engineer",
            "Process Engineer",
            "Production Engineer",
            "Quality Control Engineer",
            "Research Scientist",
            "Environmental Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹4 LPA",
            "year3": "₹6 LPA",
            "year5": "₹10 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "1–3 years preferred"
        }
      ]
    },
      "Separation Processes": {
        "id": "Separation Processes",
        "name": "Separation Processes",
        "description": "Focuses on the methods used to separate mixtures into their components.",
        "learningTime": "6–12 months",
        "difficulty": 8,
      "logicalThinking": 8,
      "memoryBased": 5,
      "presentWorth": 9,
      "overallRating": 8,
      "prerequisites": [
        "Thermodynamics",
        "Fluid Mechanics"
      ],
      "keyTopics": [
        "Distillation",
        "Filtration",
        "Membrane Separation"
      ],
      "topOpenSources": [
        "Coursera",
        "edX",
        "NPTEL"
      ],
      "recommendedBooks": [
        "Separation Process Principles by E. L. Cussler",
        "Chemical Engineering Design by Gavin Towler"
      ],
      "roles": [
        {
          "id": "CHE-SP-1",
          "name": "Separation Process Engineer",
          "currentSalaryINR": "₹8–15 LPA",
          "skills": [
            "Separation Techniques",
            "Process Design",
            "Optimization"
          ],
          "toolsAndTechnologies": [
            "Aspen Plus",
            "HYSYS",
            "MATLAB"
          ],
          "certificationRecommendations": [
            "Certified Separation Process Engineer",
            "Chemical Engineering Certification"
          ],
          "keyResponsibilities": [
            "Design separation processes",
            "Optimize separation conditions",
            "Conduct safety assessments"
          ],
          "relatedRoles": [
            "Chemical Engineer",
            "Process Engineer",
            "Production Engineer",
            "Quality Control Engineer",
            "Research Scientist",
            "Environmental Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹3 LPA",
            "year3": "₹5 LPA",
            "year5": "₹8 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "0–2 years preferred"
        },
        {
          "id": "CHE-SP-2",
          "name": "Process Optimization Engineer",
          "currentSalaryINR": "₹10–20 LPA",
          "skills": [
            "Process Optimization",
            "Data Analysis",
            "Quality Control"
          ],
          "toolsAndTechnologies": [
            "MATLAB",
            "Excel",
            "Minitab"
          ],
          "certificationRecommendations": [
            "Certified Process Optimization Engineer",
            "Six Sigma Certification"
          ],
          "keyResponsibilities": [
            "Optimize separation processes",
            "Conduct data analysis",
            "Collaborate with production teams"
          ],
          "relatedRoles": [
            "Chemical Engineer",
            "Process Engineer",
            "Production Engineer",
            "Quality Control Engineer",
            "Research Scientist",
            "Environmental Engineer"
          ],
          "growthPath": [
            "Junior",
            "Mid-Level",
            "Senior",
            "Lead"
          ],
          "averageSalaryGrowth": {
            "year1": "₹4 LPA",
            "year3": "₹6 LPA",
            "year5": "₹10 LPA"
          },
          "educationRequirements": "Bachelor's in Chemical Engineering",
          "experienceRequirements": "1–3 years preferred"
        }
      ]
    }
    }
  },
  "AE": {
    "id": "AE",
    "name": "Aeronautical Engineering",
    "description": "Aeronautical Engineering focuses on the design, development, testing, and production of aircraft and related systems.",
    "image": "/images/disciplines/ae.png",
    "courses": {
      "Avionics Systems": {
        "id": "Avionics Systems",
        "name": "Avionics Systems",
        "description": "Study of Avionics principles applied to aircraft.",
        "learningTime": "6–12 months",
        "difficulty": 10,
        "logicalThinking": 9,
        "memoryBased": 4,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Basic Physics",
          "Engineering Mathematics",
          "Intro to Aerodynamics"
        ],
        "keyTopics": [
          "Composite Materials",
          "Structural Dynamics",
          "Load Paths",
          "Fatigue Analysis",
          "Finite Element Methods"
        ],
        "topOpenSources": [
          "NPTEL",
          "MIT OCW",
          "edX"
        ],
        "recommendedBooks": [
          "Gas Turbine Theory by Cohen",
          "Jet Propulsion by Nicholas Cumpsty"
        ],
        "roles": [
          {
            "id": "AE-AV-1",
            "name": "Aerospace Engineer Level 1",
            "currentSalaryINR": "₹5–10 LPA",
            "skills": [
              "Structural Dynamics",
              "Combustion",
              "Jet Engines"
            ],
            "toolsAndTechnologies": [
              "SolidWorks",
              "MATLAB",
              "ANSYS"
            ],
            "certificationRecommendations": [
              "SolidWorks Certification",
              "ANSYS Certified Professional"
            ],
            "keyResponsibilities": [
              "Design and test components",
              "Simulate performance parameters",
              "Collaborate with multi-disciplinary teams"
            ],
            "relatedRoles": [
              "Avionics Engineer",
              "Aircraft Designer",
              "Systems Engineer",
              "Flight Test Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AE-AV-2",
            "name": "Avionics Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Avionics Systems",
              "Navigation Systems",
              "Communication Systems"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Simulink",
              "LabVIEW"
            ],
            "certificationRecommendations": [
              "Avionics Certification",
              "Certified Aerospace Technician"
            ],
            "keyResponsibilities": [
              "Develop avionics systems",
              "Test and validate avionics components",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Systems Engineer",
              "Aerospace Engineer",
              "Flight Test Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Aircraft Design": {
        "id": "Aircraft Design",
        "name": "Aircraft Design",
        "description": "Focuses on the principles and practices of designing aircraft.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Aerodynamics",
          "Materials Science"
        ],
        "keyTopics": [
          "Aircraft Performance",
          "Structural Analysis",
          "Flight Dynamics"
        ],
        "topOpenSources": [
          "NPTEL",
          "MIT OCW",
          "edX"
        ],
        "recommendedBooks": [
          "Aircraft Design: A Conceptual Approach by Daniel P. Raymer",
          "Introduction to Flight by John D. Anderson"
        ],
        "roles": [
          {
            "id": "AE-AD-1",
            "name": "Aircraft Design Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "CAD Software",
              "Aerodynamics",
              "Structural Analysis"
            ],
            "toolsAndTechnologies": [
              "CATIA",
              "SolidWorks",
              "ANSYS"
            ],
            "certificationRecommendations": [
              "Certified Aircraft Designer",
              "SolidWorks Certification"
            ],
            "keyResponsibilities": [
              "Design aircraft structures",
              "Conduct performance analysis",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Aerospace Engineer",
              "Systems Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer",
              "Flight Test Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AE-AD-2",
            "name": "Flight Test Engineer",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Flight Testing",
              "Data Analysis",
              "Performance Evaluation"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Simulink",
              "LabVIEW"
            ],
            "certificationRecommendations": [
              "Flight Test Engineer Certification",
              "Aerospace Engineering Certification"
            ],
            "keyResponsibilities": [
              "Conduct flight tests",
              "Analyze flight data",
              "Collaborate with design teams"
            ],
            "relatedRoles": [
              "Aerospace Engineer",
              "Systems Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer",
              "Avionics Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹6 LPA",
              "year3": "₹8 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Propulsion Systems": {
        "id": "Propulsion Systems",
        "name": "Propulsion Systems",
        "description": "Focuses on the design and analysis of propulsion systems for aircraft.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Thermodynamics",
          "Fluid Mechanics"
        ],
        "keyTopics": [
          "Jet Engines",
          "Rocket Propulsion",
          "Thermal Management"
        ],
        "topOpenSources": [
          "NPTEL",
          "MIT OCW",
          "edX"
        ],
        "recommendedBooks": [
          "Gas Turbine Theory by Cohen",
          "Rocket Propulsion Elements by George P. Sutton"
        ],
        "roles": [
          {
            "id": "AE-PS-1",
            "name": "Propulsion Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Thermodynamics",
              "Fluid Dynamics",
              "Combustion"
            ],
            "toolsAndTechnologies": [
              "ANSYS",
              "MATLAB",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Propulsion Engineer",
              "ANSYS Certification"
            ],
            "keyResponsibilities": [
              "Design propulsion systems",
              "Conduct performance analysis",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Aerospace Engineer",
              "Systems Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer",
              "Avionics Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AE-PS-2",
            "name": "Jet Engine Designer",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Jet Engine Design",
              "Thermal Analysis",
              "Performance Testing"
            ],
            "toolsAndTechnologies": [
              "ANSYS",
              "MATLAB",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Jet Engine Designer",
              "ANSYS Certification"
            ],
            "keyResponsibilities": [
              "Design jet engines",
              "Conduct thermal analysis",
              "Collaborate with testing teams"
            ],
            "relatedRoles": [
              "Propulsion Engineer",
              "Aerospace Engineer",
              "Systems Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹6 LPA",
              "year3": "₹8 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Aircraft Systems": {
        "id": "Aircraft Systems",
        "name": "Aircraft Systems",
        "description": "Focuses on the design and integration of various systems in aircraft.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Systems Engineering",
          "Control Systems"
        ],
        "keyTopics": [
          "Flight Control Systems",
          "Navigation Systems",
          "Communication Systems"
        ],
        "topOpenSources": [
          "NPTEL",
          "MIT OCW",
          "edX"
        ],
        "recommendedBooks": [
          "Aircraft Systems by Ian Moir",
          "Introduction to Avionics Systems by R.P.G. Collinson"
        ],
        "roles": [
          {
            "id": "AE-AS-1",
            "name": "Aircraft Systems Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Systems Integration",
              "Control Systems",
              "Avionics"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Simulink",
              "LabVIEW"
            ],
            "certificationRecommendations": [
              "Certified Aircraft Systems Engineer",
              "Avionics Certification"
            ],
            "keyResponsibilities": [
              "Design aircraft systems",
              "Integrate various subsystems",
              "Collaborate with testing teams"
            ],
            "relatedRoles": [
              "Aerospace Engineer",
              "Propulsion Engineer",
              "Avionics Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AE-AS-2",
            "name": "Flight Control Engineer",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Control Systems",
              "Flight Dynamics",
              "Simulation"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "Simulink",
              "ANSYS"
            ],
            "certificationRecommendations": [
              "Certified Flight Control Engineer",
              "Avionics Certification"
            ],
            "keyResponsibilities": [
              "Design flight control systems",
              "Conduct simulations",
              "Collaborate with design teams"
            ],
            "relatedRoles": [
              "Aircraft Systems Engineer",
              "Aerospace Engineer",
              "Propulsion Engineer",
              "Manufacturing Engineer",
              "Quality Control Engineer",
              "Project Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹6 LPA",
              "year3": "₹8 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Aeronautical Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      }
    }
  },
  "CE": {
    "id": "CE",
    "name": "Ceramic Engineering",
    "description": "Ceramic Engineering focuses on the study and development of ceramic materials and their applications.",
    "image": "/images/disciplines/ce.png",
    "courses": {
      "Ceramic Materials": {
        "id": "Ceramic Materials",
        "name": "Ceramic Materials",
        "description": "Study of the properties and applications of ceramic materials.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 6,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 7,
        "prerequisites": [
          "Material Science",
          "Chemistry"
        ],
        "keyTopics": [
          "Ceramic Processing",
          "Mechanical Properties",
          "Thermal Properties"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Introduction to Ceramics by W. D. Kingery",
          "Ceramic Materials: Science and Engineering by C. Barry Carter"
        ],
        "roles": [
          {
            "id": "CE-CM-1",
            "name": "Ceramic Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Material Characterization",
              "Ceramic Processing",
              "Quality Control"
            ],
            "toolsAndTechnologies": [
              "XRD",
              "SEM",
              "Furnaces"
            ],
            "certificationRecommendations": [
              "Certified Ceramic Engineer",
              "Material Science Certification"
            ],
            "keyResponsibilities": [
              "Develop ceramic materials",
              "Conduct material testing",
              "Ensure product quality"
            ],
            "relatedRoles": [
              "Materials Engineer",
              "Quality Control Engineer",
              "Research Scientist",
              "Manufacturing Engineer",
              "Process Engineer",
              "Product Development Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-CM-2",
            "name": "Materials Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Material Selection",
              "Failure Analysis",
              "Quality Assurance"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "ANSYS",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Materials Engineer",
              "Quality Assurance Certification"
            ],
            "keyResponsibilities": [
              "Analyze material properties",
              "Develop new materials",
              "Conduct failure analysis"
            ],
            "relatedRoles": [
              "Ceramic Engineer",
              "Quality Control Engineer",
              "Research Scientist",
              "Manufacturing Engineer",
              "Process Engineer",
              "Product Development Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Ceramic Processing": {
        "id": "Ceramic Processing",
        "name": "Ceramic Processing",
        "description": "Focuses on the methods and techniques used in the processing of ceramic materials.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 6,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 7,
        "prerequisites": [
          "Material Science",
          "Chemistry"
        ],
        "keyTopics": [
          "Sintering",
          "Forming Techniques",
          "Glazing"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Introduction to Ceramics by W. D. Kingery",
          "Ceramic Processing and Sintering by R. A. McGinnis"
        ],
        "roles": [
          {
            "id": "CE-CP-1",
            "name": "Ceramic Processing Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Sintering Techniques",
              "Quality Control",
              "Material Testing"
            ],
            "toolsAndTechnologies": [
              "Furnaces",
              "XRD",
              "SEM"
            ],
            "certificationRecommendations": [
              "Certified Ceramic Processing Engineer",
              "Material Science Certification"
            ],
            "keyResponsibilities": [
              "Optimize ceramic processing techniques",
              "Conduct material testing",
              "Ensure product quality"
            ],
            "relatedRoles": [
              "Materials Engineer",
              "Quality Control Engineer",
              "Research Scientist",
              "Manufacturing Engineer",
              "Process Engineer",
              "Product Development Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-CP-2",
            "name": "Quality Control Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Quality Assurance",
              "Material Testing",
              "Failure Analysis"
            ],
            "toolsAndTechnologies": [
              "XRD",
              "SEM",
              "Furnaces"
            ],
            "certificationRecommendations": [
              "Certified Quality Control Engineer",
              "Material Science Certification"
            ],
            "keyResponsibilities": [
              "Conduct quality assessments",
              "Analyze material properties",
              "Ensure compliance with standards"
            ],
            "relatedRoles": [
              "Ceramic Engineer",
              "Materials Engineer",
              "Research Scientist",
              "Manufacturing Engineer",
              "Process Engineer",
              "Product Development Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Ceramic Engineering Design": {
        "id": "Ceramic Engineering Design",
        "name": "Ceramic Engineering Design",
        "description": "Focuses on the design aspects of ceramic materials and products.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 6,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 7,
        "prerequisites": [
          "Material Science",
          "Design Principles"
        ],
        "keyTopics": [
          "Product Design",
          "Material Selection",
          "Prototyping"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Ceramic Engineering: Principles and Practice by C. Barry Carter",
          "Design of Ceramic Components by R. A. McGinnis"
        ],
        "roles": [
          {
            "id": "CE-ED-1",
            "name": "Ceramic Product Designer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "3D Modeling",
              "Material Selection",
              "Prototyping"
            ],
            "toolsAndTechnologies": [
              "SolidWorks",
              "AutoCAD",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Product Designer",
              "CAD Certification"
            ],
            "keyResponsibilities": [
              "Develop ceramic product designs",
              "Create prototypes",
              "Collaborate with manufacturing teams"
            ],
            "relatedRoles": [
              "Ceramic Engineer",
              "Materials Engineer",
              "Research Scientist",
              "Manufacturing Engineer",
              "Process Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-ED-2",
            "name": "Ceramic Design Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Design Software",
              "Material Properties",
              "Prototyping"
            ],
            "toolsAndTechnologies": [
              "SolidWorks",
              "AutoCAD",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Ceramic Design Engineer",
              "CAD Certification"
            ],
            "keyResponsibilities": [
              "Design ceramic components",
              "Conduct material testing",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Ceramic Engineer",
              "Materials Engineer",
              "Research Scientist",
              "Manufacturing Engineer",
              "Process Engineer",
              "Quality Control Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Ceramic Manufacturing": {
        "id": "Ceramic Manufacturing",
        "name": "Ceramic Manufacturing",
        "description": "Focuses on the manufacturing processes of ceramic materials.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 6,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 7,
        "prerequisites": [
          "Material Science",
          "Manufacturing Processes"
        ],
        "keyTopics": [
          "Sintering",
          "Casting",
          "Glazing"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "NPTEL"
        ],
        "recommendedBooks": [
          "Ceramic Manufacturing: Principles and Practice by C. Barry Carter",
          "Introduction to Ceramics by W. D. Kingery"
        ],
        "roles": [
          {
            "id": "CE-MF-1",
            "name": "Ceramic Manufacturing Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Manufacturing Processes",
              "Quality Control",
              "Material Testing"
            ],
            "toolsAndTechnologies": [
              "Furnaces",
              "XRD",
              "SEM"
            ],
            "certificationRecommendations": [
              "Certified Manufacturing Engineer",
              "Material Science Certification"
            ],
            "keyResponsibilities": [
              "Optimize manufacturing processes",
              "Conduct quality assessments",
              "Collaborate with production teams"
            ],
            "relatedRoles": [
              "Ceramic Engineer",
              "Materials Engineer",
              "Research Scientist",
              "Process Engineer",
              "Quality Control Engineer",
              "Product Development Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "CE-MF-2",
            "name": "Production Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Production Planning",
              "Quality Control",
              "Safety Management"
            ],
            "toolsAndTechnologies": [
              "SAP ERP",
              "MS Project",
              "AutoCAD"
            ],
            "certificationRecommendations": [
              "Certified Production Engineer",
              "Six Sigma Certification"
            ],
            "keyResponsibilities": [
              "Manage production processes",
              "Ensure product quality",
              "Implement safety protocols"
            ],
            "relatedRoles": [
              "Ceramic Engineer",
              "Materials Engineer",
              "Research Scientist",
              "Process Engineer",
              "Quality Control Engineer",
              "Product Development Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Ceramic Engineering",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      }
    }
  },
  "IT": {
    "id": "IT",
    "name": "Information Technology",
    "description": "Information Technology focuses on the use of computers and software to manage information.",
    "image": "/images/disciplines/it.png",
    "courses": {
      "Database Management Systems": {
        "id": "Database Management Systems",
        "name": "Database Management Systems",
        "description": "Study of database design, implementation, and management.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "Basic Programming",
          "SQL"
        ],
        "keyTopics": [
          "Database Design",
          "Normalization",
          "SQL Queries"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Database System Concepts by Silberschatz",
          "SQL Fundamentals by John Viescas"
        ],
        "roles": [
          {
            "id": "IT-DB-1",
            "name": "Database Administrator",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "SQL",
              "Database Design",
              "Backup and Recovery"
            ],
            "toolsAndTechnologies": [
              "Oracle",
              "MySQL",
              "PostgreSQL"
            ],
            "certificationRecommendations": [
              "Oracle Certified Professional",
              "Microsoft Certified: Azure Database Administrator"
            ],
            "keyResponsibilities": [
              "Manage database systems",
              "Ensure data integrity",
              "Optimize database performance"
            ],
            "relatedRoles": [
              "Data Analyst",
              "Data Engineer",
              "Business Intelligence Analyst",
              "ETL Developer",
              "Data Scientist",
              "Cloud Database Administrator"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "IT-DB-2",
            "name": "Data Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "ETL Processes",
              "Data Warehousing",
              "Big Data Technologies"
            ],
            "toolsAndTechnologies": [
              "Apache Hadoop",
              "Apache Spark",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Data Engineer",
              "AWS Certified Data Analytics"
            ],
            "keyResponsibilities": [
              "Design and maintain data pipelines",
              "Ensure data quality",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Analyst",
              "Database Administrator",
              "Big Data Engineer",
              "Business Intelligence Developer",
              "Machine Learning Engineer",
              "Data Architect"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Network Security": {
        "id": "Network Security",
        "name": "Network Security",
        "description": "Focuses on the protection of computer networks from intruders.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Networking Fundamentals",
          "Operating Systems"
        ],
        "keyTopics": [
          "Firewalls",
          "Intrusion Detection Systems",
          "VPNs"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Network Security Essentials by William Stallings",
          "Computer Networking: A Top-Down Approach by Kurose"
        ],
        "roles": [
          {
            "id": "IT-NS-1",
            "name": "Network Security Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Firewalls",
              "Intrusion Detection",
              "Network Protocols"
            ],
            "toolsAndTechnologies": [
              "Cisco ASA",
              "Wireshark",
              "Nessus"
            ],
            "certificationRecommendations": [
              "Certified Information Systems Security Professional (CISSP)",
              "Cisco Certified CyberOps Associate"
            ],
            "keyResponsibilities": [
              "Monitor network security",
              "Implement security measures",
              "Conduct security audits"
            ],
            "relatedRoles": [
              "Security Analyst",
              "Network Engineer",
              "Cloud Security Engineer",
              "DevOps Engineer",
              "Data Scientist",
              "Machine Learning Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "IT-NS-2",
            "name": "Security Analyst",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Threat Analysis",
              "Incident Response",
              "Vulnerability Assessment"
            ],
            "toolsAndTechnologies": [
              "Splunk",
              "Nessus",
              "Wireshark"
            ],
            "certificationRecommendations": [
              "Certified Ethical Hacker (CEH)",
              "CompTIA Security+"
            ],
            "keyResponsibilities": [
              "Analyze security incidents",
              "Conduct vulnerability assessments",
              "Collaborate with IT teams"
            ],
            "relatedRoles": [
              "Network Security Engineer",
              "IT Support",
              "Cloud Security Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "DevOps Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      },
      "Web Development": {
        "id": "Web Development",
        "name": "Web Development",
        "description": "Focuses on the development of applications and services for the World Wide Web.",
        "learningTime": "4–8 months",
        "difficulty": 7,
        "logicalThinking": 6,
        "memoryBased": 4,
        "presentWorth": 8,
        "overallRating": 8,
        "prerequisites": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "keyTopics": [
          "Frontend Frameworks",
          "Backend Development",
          "RESTful APIs",
          "Responsive Design"
        ],
        "topOpenSources": [
          "FreeCodeCamp",
          "Codecademy",
          "Udacity"
        ],
        "recommendedBooks": [
          "Eloquent JavaScript by Marijn Haverbeke",
          "You Don’t Know JS by Kyle Simpson"
        ],
        "roles": [
          {
            "id": "IT-WD-1",
            "name": "Frontend Developer",
            "currentSalaryINR": "₹6–12 LPA",
            "skills": [
              "HTML",
              "CSS",
              "JavaScript"
            ],
            "toolsAndTechnologies": [
              "React",
              "Vue.js",
              "Bootstrap"
            ],
            "certificationRecommendations": [
              "Certified Web Developer",
              "JavaScript Certification"
            ],
            "keyResponsibilities": [
              "Build user interfaces",
              "Optimize web applications for speed",
              "Collaborate with designers"
            ],
            "relatedRoles": [
              "UI/UX Designer",
              "Full Stack Developer",
              "Web Designer",
              "Mobile App Developer",
              "SEO Specialist",
              "Content Manager"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹2 LPA",
              "year3": "₹4 LPA",
              "year5": "₹6 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "IT-WD-2",
            "name": "Full Stack Developer",
            "currentSalaryINR": "₹10–18 LPA",
            "skills": [
              "Node.js",
              "Express",
              "MongoDB"
            ],
            "toolsAndTechnologies": [
              "Git",
              "Docker",
              "Postman"
            ],
            "certificationRecommendations": [
              "Full Stack Web Developer Certification",
              "Node.js Certification"
            ],
            "keyResponsibilities": [
              "Develop both client and server software",
              "Manage database and server-side logic",
              "Ensure responsiveness of applications"
            ],
            "relatedRoles": [
              "Software Engineer",
              "DevOps Engineer",
              "Backend Developer",
              "API Developer",
              "Cloud Engineer",
              "Mobile App Developer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Cloud Computing": {
        "id": "Cloud Computing",
        "name": "Cloud Computing",
        "description": "Focuses on the delivery of computing services over the internet.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Networking Fundamentals",
          "Operating Systems"
        ],
        "keyTopics": [
          "Cloud Architecture",
          "Service Models",
          "Deployment Models"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Cloud Computing: Concepts, Technology & Architecture by Thomas Erl",
          "Architecting the Cloud by Michael J. Kavis"
        ],
        "roles": [
          {
            "id": "IT-CC-1",
            "name": "Cloud Solutions Architect",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Cloud Architecture",
              "AWS",
              "Azure"
            ],
            "toolsAndTechnologies": [
              "AWS",
              "Azure",
              "Google Cloud"
            ],
            "certificationRecommendations": [
              "AWS Certified Solutions Architect",
              "Microsoft Certified: Azure Solutions Architect Expert"
            ],
            "keyResponsibilities": [
              "Design cloud solutions",
              "Optimize cloud infrastructure",
              "Collaborate with development teams"
            ],
            "relatedRoles": [
              "Cloud Engineer",
              "DevOps Engineer",
              "Systems Administrator",
              "Network Engineer",
              "Security Engineer",
              "Data Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "IT-CC-2",
            "name": "Cloud Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Cloud Services",
              "Scripting",
              "Networking"
            ],
            "toolsAndTechnologies": [
              "AWS CLI",
              "Terraform",
              "Ansible"
            ],
            "certificationRecommendations": [
              "AWS Certified Cloud Practitioner",
              "Google Cloud Professional Cloud Architect"
            ],
            "keyResponsibilities": [
              "Manage cloud infrastructure",
              "Implement cloud solutions",
              "Monitor cloud performance"
            ],
            "relatedRoles": [
              "Cloud Solutions Architect",
              "DevOps Engineer",
              "Systems Administrator",
              "Network Engineer",
              "Security Engineer",
              "Data Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Software Development": {
        "id": "Software Development",
        "name": "Software Development",
        "description": "Focuses on the methodologies and tools used for software development.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Programming Fundamentals",
          "Data Structures"
        ],
        "keyTopics": [
          "Agile Methodologies",
          "Version Control",
          "Software Testing"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "Clean Code by Robert C. Martin",
          "The Pragmatic Programmer by Andrew Hunt"
        ],
        "roles": [
          {
            "id": "IT-SD-1",
            "name": "Software Developer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Java",
              "C#",
              "Python"
            ],
            "toolsAndTechnologies": [
              "Git",
              "JIRA",
              "Eclipse"
            ],
            "certificationRecommendations": [
              "Oracle Certified Professional",
              "Microsoft Certified: Azure Developer Associate"
            ],
            "keyResponsibilities": [
              "Develop and maintain software applications",
              "Collaborate with cross-functional teams",
              "Optimize code for performance"
            ],
            "relatedRoles": [
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
              "DevOps Engineer",
              "Mobile App Developer",
              "Game Developer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "0–2 years preferred"
          },
          {
            "id": "IT-SD-2",
            "name": "Full Stack Developer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Node.js",
              "React",
              "MongoDB"
            ],
            "toolsAndTechnologies": [
              "Git",
              "Docker",
              "Postman"
            ],
            "certificationRecommendations": [
              "Full Stack Web Developer Certification",
              "Node.js Certification"
            ],
            "keyResponsibilities": [
              "Develop both client and server software",
              "Manage database and server-side logic",
              "Ensure responsiveness of applications"
            ],
            "relatedRoles": [
              "Software Engineer",
              "DevOps Engineer",
              "Backend Developer",
              "API Developer",
              "Cloud Engineer",
              "Mobile App Developer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Data Science": {
        "id": "Data Science",
        "name": "Data Science",
        "description": "Focuses on the extraction of insights from data using statistical and computational techniques.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Statistics",
          "Programming"
        ],
        "keyTopics": [
          "Machine Learning",
          "Data Visualization",
          "Big Data Technologies"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron",
          "Pattern Recognition and Machine Learning by Christopher Bishop"
        ],
        "roles": [
          {
            "id": "IT-DS-1",
            "name": "Data Scientist",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Statistics",
              "Data Visualization",
              "Machine Learning"
            ],
            "toolsAndTechnologies": [
              "R",
              "Tableau",
              "Python"
            ],
            "certificationRecommendations": [
              "Certified Data Scientist",
              "Google Data Analytics"
            ],
            "keyResponsibilities": [
              "Analyze complex datasets",
              "Build predictive models",
              "Communicate insights to stakeholders"
            ],
            "relatedRoles": [
              "Machine Learning Engineer",
              "Data Analyst",
              "Business Intelligence Analyst",
              "Data Engineer",
              "AI Researcher",
              "Statistician"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "IT-DS-2",
            "name": "Machine Learning Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Python",
              "TensorFlow",
              "Scikit-Learn"
            ],
            "toolsAndTechnologies": [
              "Jupyter Notebook",
              "Keras",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Machine Learning Engineer",
              "AWS Certified Machine Learning"
            ],
            "keyResponsibilities": [
              "Develop machine learning models",
              "Optimize algorithms for performance",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Scientist",
              "AI Engineer",
              "Data Engineer",
              "Business Intelligence Analyst",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Cyber Security": {
        "id": "Cyber Security",
        "name": "Cyber Security",
        "description": "Focuses on protecting systems, networks, and programs from digital attacks.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Networking Fundamentals",
          "Operating Systems"
        ],
        "keyTopics": [
          "Network Security",
          "Application Security",
          "Incident Response"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Khan Academy"
        ],
        "recommendedBooks": [
          "The Web Application Hacker's Handbook by Dafydd Stuttard",
          "Cybersecurity Essentials by Charles J. Brooks"
        ],
        "roles": [
          {
            "id": "IT-CS-1",
            "name": "Cyber Security Analyst",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Threat Analysis",
              "Incident Response",
              "Vulnerability Assessment"
            ],
            "toolsAndTechnologies": [
              "Splunk",
              "Nessus",
              "Wireshark"
            ],
            "certificationRecommendations": [
              "Certified Ethical Hacker (CEH)",
              "CompTIA Security+"
            ],
            "keyResponsibilities": [
              "Monitor security systems",
              "Conduct vulnerability assessments",
              "Respond to security incidents"
            ],
            "relatedRoles": [
              "Network Security Engineer",
              "Security Consultant",
              "IT Security Specialist",
              "Penetration Tester",
              "Security Architect",
              "Incident Responder"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "IT-CS-2",
            "name": "Penetration Tester",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Ethical Hacking",
              "Network Security",
              "Scripting"
            ],
            "toolsAndTechnologies": [
              "Metasploit",
              "Burp Suite",
              "Kali Linux"
            ],
            "certificationRecommendations": [
              "Certified Ethical Hacker (CEH)",
              "Offensive Security Certified Professional (OSCP)"
            ],
            "keyResponsibilities": [
              "Conduct penetration tests",
              "Identify vulnerabilities",
              "Report findings to stakeholders"
            ],
            "relatedRoles": [
              "Cyber Security Analyst",
              "Security Consultant",
              "IT Security Specialist",
              "Security Architect",
              "Incident Responder",
              "Network Security Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Information Technology or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      }
    }
  },
  "DS": {
    "id": "DS",
    "name": "Data Science & Engineering",
    "description": "Data Science & Engineering focuses on the extraction of insights from data using statistical and computational techniques.",
    "image": "/images/disciplines/ds.png",
    "courses": {
      "Machine Learning": {
        "id": "Machine Learning",
        "name": "Machine Learning",
        "description": "Study of algorithms that allow computers to learn from and make predictions based on data.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Statistics",
          "Programming"
        ],
        "keyTopics": [
          "Supervised Learning",
          "Unsupervised Learning",
          "Neural Networks"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron",
          "Pattern Recognition and Machine Learning by Christopher Bishop"
        ],
        "roles": [
          {
            "id": "DS-ML-1",
            "name": "Machine Learning Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Python",
              "TensorFlow",
              "Scikit-Learn"
            ],
            "toolsAndTechnologies": [
              "Jupyter Notebook",
              "Keras",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Machine Learning Engineer",
              "AWS Certified Machine Learning"
            ],
            "keyResponsibilities": [
              "Develop machine learning models",
              "Optimize algorithms for performance",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Scientist",
              "AI Engineer",
              "Data Engineer",
              "Business Intelligence Analyst",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "DS-ML-2",
            "name": "Data Scientist",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Statistics",
              "Data Visualization",
              "Machine Learning"
            ],
            "toolsAndTechnologies": [
              "R",
              "Tableau",
              "Python"
            ],
            "certificationRecommendations": [
              "Certified Data Scientist",
              "Google Data Analytics"
            ],
            "keyResponsibilities": [
              "Analyze complex datasets",
              "Build predictive models",
              "Communicate insights to stakeholders"
            ],
            "relatedRoles": [
              "Machine Learning Engineer",
              "Data Analyst",
              "Business Intelligence Analyst",
              "Data Engineer",
              "AI Researcher",
              "Statistician"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Big Data Technologies": {
        "id": "Big Data Technologies",
        "name": "Big Data Technologies",
        "description": "Focuses on the tools and techniques used to process and analyze large datasets.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Database Management",
          "Programming"
        ],
        "keyTopics": [
          "Hadoop",
          "Spark",
          "Data Warehousing"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Hadoop: The Definitive Guide by Tom White",
          "Spark: The Definitive Guide by Bill Chambers"
        ],
        "roles": [
          {
            "id": "DS-BD-1",
            "name": "Big Data Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Hadoop",
              "Spark",
              "ETL Processes"
            ],
            "toolsAndTechnologies": [
              "Apache Hadoop",
              "Apache Spark",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Data Engineer",
              "AWS Certified Big Data"
            ],
            "keyResponsibilities": [
              "Design and maintain big data solutions",
              "Ensure data quality",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Engineer",
              "Data Analyst",
              "Business Intelligence Developer",
              "Machine Learning Engineer",
              "Statistician",
              "Data Architect"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "DS-BD-2",
            "name": "Data Analyst",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Data Visualization",
              "SQL",
              "Statistical Analysis"
            ],
            "toolsAndTechnologies": [
              "Tableau",
              "Power BI",
              "Excel"
            ],
            "certificationRecommendations": [
              "Certified Data Analyst",
              "Google Data Analytics"
            ],
            "keyResponsibilities": [
              "Analyze data trends",
              "Create visual reports",
              "Collaborate with stakeholders"
            ],
            "relatedRoles": [
              "Data Scientist",
              "Business Analyst",
              "Data Engineer",
              "Machine Learning Engineer",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      },
      "Artificial Intelligence": {
        "id": "Artificial Intelligence",
        "name": "Artificial Intelligence",
        "description": "Focuses on the development of intelligent systems that can perform tasks autonomously.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Mathematics",
          "Programming"
        ],
        "keyTopics": [
          "Machine Learning",
          "Natural Language Processing",
          "Computer Vision"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Artificial Intelligence: A Modern Approach by Stuart Russell",
          "Deep Learning by Ian Goodfellow"
        ],
        "roles": [
          {
            "id": "DS-AI-1",
            "name": "AI Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Machine Learning",
              "Deep Learning",
              "NLP"
            ],
            "toolsAndTechnologies": [
              "TensorFlow",
              "Keras",
              "PyTorch"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Machine Learning Engineer",
              "AWS Certified Machine Learning"
            ],
            "keyResponsibilities": [
              "Develop AI models",
              "Optimize algorithms for performance",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Machine Learning Engineer",
              "Data Scientist",
              "AI Researcher",
              "Data Engineer",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "DS-AI-2",
            "name": "Machine Learning Engineer",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Python",
              "TensorFlow",
              "Scikit-Learn"
            ],
            "toolsAndTechnologies": [
              "Jupyter Notebook",
              "Keras",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Machine Learning Engineer",
              "AWS Certified Machine Learning"
            ],
            "keyResponsibilities": [
              "Develop machine learning models",
              "Optimize algorithms for performance",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "AI Engineer",
              "Data Scientist",
              "Data Engineer",
              "Business Intelligence Analyst",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Natural Language Processing": {
        "id": "Natural Language Processing",
        "name": "Natural Language Processing",

                  "description": "Focuses on the interaction between computers and human language.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Programming",
          "Statistics"
        ],
        "keyTopics": [
          "Text Processing",
          "Sentiment Analysis",
          "Machine Translation"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Speech and Language Processing by Daniel Jurafsky",
          "Natural Language Processing with Python by Steven Bird"
        ],
        "roles": [
          {
            "id": "DS-NLP-1",
            "name": "NLP Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Text Mining",
              "Machine Learning",
              "Deep Learning"
            ],
            "toolsAndTechnologies": [
              "NLTK",
              "spaCy",
              "TensorFlow"
            ],
            "certificationRecommendations": [
              "NLP Certification",
              "Machine Learning Certification"
            ],
            "keyResponsibilities": [
              "Develop NLP models",
              "Optimize text processing algorithms",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Scientist",
              "AI Engineer",
              "Machine Learning Engineer",
              "Data Engineer",
              "Business Intelligence Analyst",
              "Statistician"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "DS-NLP-2",
            "name": "Text Analytics Specialist",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Data Analysis",
              "Text Mining",
              "Statistical Analysis"
            ],
            "toolsAndTechnologies": [
              "R",
              "Python",
              "Tableau"
            ],
            "certificationRecommendations": [
              "Data Analytics Certification",
              "NLP Certification"
            ],
            "keyResponsibilities": [
              "Analyze text data",
              "Develop text mining algorithms",
              "Collaborate with stakeholders"
            ],
            "relatedRoles": [
              "Data Scientist",
              "NLP Engineer",
              "Data Analyst",
              "Business Intelligence Analyst",
              "Machine Learning Engineer",
              "Statistician"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      },
      "Computer Vision": {
        "id": "Computer Vision",
        "name": "Computer Vision",
        "description": "Focuses on enabling computers to interpret and understand visual information.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Mathematics",
          "Programming"
        ],
        "keyTopics": [
          "Image Processing",
          "Object Detection",
          "Facial Recognition"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Learning OpenCV by Gary Bradski",
          "Deep Learning for Computer Vision with Python by Adrian Rosebrock"
        ],
        "roles": [
          {
            "id": "DS-CV-1",
            "name": "Computer Vision Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Image Processing",
              "Deep Learning",
              "Machine Learning"
            ],
            "toolsAndTechnologies": [
              "OpenCV",
              "TensorFlow",
              "Keras"
            ],
            "certificationRecommendations": [
              "Computer Vision Certification",
              "Deep Learning Certification"
            ],
            "keyResponsibilities": [
              "Develop computer vision models",
              "Optimize image processing algorithms",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Data Scientist",
              "AI Engineer",
              "Machine Learning Engineer",
              "Data Engineer",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "DS-CV-2",
            "name": "Image Processing Specialist",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Image Analysis",
              "Computer Vision",
              "Machine Learning"
            ],
            "toolsAndTechnologies": [
              "MATLAB",
              "OpenCV",
              "Python"
            ],
            "certificationRecommendations": [
              "Computer Vision Certification",
              "Data Science Certification"
            ],
            "keyResponsibilities": [
              "Analyze image data",
              "Develop image processing algorithms",
              "Collaborate with stakeholders"
            ],
            "relatedRoles": [
              "Data Scientist",
              "Computer Vision Engineer",
              "Machine Learning Engineer",
              "Data Analyst",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Data Science or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      }
    }
  },
  "AI": {
    "id": "AI",
    "name": "AI & Robotics",
    "description": "AI & Robotics focuses on the development of intelligent systems and robots that can perform tasks autonomously.",
    "image": "/images/disciplines/ai.png",
    "courses": {
      "Robotics": {
        "id": "Robotics",
        "name": "Robotics",
        "description": "Study of robot design, construction, operation, and use.",
        "learningTime": "6–12 months",
        "difficulty": 9,
        "logicalThinking": 9,
        "memoryBased": 5,
        "presentWorth": 10,
        "overallRating": 9,
        "prerequisites": [
          "Mechanical Engineering",
          "Programming"
        ],
        "keyTopics": [
          "Robot Kinematics",
          "Control Systems",
          "Sensors and Actuators"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Robotics: Modelling, Planning and Control by Bruno Siciliano",
          "Introduction to Robotics: Mechanics and Control by John J. Craig"
        ],
        "roles": [
          {
            "id": "AI-RO-1",
            "name": "Robotics Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Robot Programming",
              "Control Systems",
              "Sensor Integration"
            ],
            "toolsAndTechnologies": [
              "ROS",
              "MATLAB",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Robotics Engineer",
              "Robotics Certification"
            ],
            "keyResponsibilities": [
              "Design and develop robotic systems",
              "Test and validate robots",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Automation Engineer",
              "AI Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Robotics or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AI-RO-2",
            "name": "Automation Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Automation Tools",
              "Control Systems",
              "Programming"
            ],
            "toolsAndTechnologies": [
              "PLC",
              "SCADA",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Automation Engineer",
              "Robotics Certification"
            ],
            "keyResponsibilities": [
              "Develop automation solutions",
              "Test and validate automation systems",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Robotics Engineer",
              "AI Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Robotics or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      },
      "AI Fundamentals": {
        "id": "AI Fundamentals",
        "name": "AI Fundamentals",
        "description": "Study of the principles and techniques used in artificial intelligence.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Mathematics",
          "Programming"
        ],
        "keyTopics": [
          "Machine Learning",
          "Natural Language Processing",
          "Computer Vision"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Artificial Intelligence: A Modern Approach by Stuart Russell",
          "Deep Learning by Ian Goodfellow"
        ],
        "roles": [
          {
            "id": "AI-AI-1",
            "name": "AI Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Machine Learning",
              "Deep Learning",
              "NLP"
            ],
            "toolsAndTechnologies": [
              "TensorFlow",
              "Keras",
              "PyTorch"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Machine Learning Engineer",
              "AWS Certified Machine Learning"
            ],
            "keyResponsibilities": [
              "Develop AI models",
              "Optimize algorithms for performance",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "Machine Learning Engineer",
              "Data Scientist",
              "AI Researcher",
              "Data Engineer",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in AI or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AI-AI-2",
            "name": "Machine Learning Engineer",
            "currentSalaryINR": "₹12–22 LPA",
            "skills": [
              "Python",
              "TensorFlow",
              "Scikit-Learn"
            ],
            "toolsAndTechnologies": [
              "Jupyter Notebook",
              "Keras",
              "AWS"
            ],
            "certificationRecommendations": [
              "Google Cloud Professional Machine Learning Engineer",
              "AWS Certified Machine Learning"
            ],
            "keyResponsibilities": [
              "Develop machine learning models",
              "Optimize algorithms for performance",
              "Collaborate with data scientists"
            ],
            "relatedRoles": [
              "AI Engineer",
              "Data Scientist",
              "Data Engineer",
              "Business Intelligence Analyst",
              "Statistician",
              "Quantitative Analyst"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹5 LPA",
              "year3": "₹7 LPA",
              "year5": "₹12 LPA"
            },
            "educationRequirements": "Bachelor's in AI or related field",
            "experienceRequirements": "1–3 years preferred"
          }
        ]
      },
      "Robotics Fundamentals": {
        "id": "Robotics Fundamentals",
        "name": "Robotics Fundamentals",
        "description": "Study of the basic principles of robotics.",
        "learningTime": "6–12 months",
        "difficulty": 8,
        "logicalThinking": 8,
        "memoryBased": 5,
        "presentWorth": 9,
        "overallRating": 8,
        "prerequisites": [
          "Mechanical Engineering",
          "Programming"
        ],
        "keyTopics": [
          "Robot Kinematics",
          "Control Systems",
          "Sensors and Actuators"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Introduction to Robotics: Mechanics and Control by John J. Craig",
          "Robotics: Modelling, Planning and Control by Bruno Siciliano"
        ],
        "roles": [
          {
            "id": "AI-RF-1",
            "name": "Robotics Engineer",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Robot Programming",
              "Control Systems",
              "Sensor Integration"
            ],
            "toolsAndTechnologies": [
              "ROS",
              "MATLAB",
              "SolidWorks"
            ],
            "certificationRecommendations": [
              "Certified Robotics Engineer",
              "Robotics Certification"
            ],
            "keyResponsibilities": [
              "Design and develop robotic systems",
              "Test and validate robots",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Automation Engineer",
              "AI Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Robotics or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AI-RF-2",
            "name": "Automation Engineer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Automation Tools",
              "Control Systems",
              "Programming"
            ],
            "toolsAndTechnologies": [
              "PLC",
              "SCADA",
              "MATLAB"
            ],
            "certificationRecommendations": [
              "Certified Automation Engineer",
              "Robotics Certification"
            ],
            "keyResponsibilities": [
              "Develop automation solutions",
              "Test and validate automation systems",
              "Collaborate with engineering teams"
            ],
            "relatedRoles": [
              "Robotics Engineer",
              "AI Engineer",
              "Embedded Systems Engineer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Systems Engineer"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Robotics or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      },
      "AI Ethics": {
        "id": "AI Ethics",
        "name": "AI Ethics",
        "description": "Focuses on the ethical implications of AI technologies.",
        "learningTime": "6–12 months",
        "difficulty": 7,
        "logicalThinking": 7,
        "memoryBased": 5,
        "presentWorth": 8,
        "overallRating": 7,
        "prerequisites": [
          "Philosophy",
          "Computer Science"
        ],
        "keyTopics": [
          "Ethical AI",
          "Bias in AI",
          "Regulations"
        ],
        "topOpenSources": [
          "Coursera",
          "edX",
          "Kaggle"
        ],
        "recommendedBooks": [
          "Weapons of Math Destruction by Cathy O'Neil",
          "Artificial Intelligence: A Guide to Intelligent Systems by Michael Negnevitsky"
        ],
        "roles": [
          {
            "id": "AI-E-1",
            "name": "AI Ethics Consultant",
            "currentSalaryINR": "₹10–20 LPA",
            "skills": [
              "Ethics",
              "AI Technologies",
              "Regulatory Compliance"
            ],
            "toolsAndTechnologies": [
              "Research Tools",
              "Data Analysis Software",
              "Presentation Software"
            ],
            "certificationRecommendations": [
              "AI Ethics Certification",
              "Data Ethics Certification"
            ],
            "keyResponsibilities": [
              "Advise on ethical AI practices",
              "Conduct ethical assessments",
              "Collaborate with stakeholders"
            ],
            "relatedRoles": [
              "AI Researcher",
              "Data Scientist",
              "Policy Analyst",
              "Compliance Officer",
              "Ethics Officer",
              "Legal Consultant"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹4 LPA",
              "year3": "₹6 LPA",
              "year5": "₹10 LPA"
            },
            "educationRequirements": "Bachelor's in Philosophy, Computer Science, or related field",
            "experienceRequirements": "1–3 years preferred"
          },
          {
            "id": "AI-E-2",
            "name": "Compliance Officer",
            "currentSalaryINR": "₹8–15 LPA",
            "skills": [
              "Regulatory Knowledge",
              "Risk Assessment",
              "Policy Development"
            ],
            "toolsAndTechnologies": [
              "Compliance Management Software",
              "Data Analysis Software",
              "Documentation Tools"
            ],
            "certificationRecommendations": [
              "Compliance Certification",
              "AI Ethics Certification"
            ],
            "keyResponsibilities": [
              "Ensure compliance with AI regulations",
              "Conduct risk assessments",
              "Develop compliance policies"
            ],
            "relatedRoles": [
              "AI Ethics Consultant",
              "Data Scientist",
              "Policy Analyst",
              "Legal Consultant",
              "Ethics Officer",
              "AI Researcher"
            ],
            "growthPath": [
              "Junior",
              "Mid-Level",
              "Senior",
              "Lead"
            ],
            "averageSalaryGrowth": {
              "year1": "₹3 LPA",
              "year3": "₹5 LPA",
              "year5": "₹8 LPA"
            },
            "educationRequirements": "Bachelor's in Law, Business, or related field",
            "experienceRequirements": "0–2 years preferred"
          }
        ]
      }
    }
  }
};

module.exports = { engineeringDisciplines };