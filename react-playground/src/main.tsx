//Импорт спец режима чтобы реакт помогал находить потенциальные проблемы в разработке
import { StrictMode } from "react";
//Импорт чтобы подключить react приложение к HTML элементу
import{createRoot} from "react-dom/client";
//подключение css стилей приложения
import "./App.css";
//Импортируем главный компонент App из соседнего файла
import App from"./App.tsx";
//Находим HTML элемент с id = root куда будет вставлятбся наше реакт приложение
const rootElement = document.getElementById("root");

//Сравнение == и ===
//=== строгое сравнение( сравниваем тип и значение)
// 5===5 //5 ==="5" - то они не равны
//5 =="5" - они равны
//null == undefined - равно // null === undefined - не равно
//Проверяем существует ли root
if (rootElement === null){
  //Если не существует то останавливаем приложение с понятной ошибкой 
  throw new Error("Не найден элемент #root в inde.html")
}

//Создание react-корня и назначения команды отрисовать приложение внутри элемента rootElement                  
createRoot(rootElement).render( 
  <StrictMode>
    {/*Включаем строгий режим для доп проверок во время разработки*/}
    <App />{/* Рендер главного компонента приложения*/}
  </StrictMode> //Закрытие StrictMode
);