import React, {FC, useState} from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import {isMobile} from "react-device-detect";

export const Desktop: FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={css.header}>
            <div className={cn("container", css.container)}>
                <div className={css.top}>
                    <ul className={css.nav}>
                        <li className={css.navItem}><a href="#">О нас</a></li>
                        <li className={css.navItem}><a href="#">Помощь</a></li>
                        <li className={css.navItem}><a href="#">Контакты</a></li>
                    </ul>
                    <div className={css.tel}>
                        <p>Тел. для справки: <span>+996 000 00 00 00 </span></p>
                    </div>
                </div>
                <div className={css.hline}></div>
                <div className={css.bottom}>
                    <p className={css.logo}>
                        <a href="#">
                            Zeon bonus
                        </a>
                    </p>
                    <div className={css.searchBar}>
                        <input 
                        type="text"
                        placeholder="Поиск"
                        />
                        <button className={css.searchBttn}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8132 13.1103C10.3422 14.2536 8.491 14.793 6.63649 14.6186C4.78198 14.4442 3.06363 13.5691 1.83132 12.1717C0.599008 10.7742 -0.0546018 8.95929 0.00357543 7.09656C0.0617527 5.23384 0.827343 3.46334 2.14446 2.14555C3.46157 0.827763 5.23118 0.0617841 7.09296 0.00357725C8.95473 -0.0546296 10.7687 0.599313 12.1655 1.83225C13.5622 3.06519 14.4368 4.78442 14.6111 6.63987C14.7854 8.49532 14.2464 10.3475 13.1037 11.8192L18 16.6997L16.7004 18L11.8224 13.1103H11.8132ZM7.32873 12.8173C8.04984 12.8173 8.7639 12.6752 9.43013 12.3991C10.0964 12.123 10.7017 11.7183 11.2116 11.2082C11.7215 10.698 12.126 10.0923 12.402 9.42577C12.6779 8.7592 12.8199 8.04478 12.8199 7.3233C12.8199 6.60181 12.6779 5.88739 12.402 5.22083C12.126 4.55426 11.7215 3.94861 11.2116 3.43844C10.7017 2.92828 10.0964 2.52359 9.43013 2.24749C8.7639 1.97139 8.04984 1.82928 7.32873 1.82928C5.87236 1.82928 4.47565 2.40811 3.44585 3.43844C2.41604 4.46877 1.8375 5.86619 1.8375 7.3233C1.8375 8.7804 2.41604 10.1778 3.44585 11.2082C4.47565 12.2385 5.87236 12.8173 7.32873 12.8173Z" fill="#201F21"/>
                            </svg>
                        </button>
                    </div>
                    <div className={css.menu}>
                        <ul>
                            <li className={css.menuItem}>
                                <a href="#">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7228 5.08213C18.4383 4.41375 18.0282 3.80808 17.5153 3.29901C17.002 2.78842 16.3968 2.38267 15.7327 2.10381C15.044 1.8135 14.3053 1.6649 13.5596 1.66664C12.5134 1.66664 11.4926 1.95737 10.6055 2.50652C10.3933 2.63788 10.1917 2.78217 10.0007 2.93937C9.80973 2.78217 9.60812 2.63788 9.39591 2.50652C8.50885 1.95737 7.48809 1.66664 6.44187 1.66664C5.6885 1.66664 4.95848 1.81308 4.26878 2.10381C3.60242 2.38376 3.00185 2.78647 2.48617 3.29901C1.9726 3.80751 1.56235 4.41332 1.27866 5.08213C0.983681 5.77772 0.833008 6.51637 0.833008 7.27657C0.833008 7.99369 0.977315 8.74096 1.26381 9.50116C1.50361 10.1364 1.8474 10.7954 2.28669 11.4609C2.98275 12.5139 3.93984 13.6122 5.12825 14.7256C7.09761 16.5712 9.04788 17.8461 9.13064 17.8977L9.63359 18.2251C9.85642 18.3694 10.1429 18.3694 10.3657 18.2251L10.8687 17.8977C10.9515 17.8439 12.8996 16.5712 14.8711 14.7256C16.0595 13.6122 17.0166 12.5139 17.7126 11.4609C18.1519 10.7954 18.4978 10.1364 18.7355 9.50116C19.022 8.74096 19.1663 7.99369 19.1663 7.27657C19.1684 6.51637 19.0178 5.77772 18.7228 5.08213V5.08213Z" stroke="#4F70E2" strokeWidth="1.6"/>
                                    </svg>
                                    Избранное 
                                </a>
                            </li>
                            <div className={css.dividor}></div>
                            <li className={css.menuItem}>
                                <a href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5721 7.12314L12.8672 0.418204C12.3093 -0.139655 11.4358 -0.139147 10.8785 0.418204L0.418938 10.8777C0.144481 11.1522 -0.00817756 11.5291 0.000338181 11.9114C0.0083461 12.282 0.160067 12.6238 0.427922 12.8756L1.85599 14.3037C2.10334 14.5515 2.49463 14.5802 2.77569 14.3725C3.59574 13.7668 4.73708 13.8457 5.43084 14.5569C6.14155 15.2851 6.22804 16.429 5.63178 17.218C5.41904 17.4995 5.44639 17.8943 5.69585 18.1438L7.13286 19.5808C7.40024 19.8479 7.76443 19.9999 8.13662 19.9999C8.1465 19.9999 8.15666 19.9996 8.16654 19.9994C8.5371 19.9914 8.87894 19.8399 9.13074 19.5718L19.5811 9.12078C19.8555 8.84656 20.008 8.46988 19.9997 8.08733C19.9917 7.71678 19.8402 7.37498 19.5721 7.12314ZM11.8872 1.41021C11.8839 1.41208 11.8785 1.41302 11.874 1.41396L11.3784 0.918328L11.8872 1.41021ZM8.12744 18.5763L7.08833 17.5372C7.72224 16.2521 7.48646 14.6396 6.44238 13.5696C5.40186 12.5043 3.78133 12.2631 2.46447 12.9133L1.42348 11.8725L11.8731 1.42318L18.5768 8.1269L8.12744 18.5763Z" fill="#4F70E2"/>
                                </svg>
                                    Мои купоны 
                                </a>
                            </li>
                            <div className={css.dividor}></div>
                            <li className={css.menuItem}>
                                <a href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.667 2.49996C11.667 2.03972 12.0401 1.66663 12.5003 1.66663H15.8337C16.4967 1.66663 17.1326 1.93002 17.6014 2.39886C18.0703 2.8677 18.3337 3.50358 18.3337 4.16663V15.8333C18.3337 16.4963 18.0703 17.1322 17.6014 17.6011C17.1326 18.0699 16.4967 18.3333 15.8337 18.3333H12.5003C12.0401 18.3333 11.667 17.9602 11.667 17.5C11.667 17.0397 12.0401 16.6666 12.5003 16.6666H15.8337C16.0547 16.6666 16.2666 16.5788 16.4229 16.4225C16.5792 16.2663 16.667 16.0543 16.667 15.8333V4.16663C16.667 3.94561 16.5792 3.73365 16.4229 3.57737C16.2666 3.42109 16.0547 3.33329 15.8337 3.33329H12.5003C12.0401 3.33329 11.667 2.9602 11.667 2.49996Z" fill="#4F70E2"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.74408 5.24408C8.06951 4.91864 8.59715 4.91864 8.92259 5.24408L13.0893 9.41074C13.4147 9.73618 13.4147 10.2638 13.0893 10.5893L8.92259 14.7559C8.59715 15.0814 8.06951 15.0814 7.74408 14.7559C7.41864 14.4305 7.41864 13.9028 7.74408 13.5774L11.3215 10L7.74408 6.42259C7.41864 6.09715 7.41864 5.56951 7.74408 5.24408Z" fill="#4F70E2"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 9.99996C1.66699 9.53972 2.04009 9.16663 2.50033 9.16663H12.5003C12.9606 9.16663 13.3337 9.53972 13.3337 9.99996C13.3337 10.4602 12.9606 10.8333 12.5003 10.8333H2.50033C2.04009 10.8333 1.66699 10.4602 1.66699 9.99996Z" fill="#4F70E2"/>
                                </svg>
                                    Войти
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};