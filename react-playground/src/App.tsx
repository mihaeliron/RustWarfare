//импорт чтобы компанент мог хранить изменяемое состояние                                
import { useState } from 'react'
import UserCard from './components/UserCard';
//Главный компанент приложения
function App(){
  //Создаем состояние для имени ученика и функцию для его изменения
  const [studentName, setStudentName] = useState("Oleg");
  const [lessonCount, setLessonCount] = useState(2);
  //Функция которая будет вызываться в момент изменения текста внутри input
  function handleNameChange(event:React.ChangeEvent<HTMLInputElement>){
    //Берем базовое значение из input и сохраняем его
    setStudentName(event.target.value);
  }

  //Функция изменения номера урока при нажатии на кнопку
  function handleNextLessonClick(){
    setLessonCount(lessonCount +1);

  }

  return(
  //Возврат функции App это сама JSX разметка
  <main className='app'>
    <section className='hero'>
      <p className='eyebrow'>React+TypeScript</p>
      <h1>Первое приложение для командной работы на React</h1>
      <p className='description'>
        ble ble ble ble bli bli
      </p>
    </section>
    <section className='card'>
      <label className="filed">
        <span>Имя ученика</span>
        <input value={studentName} onChange={handleNameChange}/>
      </label>
      
      <UserCard name={studentName||"Без имени"} role = "Фронтендер"/>

      <p className='result'>
        Cейчас ты на уроке{lessonCount}
      </p>

      <button onClick={handleNextLessonClick}>
        Перейти к следующему уроку
      </button>
    </section>
  </main>
  );
}
//Экспортируем компанент чтобы его можно было использовать в других файлах
export default App;
