
import { SignInButton } from '../SignInButton';


import Image from 'next/image'
import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.Container}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="AnbraNews" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}