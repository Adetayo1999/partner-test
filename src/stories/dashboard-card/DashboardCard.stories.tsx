import { BrowserRouter as Router } from "react-router-dom"
import { StoryObj, Meta } from "@storybook/react"
import { DashboardCard, DashboardCardProps } from "../../common/components/dashboard-card";


const DashboardCardWithRouter = (props: DashboardCardProps) => <Router> <DashboardCard {...props}/> </Router>

const meta = {
  title: "Dashboard Card",
  component: DashboardCardWithRouter,
  parameters: {
    layer: "centered"
  }
} satisfies Meta<typeof DashboardCardWithRouter>

export default meta;


type Story = StoryObj<typeof meta>


export const DefaultDashboardCard: Story = {
    args: {
        metric: 40000,
        title: "Total Order",
        subText: "10,234 txns"
    }
}

export const DashboardCardWithLink: Story = {
  args: {
    metric: 40000,
    title: "Total Order",
    subText: "10,234 txns",
    link: "https://google.com"
}
}