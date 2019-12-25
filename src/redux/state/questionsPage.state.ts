export interface QuestionsPageInterface {
	questionsPage: 'Questions' | 'Patient Risk Score' | 'Treatment Recommendation';
}

const initialQuestionsPageState: QuestionsPageInterface = {
	questionsPage: 'Questions'
};

export default initialQuestionsPageState;
