import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MyText } from ".";

export default {
  title: "",
  component: MyText,
} as ComponentMeta<typeof MyText>;

export const Basic: ComponentStory<typeof MyText> = () => (
  <MyText value="this is text" />
);

export const WithProp: ComponentStory<typeof MyText> = () => (
  <MyText
    value="this is text"
    onPress={() => {
      console.log("pressed");
    }}
  />
);
