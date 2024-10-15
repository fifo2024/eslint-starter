/**
 * @file Page404 UI
 * @author zhaoyadong<zhaoyadong@baidu.com>
 */
import React from 'react';

import Styles from './style.module.less';

const Page404: React.FC<any> = () => {
    return <div className={Styles.page404}>Page 404</div>;
};

export default React.memo(Page404);
