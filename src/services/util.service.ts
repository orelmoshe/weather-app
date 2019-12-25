export const checkBMI = (answer: number): number => {
	if (answer >= 25) return 1;
	else return 0;
};

export const checkBreastSize = (answer: string): number => {
	switch (answer) {
		case 'D':
			return 8;

		case 'C':
			return 4;

		case 'AB':
			return 0;

		default:
			return 0;
	}
};

export const checkAge = (answer: number): number => {
	if (answer >= 65) return 7;
	else if (answer >= 50 && answer < 65) return 5;
	else return 0;
};

export const checkWeight = (answer: number): number => {
	if (answer >= 70) return 5;
	else return 0;
};

export const checkMenopausalStatus = (answer: string): number => {
	switch (answer) {
		case 'Post':
			return 6;

		case 'Pre':
			return 0;

		default:
			return 0;
	}
};

export const checkProgesteroneReceptor = (answer: string): number => {
	switch (answer) {
		case 'Positive':
			return -14;

		case 'Negative':
			return 0;

		default:
			return 0;
	}
};

export const checkPV = (answer: number): number => {
	if (answer >= 9) return 12;
	else return 0;
};

export const checkTV = (answer: number): number => {
	if (answer >= 10) return 15;
	else if (answer >= 0 && answer < 10) return 2;
	else return 0;
};

export const checkBimart = (answer: string): number => {
	switch (answer) {
		case 'IMRT':
			return -5;

		case 'Conventional':
			return 0;

		default:
			return 0;
	}
};

export const checkTamoxifen = (answer: string): number => {
	switch (answer) {
		case 'Yes':
			return 2;

		case 'No':
			return 0;

		default:
			return 0;
	}
};

export const checkCfVsHs = (answer: string): number => {
	switch (answer) {
		case 'CF':
			return 8;

		case 'HS':
			return 0;

		default:
			return 0;
	}
};

export const checkAxila = (answer: string): number => {
	switch (answer) {
		case 'Yes':
			return 6;

		case 'No':
			return 0;

		default:
			return 0;
	}
};

export const checkCobaltVsLinear = (answer: string): number => {
	switch (answer) {
		case 'Cobalt-60':
			return 7;

		case 'Linear accelerator':
			return 0;

		default:
			return 0;
	}
};

export const checkDose = (answer: string): number => {
	switch (answer) {
		case '>50 gray':
			return 3;

		case '<50 gray':
			return 0;

		default:
			return 0;
	}
};
