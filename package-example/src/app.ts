import axios, {AxiosError} from 'axios';

//let's make a request to the google homepage

axios.get('https://www.google.com').then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.data);
}).catch((error) => {
    if (error instanceof AxiosError){
        console.log(error.message);
        console.log(error.code);
        console.log(error.isAxiosError);
    }
}).then(() => {
    console.log('I am always called');
});