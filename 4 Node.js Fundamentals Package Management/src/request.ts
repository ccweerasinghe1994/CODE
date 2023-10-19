import { log } from 'console';

const encryptData = (data: string) => {
	return `encrypted ${data}`;
};

const request = (url: string, data: string) => {
	const encrypt = encryptData(data);

	log(`sending the ${encrypt} to ${url}`);
};

export { request };
