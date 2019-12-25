import * as React from 'react';
import { Container, Text, Done, TextDone } from './Footer.styles';
import { IAppState } from '../../../redux/state/index';
import { connect } from 'react-redux';
import { AnswersInterface } from '../../../redux/state/answers.state';
import _ from 'lodash';
import { setScore } from '../../../redux/actions/score.actions';
import {checkBMI,checkBreastSize,checkAge,checkWeight,checkMenopausalStatus,checkProgesteroneReceptor,checkPV,checkTV,
	    checkBimart,checkTamoxifen,checkCfVsHs,checkAxila,checkCobaltVsLinear,checkDose} from '../../../services/util.service';

interface FooterProps {
	questionsRedux: AnswersInterface;
	setQuestionsPageRedux: (payload: string) => void;
	setScoreRedux: (payload: number) => void;
	setSkippedQuestionsState: (flag: any) => void;
	currentQuestionsPage: string;
	setFlagPageRiskScoreState: (flag: any) => void;
}

const Footer = ({questionsRedux,setQuestionsPageRedux,setScoreRedux,setSkippedQuestionsState,currentQuestionsPage,setFlagPageRiskScoreState
}: FooterProps) => {
	const checkFinishAnsweringQuestions = () => {
		return (
			!_.some(questionsRedux, item => item === null)
		);
	};

	const handelClick = () => {
		if (!checkFinishAnsweringQuestions()) {
			setSkippedQuestionsState(true);
			return;
		}
		setScoreRedux(calculateScore());
		setQuestionsPageRedux('Patient Risk Score');
	};

	const calculateScore = () => {
		const sumScore =
			checkBMI(questionsRedux.weight / Math.pow(questionsRedux.height / 100, 2)) +
			checkBreastSize(questionsRedux.breastSize) +
			checkAge(questionsRedux.age) +
			checkWeight(questionsRedux.weight) +
			checkMenopausalStatus(questionsRedux.menopausalStatus) +
			checkProgesteroneReceptor(questionsRedux.progesteroneReceptor) +
			checkPV(questionsRedux.pv) +
			checkTV(questionsRedux.tv) +
			checkBimart(questionsRedux.imrt) +
			checkTamoxifen(questionsRedux.tamoxifen) +
			checkCfVsHs(questionsRedux.cfHs) +
			checkAxila(questionsRedux.axila) +
			checkCobaltVsLinear(questionsRedux.cobaltVsLinear) +
			checkDose(questionsRedux.dose);
		return Math.floor(sumScore);
	};

	const riskScoreClick = () => {
		setFlagPageRiskScoreState(true);
		setQuestionsPageRedux('Treatment Recommendation');
	};

	const endSessionClick = () => {
		// const formValues = {
		// 	questionnaire_user_id: questionsRedux.idNumber,
		// 	questionnaire_breast_size: questionsRedux.breastSize,
		// 	questionnaire_height: questionsRedux.height,
		// 	questionnaire_age: questionsRedux.age,
		// 	questionnaire_menapauseal_status: questionsRedux.menopausalStatus,
		// 	questionnaire_progresterone_receptor: questionsRedux.progesteroneReceptor,
		// 	questionnaire_pv: questionsRedux.pv,
		// 	questionnaire_tv: questionsRedux.tv,
		// 	questionnaire_bimrt: questionsRedux.imrt,
		// 	questionnaire_tamoxifen: questionsRedux.tamoxifen,
		// 	questionnaire_cfhs: questionsRedux.cfHs,
		// 	questionnaire_axila: questionsRedux.axila,
		// 	questionnaire_cobalt_vs_liear: questionsRedux.cobaltVsLinear,
		// 	questionnaire_dose: questionsRedux.dose
		// };
		// // @ts-ignore
		// window.AceTech.onClickEndSession(formValues);
	};
	return (
		<Container>
			<Text>Terms & Conditions</Text>
			{currentQuestionsPage === 'Questions' && (
				<Done onClick={() => handelClick()} width="113px">
					<TextDone>Done</TextDone>
				</Done>
			)}
			{currentQuestionsPage === 'Patient Risk Score' && (
				<Done onClick={() => riskScoreClick()} width="228px">
					<TextDone>RECOMMENDATION</TextDone>
				</Done>
			)}
			{currentQuestionsPage === 'Treatment Recommendation' && (
				<Done onClick={() => endSessionClick()} width="161px">
					<TextDone>END SESSION</TextDone>
				</Done>
			)}
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		questionsRedux: state.questions,
		currentQuestionsPage: state.questionsPage.questionsPage
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setScoreRedux: (payload: number) => setScore(dispatch, payload)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
