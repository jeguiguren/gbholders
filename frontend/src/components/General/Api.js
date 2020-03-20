
import axios from 'axios';



const apiGetRequest = (url, apiName) => {
	console.log("Get Request to " + apiName);
	return axios.get(url)
	.then(res => {
		console.log(res);
		return res.data;
	})
	.catch(error => {
		console.log(error);
		return Promise.reject('Error in ' + apiName, error);
	});
}



export const getInformes = () => {
	const url = 'https://demo3673607.mockable.io/informes';
	return apiGetRequest(url, "getInformes");
}


export const getNews = () => {
	const url = 'https://demo3673607.mockable.io/news';
	return apiGetRequest(url, "getNews");
}