import * as T from '../types';
import initialAnswersState, { AnswersInterface } from '../../redux/state/answers.state';

const answersReducer = (
    state: AnswersInterface = initialAnswersState,
    action: any
): AnswersInterface => {
    switch (action.type) {
        case T.SET_ID_NUMBER:
            return {
                ...state,
                idNumber: action.payload
            };

        case T.SET_SIZE_BREAST:
            return {
                ...state,
                breastSize: action.payload
            };

        case T.SET_WEIGHT:
            return {
                ...state,
                weight: action.payload
            };

        case T.SET_HEIGHT:
            return {
                ...state,
                height: action.payload
            };

        case T.SET_AGE:
            return {
                ...state,
                age: action.payload
            };

        case T.SET_MENOPAUSAL_STATUS:
            return {
                ...state,
                menopausalStatus: action.payload
            };

        case T.SET_PROGESTERONE_RECEPTOR:
            return {
                ...state,
                progesteroneReceptor: action.payload
            };

        case T.SET_PV:
            return {
                ...state,
                pv: action.payload
            };

        case T.SET_TV:
            return {
                ...state,
                tv: action.payload
            };

        case T.SET_IMRT:
            return {
                ...state,
                imrt: action.payload
            };

        case T.SET_TAMOXIFEN:
            return {
                ...state,
                tamoxifen: action.payload
            };

        case T.SET_CF_HS:
            return {
                ...state,
                cfHs: action.payload
            };

        case T.SET_AXILA:
            return {
                ...state,
                axila: action.payload
            };

        case T.SET_COBALT_VS_LINEAR:
            return {
                ...state,
                cobaltVsLinear: action.payload
            };

        case T.SET_DOSE:
            return {
                ...state,
                dose: action.payload
            };

        default:
            return state;
    }
};
export default answersReducer;
