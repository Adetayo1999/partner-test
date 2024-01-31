import { BrowserRouter as Router } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsProps } from "../../common/components/tabs";


const TabsWithRouter = (props: TabsProps) =>   <Router> <Tabs {...props} /> </Router>

const meta = {
    title: "Tabs",
    component: TabsWithRouter
} satisfies Meta<typeof TabsWithRouter>

export default meta;

type Story = StoryObj<typeof meta>;


const TABS = [
    {
        id: 1,
        title: "Summary",
        path: "/summary",
    },
    {
        id: 2,
        title: "Transactions",
        path: "/transactions",
    },
    {
        id: 3,
        title: "Merchants",
        path: "/merchants",
    },
    {
        id: 4,
        title: "Resolution Center",
        path: "/resolution_center",
    },
]

export const DefaultTabs: Story = {
    args: {
        tabs: TABS
    }
}
