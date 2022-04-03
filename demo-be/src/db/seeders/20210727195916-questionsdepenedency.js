'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QuestionDependencies', [
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 5,
        Value: 'I want to give complaint about my trip provider or driver',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 6,
        Value: 'I want to give complaint about my trip provider or driver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 7,
        Value: 'I want to complaint about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 8,
        Value: 'I want to Report Fraud',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 49,
        Value: 'I want to give a compliment about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 50,
        Value: 'I want to give a compliment about my transportation provider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 51,
        Value: 'I want to give a compliment about my transportation provider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 52,
        Value: 'General Questions',
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 9,
        Value: 'I want to give complaint about my trip provider or driver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 10,
        Value: 'I want to give file a complaint about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 8,
        DependentQuestionId: 11,
        Value: 'TP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 8,
        DependentQuestionId: 12,
        Value: 'TP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 13,
        Value: 'I want to give a compliment about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 14,
        Value: 'I want to give a compliment about my transportation provider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 15,
        Value: 'General Questions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 9,
        DependentQuestionId: 16,
        Value: 'COVID-19',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 9,
        DependentQuestionId: 17,
        Value: 'Poor Trip Experience - My trip did not go well.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 9,
        DependentQuestionId: 18,
        Value: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 10,
        DependentQuestionId: 19,
        Value: 'Policy & Procedure- I dont agree with a policy.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 10,
        DependentQuestionId: 20,
        Value: 'Account Issue - I can not access my account.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 10,
        DependentQuestionId: 21,
        Value: 'Phone Issue - I can not reach anyone when I call.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 10,
        DependentQuestionId: 22,
        Value: 'Poor Customer Service - I was not happy with my MAS experience.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 10,
        DependentQuestionId: 23,
        Value: 'Required Forms - I want to know the status of my form.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 10,
        DependentQuestionId: 24,
        Value: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 8,
        DependentQuestionId: 25,
        Value: 'MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 14,
        DependentQuestionId: 26,
        Value: 'Excellent Customer Service',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 17,
        DependentQuestionId: 27,
        Value: 'Driver Safety and Conduct - The drivers driving ability was concerning.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 17,
        DependentQuestionId: 28,
        Value: 'Inappropriate Behavior - The drivers and/or enrollees behavior was unacceptable.',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        QuestionDependentOn: 17,
        DependentQuestionId: 29,
        Value: 'Vehicle or Passenger Safety - There were Issues with the vehicle.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 17,
        DependentQuestionId: 30,
        Value: 'Heat/AC - The temperature of the vehicle was uncomfortable.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 17,
        DependentQuestionId: 31,
        Value: 'Late pick up or return - The driver was late picking me up.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 17,
        DependentQuestionId: 32,
        Value: 'Accident - I was involved in an accident.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 8,
        DependentQuestionId: 33,
        Value: 'MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 34,
        Value: 'I need help updating my account',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 35,
        Value: 'I want to give complaint about my trip provider or driver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 36,
        Value: 'I want to give file a complaint about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 37,
        Value: 'I want to Report Fraud',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 38,
        Value: 'General Questions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 39,
        Value: 'I want to give complaint about my trip provider or driver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 40,
        Value: 'I want to give file a complaint about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 41,
        Value: 'I want to Report Fraud',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 42,
        Value: 'I want to give a compliment about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 43,
        Value: 'I want to give a compliment about my transportation provider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 44,
        Value: 'General Questions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 45,
        Value: 'I want to give complaint about my trip provider or driver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 46,
        Value: 'I want to give file a complaint about MAS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 47,
        Value: 'I want to Report Fraud',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 1,
        DependentQuestionId: 48,
        Value: 'General Questions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 41,
        DependentQuestionId: 55,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 47,
        DependentQuestionId: 56,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 39,
        DependentQuestionId: 57,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 45,
        DependentQuestionId: 58,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 40,
        DependentQuestionId: 59,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 46,
        DependentQuestionId: 60,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 43,
        DependentQuestionId: 61,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 42,
        DependentQuestionId: 62,
        Value: 'General Questions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 44,
        DependentQuestionId: 63,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 48,
        DependentQuestionId: 64,
        Value: 'Yes',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        isDeleted: false,
        QuestionDependentOn: 4,
        DependentQuestionId: 55,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 3,
        DependentQuestionId: 56,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 4,
        DependentQuestionId: 57,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 3,
        DependentQuestionId: 58,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 4,
        DependentQuestionId: 59,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 3,
        DependentQuestionId: 60,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 3,
        DependentQuestionId: 61,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 3,
        DependentQuestionId: 62,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 4,
        DependentQuestionId: 63,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 3,
        DependentQuestionId: 64,
        Value: 'Skipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 65,
        Value: 'I have a question about a 2015 or a 2020 form.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 65,
        Value: 'I have a question about mileage reimbursement',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 65,
        Value: 'How do I apply for transportation?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 65,
        Value: 'What types of appointments are covered through Medicaid transportation?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 65,
        Value: 'How do I schedule a standing order?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 15,
        DependentQuestionId: 65,
        Value: 'How do I recover my account?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isDeleted: false,
        QuestionDependentOn: 21,
        DependentQuestionId: 54,
        Value: 'How do I recover my account?',
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuestionDependencies', null, {});
  }
};
