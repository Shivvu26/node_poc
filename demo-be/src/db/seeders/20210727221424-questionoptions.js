'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QuestionOptions', [
      {
        isDeleted: false,
        value: 'I want to give complaint about my trip provider or driver',
        questionId: 1,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I want to complaint about MAS',
        questionId: 1,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Compliment about TP',
        questionId: 1,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Compliment about MAS',
        questionId: 1,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'General Questions',
        questionId: 1,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'MAS',
        questionId: 8,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'TP',
        questionId: 8,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Confidentiality - I am concerned about my privacy.',
        questionId: 9,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'COVID-19',
        questionId: 9,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Poor Trip Experience - My trip did not go well.',
        questionId: 9,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Frequent Reassigns - My trip was reassigned to another transportation provider',
        questionId: 9,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Group Rides & PPOs - I want to opt of a group ride or PPO',
        questionId: 9,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other',
        questionId: 9,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Policy & Procedure- I dont agree with a policy.',
        questionId: 10,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Account Issue - I can not access my account. ',
        questionId: 10,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Address Issue - I do not see my medical providers address listed.',
        questionId: 10,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Bus Pass - I need bus pass assistance.',
        questionId: 10,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Phone Issue - I can not reach anyone when I call.',
        questionId: 10,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Confidentiality - I am concerned about my privacy.',
        questionId: 10,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Cost Concern',
        questionId: 10,
        sequence: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Poor Customer Service - I was not happy with my MAS experience.',
        questionId: 10,
        sequence: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Required Forms - I want to know the status of my form.',
        questionId: 10,
        sequence: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'MAS Online System - I can not access the online trip  system on the MAS website.',
        questionId: 10,
        sequence: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other',
        questionId: 10,
        sequence: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'Excellent Customer Service',
        questionId: 13,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'other',
        questionId: 13,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Excellent Customer Service',
        questionId: 14,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'other',
        questionId: 14,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'I have a question about a 2015 or a 2020 form.',
        questionId: 15,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I have a question about mileage reimbursement',
        questionId: 15,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I have a question about my user account',
        questionId: 15,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I have a question about my PPO',
        questionId: 15,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I need help updating my account',
        questionId: 15,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'How do I apply for transportation?',
        questionId: 15,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'What types of appointments are covered through Medicaid transportation?',
        questionId: 15,
        sequence: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'How do I schedule a standing order?',
        questionId: 15,
        sequence: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'How do I recover my account?',
        questionId: 15,
        sequence: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Face Coverings - Masks were not worn properly or at all.',
        questionId: 16,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Multi-loading - There was more than one passenger in the vehicle. ',
        questionId: 16,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Social Distancing - There was an issue with social distancing. ',
        questionId: 16,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Unclean Vehicle - the vehicle was not clean or sanitized.',
        questionId: 16,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other - The issue I want to report is not listed here. ',
        questionId: 16,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Driver Safety and Conduct - The drivers driving ability was concerning.',
        questionId: 17,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Inappropriate Behavior - The drivers and/or enrollees behavior was unacceptable.',
        questionId: 17,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Smoking - There was smoking and/or drug use in the vehicle.',
        questionId: 17,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Vehicle or Passenger Safety - There were Issues with the vehicle.',
        questionId: 17,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Heat/AC - The temperature of the vehicle was uncomfortable.',
        questionId: 17,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Late pick up or return - The driver was late picking me up.',
        questionId: 17,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No Show - The driver did not show up. ',
        questionId: 17,
        sequence: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Accident - I was involved in an accident.',
        questionId: 17,
        sequence: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Charged or requested cash - The driver requested payment. ',
        questionId: 17,
        sequence: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other - The issue I want to report is not listed here.',
        questionId: 17,
        sequence: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'The issue I want to report isnt listed here.',
        questionId: 18,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: '72 Hour Policy',
        questionId: 19,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Will Call Policy',
        questionId: 19,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Med Provider needs to arrange my trip',
        questionId: 19,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I have questions about another policy',
        questionId: 19,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Application - I want to check on the status of my account request ',
        questionId: 20,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Account Blocked - My account is blocked',
        questionId: 20,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Verify all- My account is in a verify all status and I dont know why',
        questionId: 20,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Account Inactive - My account is inactive',
        questionId: 20,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Account Assistance - I am unable to set up a trip.',
        questionId: 20,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Eligibility Issue - I am listed as ineligible for transporation',
        questionId: 20,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        value: 'Multi-factor Authentication - I can not receive text message or emails to access my account',
        questionId: 20,
        sequence: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'My call was disconnected',
        questionId: 21,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The Wait Time is too long',
        questionId: 21,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The automated system wasnt working for me/the automated system didnt recognize my information',
        questionId: 21,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'The person who took my call was rude',
        questionId: 22,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I have not received a call back.',
        questionId: 22,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The person I was on the phone with hung up on me.',
        questionId: 22,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The person I was on the phone with transferred me inappropriately',
        questionId: 22,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'My trip not set up correctly',
        questionId: 22,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The person I was on the phone with would not set up my trip.',
        questionId: 22,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I could not get in touch with anyone at MAS.',
        questionId: 22,
        sequence: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: '2015 form submission',
        questionId: 23,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: '2020 form submission',
        questionId: 23,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Letter of Medical Necessity Submission',
        questionId: 23,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'The issue I want to report isnt listed here.',
        questionId: 24,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'The compliment is about a staff',
        questionId: 26,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The compliment is about my overall experience',
        questionId: 26,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Unsafe or Reckless Driving',
        questionId: 27,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Cellphone Use',
        questionId: 27,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Under the influence',
        questionId: 27,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other',
        questionId: 27,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Assault',
        questionId: 28,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Rude Behavior',
        questionId: 28,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Harassment',
        questionId: 28,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Discriminatory statements',
        questionId: 28,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Inappropriate Remarks',
        questionId: 28,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Soliciting Favors',
        questionId: 28,
        sequence: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other',
        questionId: 28,
        sequence: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: '',
        questionId: 29,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Seatbelt',
        questionId: 29,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Unclean Vehicle',
        questionId: 29,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Unlicensed or Registered Vehicle',
        questionId: 29,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other',
        questionId: 29,
        sequence: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        isDeleted: false,
        value: 'Heat',
        questionId: 30,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'AC',
        questionId: 30,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'Arrived late but was seen',
        questionId: 31,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Missed Appointment',
        questionId: 31,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        isDeleted: false,
        value: 'Vehicle related - The accident occurred while I was inside the vehicle',
        questionId: 32,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Non-vehicle related - The accident occurred while I was outside the vehicle.',
        questionId: 32,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'Fraud or Abuse - I want to report fraud or the misuse of transportation.',
        questionId: 33,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'I am a medical provider',
        questionId: 34,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I am an enrollee',
        questionId: 34,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'I am a transportation provider',
        questionId: 34,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 39,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 39,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'Yes',
        questionId: 40,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 40,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'Yes',
        questionId: 41,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 41,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        isDeleted: false,
        value: 'Yes',
        questionId: 42,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 42,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 43,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 43,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 44,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 44,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 45,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 45,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 46,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 46,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 47,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 47,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        value: 'Yes',
        questionId: 48,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'No',
        questionId: 48,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'A medicaid enrollee is misusing medicaid transportation.',
        questionId: 53,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'A transportation provider is misusing medicaid transportation.',
        questionId: 53,
        sequence: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Other',
        questionId: 53,
        sequence: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The automated system didn\'t recognize my information',
        questionId: 21,
        sequence: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'Wait time was longer than 10 minutes',
        questionId: 54,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'http://www.medanswering.com/',
        questionId: 65,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        value: 'The compliment I want to report isn\'t listed here.',
        questionId: 26,
        sequence: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuestionOptions', null, {});
  }
};
