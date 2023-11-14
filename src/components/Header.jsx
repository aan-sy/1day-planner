// import TimeAgo from 'react-timeago';
// import koreanStrings from 'react-timeago/lib/language-strings/ko';
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

// const formatter = buildFormatter(koreanStrings);

import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { useDarkMode } from '../context/DarkModeContext';


export default function Header() {
  const newDate = new Date();
  const time = {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    date: newDate.getDate(),
    day: newDate.getDay()
  }
  switch(time.day) {
    case 0:
      time.day = '일';
      break;
    case 1:
      time.day = '월';
      break;
    case 2:
      time.day = '화';
      break;
    case 3:
      time.day = '수';
      break;
    case 4:
      time.day = '목';
      break;
    case 5:
      time.day = '금';
      break;
    case 6:
      time.day = '토';
      break;
    default:
      console.log('요일을 불러올 수 없음');
  }

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header>
      <p>{`${time.year}.${time.month}.${time.date}.${time.day}요일`}</p>
      <button onClick={toggleDarkMode}>{darkMode ? <BiSolidSun /> : <BiSolidMoon />}</button>
    </header>
  );
}

