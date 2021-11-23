import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return ( 
       <div className={styles.footer}>
          <h4>Bye bye</h4>
          <a href="www.facebook.com">
               <i class="fab fa-facebook"> Facebook</i> 
          </a>
       </div>
     );
}
 
export default Footer;