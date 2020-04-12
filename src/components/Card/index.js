import React from 'react';
import { Image } from 'react-native';
import { CardContainer, CardTitle, CardItem } from './style';

const Card = props => (
  <CardContainer>
    {props.data.map(item => {
      return (
        <CardItem>
          <Image source={item.image} style={styles.imageStyle} />
          <CardTitle>
            {item.title.length > 30
              ? `${item.title.substring(0, 28)}...`
              : item.title}
          </CardTitle>
        </CardItem>
      );
    })}
  </CardContainer>
);

const styles = {
  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 0,
    flex: 1,
    borderRadius: 10,
    paddingTop: 0,
  },
};

export default Card;
