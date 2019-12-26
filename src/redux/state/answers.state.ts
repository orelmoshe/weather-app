export interface AnswersInterface {
	idNumber: number;
	breastSize: string;
	weight: number;
	height: number;
	age: number;
	menopausalStatus: string;
    progesteroneReceptor: string;
    pv: number;
	tv: number;
	imrt: string;
	tamoxifen: string;
	cfHs: string;
	axila: string;
	cobaltVsLinear: string;
	dose: string;
}

const initialAnswersState: AnswersInterface = {
		idNumber: null,
		breastSize: null,
		weight: null,
		height: null,
		age: null,
		menopausalStatus: null,
		progesteroneReceptor: null,
		pv: null,
		tv: null,
		imrt: null,
		tamoxifen: null,
		cfHs: null,
		axila: null,
		cobaltVsLinear: null,
		dose: null
};

export default initialAnswersState;