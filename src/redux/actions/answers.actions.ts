import * as T from '../types';

export const setIdNumber = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_ID_NUMBER,
		payload
	});
};

export const setSizeBreast = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_SIZE_BREAST,
		payload
	});
};

export const setWeight = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_WEIGHT,
		payload
	});
};

export const setHeight = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_HEIGHT,
		payload
	});
};

export const setAge = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_AGE,
		payload
	});
};

export const setMenopausalStatus = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_MENOPAUSAL_STATUS,
		payload
	});
};

export const setProgesteroneReceptor = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_PROGESTERONE_RECEPTOR,
		payload
	});
};

export const setPv = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_PV,
		payload
	});
};

export const setTv = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_TV,
		payload
	});
};

export const setImrt = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_IMRT,
		payload
	});
};

export const setTamoxifen = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_TAMOXIFEN,
		payload
	});
};

export const setCfHs = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_CF_HS,
		payload
	});
};

export const setAxila = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_AXILA,
		payload
	});
};

export const setCobaltVsLinear = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_COBALT_VS_LINEAR,
		payload
	});
};

export const setDose = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_DOSE,
		payload
	});
};
