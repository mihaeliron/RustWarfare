use core::hash;
use std::fmt::format;

fn build_greeting(user_name: &str) -> String{
    // функция build_greeting, которая принимает стринговое значение и возвращает стринговое -> String
    let message = format!("Привет, {user_name}, Wellcome в TeamFlow");
    // format - собирает новую строчку не печатаем ее сразу
    message // Без точки с запятой, потому что ьы это значение возвращаем (return)
}

fn create_user_label(name: &str, role: &str) -> String{
    format!("{name} - {role}")
}

fn validate_task_title(title: &str) -> Result<String, String>{
    if title.trim().is_empty(){
        return Err("Название задачи не может быть пустым".to_string());
    }

    // trim - убирает лишние пробелы
    Ok(title.trim().to_string())
    // Возвращаем очищение от пробелов название задачи
}
fn format_task_summary(title: &str, assignee: &str, score: u32) -> Result<String, String>{
    let message = format!("{title}. исполнитель: {assignee}.  счет: {score}");
    if title.trim().is_empty(){
        return Err("Название ".to_string());
    }
    if assignee.trim().is_empty(){
        return Err("gg".to_string());
    }

    Ok(message.trim().to_string())


}
fn main() {
    let app_name = "TeamFlow Desk";
    let lesson_number = 1;
    let rust_is_installed = true;
    
    println!("Приложение {app_name}");
    println!("Номер урока {lesson_number}");
    println!("Rust установлен? {rust_is_installed}");

    let mut counter = 0;
    // mut - делаем переменную изменяемой
    // По умолчанию все переменные в Rust - не изменяемые
    //counter = counter + 1;

    let name = "Oleg";
    let greeting = build_greeting(name);
    println!("{greeting}");

    let user_name = "Oleg";
    let user_role = "Sigma";
    let label = create_user_label(user_name, user_role);

    println!("Пользователь:{label}");

    let title = "      Сделать Первый экран KanBan";
    let validation_result = validate_task_title(title);

    match validation_result{
        Ok(clean_title) =>{
            println!("Задача создана {clean_title}");
        }
        Err(error_message) => {
            println!("Ошибка {error_message}");
        }
    }

    let title_projekt = "Сделай кабана";
    let asistent = "Коля";
    let score_user = 150;
    let format_task_summary = format_task_summary(title_projekt, asistent, score_user);

    match format_task_summary{
        Ok(clean_title) => {
            println!("Задача: {clean_title}")
        }
        Err(error) =>{
            println!("Ошибка: {error}")
        }
        
    }
}








