import {environment} from '../../environments/environment';

const baseApiUrl = environment.openWeatherMapApiUrl;

export const getCurrentWeatherUrl = () => `${baseApiUrl}/weather`;
