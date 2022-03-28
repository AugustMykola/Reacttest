import React from "react";
import classes from "../Header.module.scss";
import { Link } from "react-router-dom";


const Home = () =>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.header__content}>
                    <Link to="/" className={classes.header__content__logo}>
                        Foodify Application
                </Link>

                    <nav className={classes.header__content__nav}>
                        <ul className={classes.header__content__list}>
                            <li>
                                <button >
                                    <Link to="/randomDish">
                                        Random dish
                            </Link>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <Link to="/favorites" >
                                        Favorite dish
                            </Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.header__space_ceaper}></div>
                </div>
            </header>
        </React.Fragment>
    );
}




export default Home;