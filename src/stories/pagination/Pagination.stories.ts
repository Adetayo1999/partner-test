import { Meta, StoryObj } from "@storybook/react"
import Pagination from "../../common/components/pagination"


const meta = {
  title: "Pagination",
  component: Pagination
} satisfies Meta<typeof Pagination>


export default meta;



type Story = StoryObj<typeof meta>;


export const  DefaultPagination: Story = {
    args: {
        currentPage: 15,
        totalItems: 100,
        dataCount: 20,
        
    }
}