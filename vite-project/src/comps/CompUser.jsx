import { memo } from "react";
import "./Card.css";

function CompUser({ user, setUser }) {
  const handleClickName = () => {
    setUser((user) => ({
      ...user,
      name: "Alex",
    }));
  };

  const handleClickAge = () => {
    setUser((user) => ({
      ...user,
      age: ++user.age,
    }));
  };

  const handleClickActivity = () => {
    setUser((user) => ({
      ...user,
      isActive: !user.isActive,
    }));
  };
  console.log("usercomp", user);
  return (
    <div className="Card" name="UserInfoCard">
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive.toString()}</p>
      <div className="UserButtons">
        <button onClick={handleClickName}>Сменить имя</button>
        <button onClick={handleClickAge}>Увеличить возраст</button>
        <button onClick={handleClickActivity}>Переключить активность</button>
      </div>
    </div>
  );
}

export default memo(CompUser);
