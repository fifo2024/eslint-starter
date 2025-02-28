/**
 * @file Main UI
 */
import React, { FC } from 'react';
import styles from './style.module.less';

interface MainProps {
    [index: string]: string;
}

const Main: FC<MainProps> = () => {
    const onClick = (e: any) => {
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
