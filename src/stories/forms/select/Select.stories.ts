import { Meta, StoryObj } from "@storybook/react"
import { CustomSelect as Select } from "../../../common/components/forms/select";

const meta = {
  title: "Forms/Select",
  component: Select
} satisfies Meta<typeof Select> 

export default meta;


type Story = StoryObj<typeof meta>;


export const DefaultSelect: Story = {
    args: {
        options: [{ label: "Oranges", value: "oranges" }]
    }
}