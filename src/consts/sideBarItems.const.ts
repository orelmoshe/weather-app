import { arrayQuestions,Question } from './questions.const';
import _ from 'lodash';

export const headerName = {
    PATIENT_CHARACTERISTICS: 'Patient Characteristics',
    TREATMENT: 'Treatment',
    PATIENT_RISK_SCORE: 'Patient Risk Score',
    TREATMENT_RECOMMENDATION: 'Treatment Recommendation'
};

export const itemType = {
    QUESTIONS: 'Questions',
    PATIENT_RISK_SCORE: 'Patient Risk Score',
    TREATMENT_RECOMMENDATION: 'Treatment Recommendation'
};

export interface ItemsSideBar {
    id: number,
    displayName: string,
    type: string,
    subHeader: Question,
}

export const itemsSideBar = [
    {
        id: 0,
        displayName: headerName.PATIENT_CHARACTERISTICS,
        type: itemType.QUESTIONS,
        subHeader: _.filter(arrayQuestions, { topicName: headerName.PATIENT_CHARACTERISTICS }),
    },
    {
        id: 1,
        displayName: headerName.TREATMENT,
        type: itemType.QUESTIONS,
        subHeader: _.filter(arrayQuestions, { topicName: headerName.TREATMENT }),
    },
    {
        id: 2,
        displayName: headerName.PATIENT_RISK_SCORE,
        type: itemType.PATIENT_RISK_SCORE,
        subHeader: null,
    },
    {
        id: 3,
        displayName: headerName.TREATMENT_RECOMMENDATION,
        type: itemType.TREATMENT_RECOMMENDATION,
        subHeader: null,
    },
];