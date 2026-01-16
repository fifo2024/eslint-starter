/**
 * @file Main UI
 */
import styles from './style.module.less';
import React, { FC } from 'react';

interface MainProps {
    [index: string]: string;
}

const Main: FC<MainProps> = () => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
        const a = 0;
        console.log(a);
    };

    return (
        <div className={styles.main}>
            Home
            <div id="currentValue"></div>
            <button onClick={onClick}>change</button>
        </div>
    );
};

export default Main;
