export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
  {
    id: "4",
    companyName: "Amazon",
    jobTitle: "Backend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 80,
      ATS: {
        score: 85,
        tips: [],
      },
      toneAndStyle: {
        score: 80,
        tips: [],
      },
      content: {
        score: 82,
        tips: [],
      },
      structure: {
        score: 78,
        tips: [],
      },
      skills: {
        score: 84,
        tips: [],
      },
    },
  },
  {
    id: "5",
    companyName: "Meta",
    jobTitle: "Full Stack Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 70,
      ATS: {
        score: 75,
        tips: [],
      },
      toneAndStyle: {
        score: 72,
        tips: [],
      },
      content: {
        score: 74,
        tips: [],
      },
      structure: {
        score: 71,
        tips: [],
      },
      skills: {
        score: 73,
        tips: [],
      },
    },
  },
  {
    id: "6",
    companyName: "Netflix",
    jobTitle: "DevOps Engineer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 65,
      ATS: {
        score: 68,
        tips: [],
      },
      toneAndStyle: {
        score: 66,
        tips: [],
      },
      content: {
        score: 67,
        tips: [],
      },
      structure: {
        score: 65,
        tips: [],
      },
      skills: {
        score: 69,
        tips: [],
      },
    },
  },
  {
    id: "7",
    companyName: "Tesla",
    jobTitle: "Machine Learning Engineer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 78,
      ATS: {
        score: 80,
        tips: [],
      },
      toneAndStyle: {
        score: 79,
        tips: [],
      },
      content: {
        score: 77,
        tips: [],
      },
      structure: {
        score: 76,
        tips: [],
      },
      skills: {
        score: 78,
        tips: [],
      },
    },
  },
  {
    id: "8",
    companyName: "IBM",
    jobTitle: "Data Scientist",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 82,
      ATS: {
        score: 84,
        tips: [],
      },
      toneAndStyle: {
        score: 83,
        tips: [],
      },
      content: {
        score: 81,
        tips: [],
      },
      structure: {
        score: 80,
        tips: [],
      },
      skills: {
        score: 82,
        tips: [],
      },
    },
  },
  {
    id: "9",
    companyName: "Salesforce",
    jobTitle: "CRM Specialist",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 77,
      ATS: {
        score: 80,
        tips: [],
      },
      toneAndStyle: {
        score: 78,
        tips: [],
      },
      content: {
        score: 76,
        tips: [],
      },
      structure: {
        score: 75,
        tips: [],
      },
      skills: {
        score: 77,
        tips: [],
      },
    },
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;
