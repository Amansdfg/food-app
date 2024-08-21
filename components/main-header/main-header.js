"use client"
import NavLink from "../nav-link/nav-link";
import Link from "next/link";
import Image from "next/image"
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import MainHeaderBackGround from "./main-header-background";
export default function MainHeader(){
    return(
        <>
            <MainHeaderBackGround/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="a plate with food on it"/>
                    NextLevel food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>                                                        
                    </ul>
                </nav>
            </header>
        </>
    )
}