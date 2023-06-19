import "@assets/styles/components/Menu.scss";
import { Fab } from "@components/ui/Fab";
import { Icon } from "@components/ui/Icon";
import { Link } from "@components/ui/Link";

export const Menu = () => {
  const redirectToMessanger = () => {
    window.open("https://t.me/vasilevskyvalera", "_blank");
  };

  return (
    <div className="menu">
      <div className="menu__header">
        <Icon name="logo" />
        <p className="menu__sign">Задание выполнил</p>
      </div>

      <div className="menu__content">
        <h2 className="menu__title">
          Василевский <br /> Валерий Александрович
        </h2>

        <p className="menu__description">
          Студент 3 курса специальности
          <br />
          «Прикладная информатика» в КузГТУ.
          <br />
          До этого писал на Vue.
          <br />С React знаком немного, но есть желание изучать дальше.
          <br />В большинстве своем понимаю все аналогии с Vue.
        </p>

        <h4 className="menu__number ">+7 (996) 332-04-54</h4>

        <div className="menu__contact">
          <Fab iconName="contact" click={redirectToMessanger} />
          <Link
            to="messanger"
            title="@vasilevskyvalera"
            click={redirectToMessanger}
            currentLinkId="messanger"
          />
        </div>
      </div>
    </div>
  );
};
