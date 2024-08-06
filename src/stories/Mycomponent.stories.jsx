import React from "react";
import MyWebComponent from "../components/Mycomponent";

export default {
  title: "Example/MyWebComponent",
  component: MyWebComponent,
};

const Template = (args) => <MyWebComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Hello, Storybook!",
};
