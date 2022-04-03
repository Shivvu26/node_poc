'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        id: 1,
        isDeleted: false,
        questionText: 'What do you want to talk about?',
        isAnonymousUser: null,
        Sequence: 1,
        QuestionAlias: 'MF_1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        isDeleted: false,
        questionText: 'May I know your full name?',
        isAnonymousUser: null,
        Sequence: 2,
        QuestionAlias: 'MF_2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        isDeleted: false,
        questionText: 'May I know your email?',
        isAnonymousUser: null,
        Sequence: 3,
        QuestionAlias: 'MF_3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        isDeleted: false,
        questionText: 'May I know your phone number?',
        isAnonymousUser: null,
        Sequence: 4,
        QuestionAlias: 'MF_4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        isDeleted: false,
        questionText: 'Please tell us which trip you went on?<br>1. Trip Date <br>2. Trip Invoice',
        isAnonymousUser: true,
        Sequence: 5,
        QuestionAlias: 'MFTPComplaint_5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        isDeleted: false,
        questionText: 'Please select the trip, to proceed further!',
        isAnonymousUser: false,
        Sequence: 5,
        QuestionAlias: 'MFTPComplaint_6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        isDeleted: false,
        questionText: 'Please tell your Enrollees Medicaid Number (if known/applicable):',
        isAnonymousUser: true,
        Sequence: 5,
        QuestionAlias: 'MFMasComplaint_7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        isDeleted: false,
        questionText: 'Is it regarding?',
        isAnonymousUser: null,
        Sequence: 5,
        QuestionAlias: 'MFFraud_8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        isDeleted: false,
        questionText: 'Please tell us what went wrong with you?',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFTPComplaint_9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        isDeleted: false,
        questionText: 'Please tell us what went wrong with you?',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFMasComplaint_10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        isDeleted: false,
        questionText: 'Please tell us which trip you went on?<br>1. Trip Date <br>2. Trip Invoice',
        isAnonymousUser: true,
        Sequence: 6,
        QuestionAlias: 'MFFraud_11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        isDeleted: false,
        questionText: 'Please tell us which trip you went on?<br>1. Trip Date <br>2. Trip Invoice',
        isAnonymousUser: false,
        Sequence: 6,
        QuestionAlias: 'MFFraud_12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        isDeleted: false,
        questionText: 'Please tell us what delighted you about MAS?',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFMasCompliment_13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        isDeleted: false,
        questionText: 'Please tell us what delighted you about TP?',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFTPCompliment_14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        isDeleted: false,
        questionText: 'What do you have a question about?',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFGeneral_15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        isDeleted: false,
        questionText: 'COVID-19',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFTPComplaint_16',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        isDeleted: false,
        questionText: 'Poor Trip Experience - My trip did not go well.',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFTPComplaint_17',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        isDeleted: false,
        questionText: 'Other',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFTPComplaint_18',
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        id: 19,
        isDeleted: false,
        questionText: 'What policy can we assist you with?',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_19',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        isDeleted: false,
        questionText: 'Account Issue - I can not access my account.',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        isDeleted: false,
        questionText: 'Phone Issue - I can not reach anyone when I call.',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_21',
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        id: 22,
        isDeleted: false,
        questionText: 'Poor Customer Service - I was not happy with my MAS experience.',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        isDeleted: false,
        questionText: 'Required Forms - I want to know the status of my form.',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_23',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        isDeleted: false,
        questionText: 'Other',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_24',
        createdAt: new Date(),
        updatedAt: new Date()
      },




      {
        id: 25,
        isDeleted: false,
        questionText: 'Please tell your Enrollees Medicaid Number (if known/applicable):',
        isAnonymousUser: true,
        Sequence: 5,
        QuestionAlias: 'MFFraud_25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        isDeleted: false,
        questionText: 'Excellent Customer Service',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasCompliment_26',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        isDeleted: false,
        questionText: 'Driver Safety and Conduct - The drivers driving ability was concerning.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFTPComplaint_27',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        isDeleted: false,
        questionText: 'Inappropriate Behavior - The drivers and/or enrollees behavior was unacceptable.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFTPComplaint_28',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        isDeleted: false,
        questionText: 'Vehicle or Passenger Safety - There were Issues with the vehicle.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFTPComplaint_29',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        isDeleted: false,
        questionText: 'Heat/AC - The temperature of the vehicle was uncomfortable.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFTPComplaint_30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        isDeleted: false,
        questionText: 'Late pick up or return - The driver was late picking me up.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFTPComplaint_31',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 32,
        isDeleted: false,
        questionText: 'Accident - I was involved in an accident.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFTPComplaint_32',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        isDeleted: false,
        questionText: 'Please tell us what went wrong with you?',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFFraud_33',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        isDeleted: false,
        questionText: 'I need help updating my account',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFGeneral_34',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        isDeleted: false,
        questionText: 'Please describe your Complaint .Thank you!',
        isAnonymousUser: null,
        Sequence: 9,
        QuestionAlias: 'MFTPComplaint_35',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        isDeleted: false,
        questionText: 'Please describe your Complaint .Thank you!',
        isAnonymousUser: null,
        Sequence: 9,
        QuestionAlias: 'MFMasComplaint_36',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        isDeleted: false,
        questionText: 'Please describe your Report and Fraud issue.Thank you!',
        isAnonymousUser: null,
        Sequence: 9,
        QuestionAlias: 'MFFraud_37',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        isDeleted: false,
        questionText: 'Please describe your General query.Thank you!',
        isAnonymousUser: null,
        Sequence: 9,
        QuestionAlias: 'MFGeneral_38',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        isDeleted: false,
        questionText: 'Would you like to be contacted regarding your complaint?',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFTPComplaint_39',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        isDeleted: false,
        questionText: 'Would you like to be contacted regarding your complaint?',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFMasComplaint_40',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 41,
        isDeleted: false,
        questionText: 'Would you like to be contacted regarding your Report and Fraud?',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFFraud_41',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 42,
        isDeleted: false,
        questionText: 'Send me a copy of my response',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFMasCompliment_42',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 43,
        isDeleted: false,
        questionText: 'Send me a copy of my response',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFTPCompliment_43',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 44,
        isDeleted: false,
        questionText: 'Would you like to be contacted regarding your Query? ',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFGeneral_44',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 45,
        isDeleted: false,
        questionText: 'Send me a copy of my response',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFTPComplaint_45',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 46,
        isDeleted: false,
        questionText: 'Send me a copy of my response',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFMasComplaint_46',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 47,
        isDeleted: false,
        questionText: 'Send me a copy of my response',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFMasFraud_47',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 48,
        isDeleted: false,
        questionText: 'Send me a copy of my response',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFGeneral_48',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 49,
        isDeleted: false,
        questionText: 'Please tell your Enrollees Medicaid Number (if known/applicable):',
        isAnonymousUser: true,
        Sequence: 5,
        QuestionAlias: 'MFMasCompliment_49',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 50,
        isDeleted: false,
        questionText: 'Please tell us which trip you went on?<br>1. Trip Date <br>2. Trip Invoice',
        isAnonymousUser: true,
        Sequence: 5,
        QuestionAlias: 'MFTPCompliment_50',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 51,
        isDeleted: false,
        questionText: 'Please select the trip, to proceed further!',
        isAnonymousUser: false,
        Sequence: 5,
        QuestionAlias: 'MFTPCompliment_51',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 52,
        isDeleted: false,
        questionText: 'Please tell your Enrollees Medicaid Number (if known/applicable):',
        isAnonymousUser: false,
        Sequence: 5,
        QuestionAlias: 'MFGeneral_52',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 53,
        isDeleted: false,
        questionText: 'Fraud or Abuse - I want to report fraud or the misuse of transportation.',
        isAnonymousUser: null,
        Sequence: 8,
        QuestionAlias: 'MFFraud_53',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 54,
        isDeleted: false,
        questionText: 'The Wait Time is too long',
        isAnonymousUser: null,
        Sequence: 7,
        QuestionAlias: 'MFMasComplaint_54',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 55,
        isDeleted: false,
        questionText: 'Please Provide your phone number',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFFraud_55',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 56,
        isDeleted: false,
        questionText: 'Please Provide your email',
        isAnonymousUser: null,
        Sequence: 13,
        QuestionAlias: 'MFFraud_56',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 57,
        isDeleted: false,
        questionText: 'Please Provide your phone number',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFTPComplaint_57',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 58,
        isDeleted: false,
        questionText: 'Please Provide your email',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFTPComplaint_58',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 59,
        isDeleted: false,
        questionText: 'Please Provide your phone number',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFMASComplaint_59',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 60,
        isDeleted: false,
        questionText: 'Please Provide your email',
        isAnonymousUser: null,
        Sequence: 13,
        QuestionAlias: 'MFMASComplaint_60',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 61,
        isDeleted: false,
        questionText: 'Please Provide your email',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFTPCompliment_61',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 62,
        isDeleted: false,
        questionText: 'Please Provide your email',
        isAnonymousUser: null,
        Sequence: 11,
        QuestionAlias: 'MFMASCompliment_62',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 63,
        isDeleted: false,
        questionText: 'Please Provide your phone number',
        isAnonymousUser: null,
        Sequence: 10,
        QuestionAlias: 'MFGeneral_63',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 64,
        isDeleted: false,
        questionText: 'Please Provide your email',
        isAnonymousUser: null,
        Sequence: 12,
        QuestionAlias: 'MFGeneral_64',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 65,
        isDeleted: false,
        questionText: '',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFGeneral_65',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 70,
        isDeleted: false,
        questionText: '',
        isAnonymousUser: null,
        Sequence: 6,
        QuestionAlias: 'MFMASCompliment_70',
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
