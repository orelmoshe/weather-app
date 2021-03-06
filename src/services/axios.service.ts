import axios from 'axios';

export default class AxiosService {
	public static instance;

	public constructor() {
		if (AxiosService.instance) {
			return AxiosService.instance;
		}
		AxiosService.instance = this;
	}

	private defaultOnError = err => {
		if (!err) {
			return;
		}
		if (err.status === 400) {
			// tslint:disable-next-line: no-console
			console.error('got status 400 - bad request');
		}
		if (err.status === 401) {
			// tslint:disable-next-line: no-console
			console.error('got status 401 - unauthorized');
		}
		if (err.status === 404) {
			// tslint:disable-next-line: no-console
			console.error('got status 404 - not found');
		}
		// tslint:disable-next-line: no-console
		console.error('Error: ', err);
	};

	private defaultOnSuccess = response => {
		// tslint:disable-next-line: no-console
		// console.log('response ?', response);
		return response;
	};

	public get = async (route, params, onSuccess, onError) => {
		if (!onSuccess) {
			onSuccess = this.defaultOnSuccess;
		}
		if (!onError) {
			onError = this.defaultOnError;
		}
		try {
			const response = await axios.get(route, params);
			return onSuccess(response.data);
		} catch (error) {
			onError(error);
		}
	};

	public post = async (route, params, onSuccess, onError) => {
		if (!onSuccess) {
			onSuccess = this.defaultOnSuccess;
		}
		if (!onError) {
			onError = this.defaultOnError;
		}
		const options = {
			headers: { 'Content-Type': 'application/json' }
		};
		try {
			const response = await axios.post(route, params, options || {});
			return onSuccess(response.data);
		} catch (error) {
			onError(error);
		}
	};
}
