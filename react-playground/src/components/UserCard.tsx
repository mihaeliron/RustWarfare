//созданние пропрс тоесть данных для кампонента
type UserCardProps ={
    name:string;
    role:string;
}

//Создаем  компонента UserCard и сразу достаем name  и role  из props
function UserCard({name, role}:UserCardProps){
    return(
        <article className="user-card">
            <div className="user-card__avatar">
                {name.slice(0,1).toUpperCase()}
            </div>
            <div className="user-card__content">
                <h2>{name}</h2>
                <p>{role}</p>
            </div>

        </article>
    );
}

export default UserCard;