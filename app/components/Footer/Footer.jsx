export const Footer = () => {
    return (
        <footer className="footer">
        <Link href="./index.html" className="footer__logo">
          <span className="footer__logo-name">pindie</span>       
          <span className="footer__logo-copy">, XXI век</span>
        </Link>
        <ul className="social-list">
          <li className="social-list__item">
            <Link href="" className="button social-list__link">YT</Link>
          </li>
          <li className="social-list__item">
            <Link href="" className="button social-list__link">ВК</Link>
          </li>
          <li className="social-list__item">
            <Link href="" className="button social-list__link">TG</Link>
          </li>
        </ul>
      </footer> 
    )
}
import Link from "next/link"
import Styles from "./footer.module.css"
export function footer() {
return (
    <div className= {Styles.logo}>
<div className= {Styles.logo-name}></div>
<div className= {Styles.footer}></div>
<div className= {Styles.social-list__link}></div>
<div className= {Styles.social-list__link}></div>
  </div>
)
}