import React, {FC} from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import {SearchControl} from "../SearchControl";
import {ReactComponent as Favorites} from "@/assets/icons/favorites.svg";
import {ReactComponent as Login} from "@/assets/icons/log-in.svg";
import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";
import {ReactComponent as Ticket} from "@/assets/icons/ticket.svg";

export const Desktop: FC = () => {

  // function useWindowSize() {
  //   const [size, setSize] = useState([0, 0]);
  //   useLayoutEffect(() => {
  //     function updateSize() {
  //       setSize([window.innerWidth, window.innerHeight]);
  //     }
  //     window.addEventListener('resize', updateSize);
  //     updateSize();
  //     return () => window.removeEventListener('resize', updateSize);
  //   }, []);
  //   return size;
  // }

  // function ShowWindowDimensions() {
  //   const [width, height] = useWindowSize();
  //   if(width === 768) {
  //     return <Mobile/>; 
  //   }
  //   return <Desktop/>;
  // }

  // ShowWindowDimensions()
    

  const [isSearchOpen, setIsSearchOpen] =  React.useState<any>({});

  return (
    <div className={css.header}>
      <div className={cn("container", css.container)}>
        <div className={css.top}>
            <ul className={css.nav}>
            <li className={css.navItem}><a href="#"> О нас </a></li>
            <li className={css.navItem}><a href="#"> Помощь </a></li>
            <li className={css.navItem}><a href="#"> Контакты </a></li>
          </ul>
          <div className={css.tel}>
            <p>Тел. для справок: <span> +996 000 00 00 00 </span></p>
          </div>
        </div>
        <div className={css.hline}></div>
        <div className={css.bottom}>
          <p className={css.logo}>
            <a href="#"> Zeon bonus </a>
          </p>
            <SearchControl className={css.inputWrap} onRedirectToResult={() => setIsSearchOpen(false)}/>
          <div className={css.menu}>
            <ul>
              <li className={css.menuItem}>
                <a href="#"> <Favorites/> Избранное </a>
              </li>
              <div className={css.dividor}></div>
              <li className={css.menuItem}> 
                <a href="#"> <Ticket/> Мои купоны </a>
              </li>
              <div className={css.dividor}></div>
              <li className={css.menuItem}> 
                <a href="#"> <Login/> Войти </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};