import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileImage } from './ProfileImage';
import { colors } from '../utils/colors';

interface ProfileImageExampleProps {
  user: {
    name: string;
    profileImage?: string;
  };
}

export const ProfileImageExample: React.FC<ProfileImageExampleProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <ProfileImage
        profileImage={user.profileImage}
        size={80}
        showBorder={true}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    marginBottom: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primaryText,
  },
});