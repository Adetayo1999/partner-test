import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../../common/components/forms/dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown
} satisfies Meta<typeof Dropdown>


export default meta;

type Story = StoryObj<typeof meta>;


export const DefaultDropdown: Story = {
  args: {
    options: [
        {
            label: "Nigeria",
            value: "nigeria"
        },
        {
            label: "Ghana",
            value: "ghana"
        },
        {
            label: "Cameron",
            value: "cameron"
        },
    ]
  }
}