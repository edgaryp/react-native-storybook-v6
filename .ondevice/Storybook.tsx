import React from "react";
import { getStorybookUI } from "@storybook/react-native";
import { Platform, StatusBar, View } from "react-native";

import "./storybook.requires";

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
