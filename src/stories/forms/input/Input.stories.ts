import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../../common/components/forms/input"

const meta = {
    title: "Forms/Input",
    component: Input
} satisfies Meta<typeof Input>;


export default meta;


type Story = StoryObj<typeof meta>;


export const DefaultInput: Story = {
    args: {}
} 

export const InputWithLabel: Story = {
    args: {
        labelText: "Partner ID"
    }
}

export const PasswordInput: Story = {
    args: {
        labelText: "Master Key",
        type: "password",
        name:"password"
    }
}