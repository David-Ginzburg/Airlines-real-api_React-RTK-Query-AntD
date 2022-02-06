import { useState, useRef } from 'react'
import { Image, Space, Button, Input } from "antd";
import { EyeOutlined, SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words';

const Columns = (handleOpenModal) => {
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const inputRef = useRef(null)
    
    const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={inputRef}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
					setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
					Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters, confirm)}
						size="small"
						style={{ width: 90 }}
					>
					Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex]
			? record[dataIndex]
				.toString()
				.toLowerCase()
				.includes(value.toLowerCase())
			: "",
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
			setTimeout(() => inputRef.current.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
			<Highlighter
				highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
				searchWords={[searchText]}
				autoEscape
				textToHighlight={text ? text.toString() : ""}
			/>) : (
				text
			),
    });
    
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    };
    
    const handleReset = (clearFilters, confirm) => {
        clearFilters();
        setSearchText('')
        confirm();
    };

    return (
        [{
            title: "logo",
            dataIndex: "logo",
            key: "logo",
            render: (logo, record) => (
                <Image width={100} src={logo} alt={record.name} preview={false} />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps('name'),
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            ...getColumnSearchProps('country'),
        },
        {
            title: "Slogan",
            dataIndex: "slogan",
            key: "slogan",
            ...getColumnSearchProps('slogan'),
        },
        {
            title: "Head quaters",
            key: "head_quaters",
            dataIndex: "head_quaters",
            ...getColumnSearchProps('country'),
        },
        {
            title: "Website",
            key: "website",
            dataIndex: "website",
            render: (text) => (
                <a
                    href={`https://${text}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {text}
                </a>
            ),
            ...getColumnSearchProps('website'),
        },
        {
            title: "Established",
            key: "established",
            dataIndex: "established",
            align:  'center',
            sorter: (a, b) => a.established - b.established,
            ...getColumnSearchProps('established'),
        },
        {
            title: "Action",
            key: "action",
            align:  'center',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleOpenModal(record)} icon={<EyeOutlined />} type='primary' />
                </Space>
            ),
        }]
    )
};

export default Columns;