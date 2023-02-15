import React, {FC} from 'react';

import styles from './styles';

import {BasicHeader, BasicHeaderProps, Typography} from '~components/atoms';

interface Props extends BasicHeaderProps {
  title: string;
}

const HeaderTitle: FC<Props> = ({title, ...props}) => {
  return (
    <BasicHeader {...props}>
      <Typography variant="xxl" style={styles.title}>
        {title}
      </Typography>
    </BasicHeader>
  );
};

export default HeaderTitle;
