import "@assets/styles/components/Buttons.scss";
import { Button } from "@components/ui/Button";

export const Buttons = () => {
  const click = () => console.log("clicked");

  return (
    <div className="buttons">
      <h3 className="buttons__title">Кнопка</h3>

      <div className="buttons__examples">
        <div className="buttons__item">
          <Button text="Отправить" click={click} />
        </div>

        <div className="buttons__item">
          <div className="buttons__name">Ховер</div>
          <Button text="Отправить" click={click} />
        </div>

        <div className="buttons__item">
          <div className="buttons__name">Нажатие</div>
          <Button text="Отправить" click={click} />
        </div>

        <div className="buttons__item">
          <div className="buttons__name">Неактивна</div>
          <Button text="Отправить" click={click} isDisabled />
        </div>
      </div>
    </div>
  );
};
