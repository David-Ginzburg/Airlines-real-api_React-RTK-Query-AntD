import { useState } from "react"
import { Typography } from 'antd'

const pageSizeOptions = ["25", "50"]

export const paginationConfig = {
    pageSizeOptions,
    showTotal: (total, range) => (
        <Typography.Text>
            {range[0]} - {range[1]} of{" "}
            <Typography.Text strong>{total}</Typography.Text>
        </Typography.Text>
    ),
    showSizeChanger: true,
}

const usePaginationFilter = () => {
    const [filters, setFilters] = useState({
        current: 1,
        pageSize: pageSizeOptions[0],
    })

    return [filters, setFilters]
}

export default usePaginationFilter