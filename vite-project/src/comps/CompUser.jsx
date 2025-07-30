import { useState } from "react";
import "./Card.css";

function CompUser() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const ChangeName = () => {
    setUser((user) => ({
      ...user,
      name: "Alex",
    }));
  };

  const IncreaseAge = () => {
    setUser((user) => ({
      ...user,
      age: user.age++,
    }));
  };

  const ChangeIsActive = () => {
    setUser((user) => ({
      ...user,
      isActive: !user.isActive,
    }));
  };
  return (
    <div class="Card" name="UserInfoCard">
      <h3>Профиль пользователя</h3>
      <p>{`Имя: ${user.name}`}</p>
      <p>{`Возраст: ${user.age}`}</p>
      <p>{`Активен: ${user.isActive}`}</p>
      <div class="UserButtons">
        <button onClick={ChangeName}>Сменить имя</button>
        <button onClick={IncreaseAge}>Увеличить возраст</button>
        <button onClick={ChangeIsActive}>Переключить активность</button>
      </div>
    </div>
  );
}

export default CompUser;
