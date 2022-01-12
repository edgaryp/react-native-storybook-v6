import React, { FC } from "react";
import { Text } from "react-native";

type MyTextProps = {
  value: string;
  onPress?: () => void;
};

export const MyText: FC<MyTextProps> = ({ value, onPress }) => {
  return <Text onPress={onPress}>{value}</Text>;
};
