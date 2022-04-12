import { FormEvent, useEffect, useState } from 'react';
import api, { params } from '../../services/api';
import { Container, Content, Form, Header, Error } from './styles';

interface Geolocation {
  coords: {
    latitude?: string;
    longitude?: string;
  };
}
interface Weather {
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
}
const Index = () => {
  const [city, setCity] = useState('');
  const [inputError, setInputError] = useState('');
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getWeatherCurrentLocation)
  }, []);

  async function getWeatherCurrentLocation({ coords }: Geolocation) {
    const response = await api.get(
      `${params}&lat=${coords.latitude}&lon=${coords.longitude}`
    );
    setWeather(response.data);
  }
  async function handleCityWeather(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      const response = await api.get(`${params}&q=${city}`);
      setWeather(response.data);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por essa cidade');
    }
  }
  function handleCurrentLocation() {
    navigator.geolocation.getCurrentPosition(getWeatherCurrentLocation)
  }

  return (
    <Container>
      <Header>
        <h1>Digite uma cidade para ver como está o clima. </h1>

        <Form onSubmit={handleCityWeather}>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Digite a cidade que deseja pesquisar'
            type='text'
          />
          <button type='submit'>Pesquisar</button>
          <button
            className='currentLocation'
            title='Localização atual'
            onClick={handleCurrentLocation}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='#000000'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z' />
            </svg>
          </button>
        </Form>
      </Header>
      <Content>
        {inputError ? (
          <Error>{inputError}</Error>
        ) : (
          <>
            <div>
              <h1>{weather?.name}</h1>
              <h2>{weather?.weather[0].description}</h2>
              <h3>{weather?.main.temp}ºC</h3>
              <h4>Sensação térmica: {weather?.main.feels_like}°C</h4>
              <h5>Umidade: {weather?.main.humidity}%</h5>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              />
            </div>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Index;
