import React from 'react';
import { View, Image, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../utils/colors';

interface ProfileImageProps {
  profileImage?: string | null;
  size?: number;
  style?: ViewStyle;
  defaultIcon?: string;
  showBorder?: boolean;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  profileImage,
  size = 80,
  style,
  defaultIcon = '👤',
  showBorder = false,
}) => {
  const containerStyle = [
    styles.container,
    {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: showBorder ? 2 : 0,
    },
    style,
  ];

  const iconStyle = [
    styles.defaultIcon,
    {
      fontSize: size * 0.4,
    },
  ];

  if (profileImage) {
    return (
      <View style={containerStyle}>
        <Image
          source={{ uri: profileImage }}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <View style={[containerStyle, styles.placeholder]}>
      <Text style={iconStyle}>{defaultIcon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderColor: colors.primaryButton,
    shadowColor: colors.activeIcon,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    backgroundColor: colors.cardBackground,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
  },
  defaultIcon: {
    color: colors.secondaryText,
  },
});