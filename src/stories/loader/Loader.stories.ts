import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../../common/components/loader";

const meta = {
    title: "Loader",
    component: Loader,
} satisfies Meta<typeof Loader> 

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLoader: Story = {
     args: {
        size: 60,
        color: "#0075E2"
     }
}