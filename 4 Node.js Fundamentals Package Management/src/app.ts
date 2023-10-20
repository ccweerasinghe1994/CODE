import { log } from 'console';
import { get } from 'http';

get('http://www.google.com', (response) => {
	response.on('data', (data) => {
		log(`Data Chuck is ${data}`);
	});

	response.on('end', () => {
		log('No More Data');
	});
});

log(require.cache);
