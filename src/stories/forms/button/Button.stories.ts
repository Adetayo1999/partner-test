import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../common/components/forms/button"


const meta = {
    title: "Forms/Button",
    component: Button, 

} satisfies Meta<typeof Button>;


export default meta;


type Story = StoryObj<typeof meta>;


export const DefaultButton: Story = {
   args: {
      text: "Hello World",
   }
}

export const SmallButton: Story = {
    args: {
      text: "Logout",
      size: "sm",
      variant: "danger"
    }
}


export const DangerButton: Story = {
   args: {
      text: "Danger Button",
      variant: "danger"
   }
}

export const SecondaryButton: Story = {
   args: {
      text: "Secondary",
      variant: "secondary"
   }
}

export const LoadingButton: Story = {
   args: {
      text: "Loading",
      variant: "danger",
      loading: true,
      size: "sm"
   }
}
