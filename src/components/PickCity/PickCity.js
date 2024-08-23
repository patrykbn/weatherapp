import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';

import { useState } from 'react';

const PickCity = ( {onCityChange} ) => {
  const [city, setCity] = useState('');

  const handleCitySearch = (e) => {
    e.preventDefault();
    onCityChange(city);
    setCity('');
  }

  return (
    <form onSubmit={handleCitySearch} className={styles.pickCityForm}> 
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <Button type='submit'>Search</Button>
    </form>
  );
};

export default PickCity;