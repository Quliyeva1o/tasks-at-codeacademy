import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import controller from '../../API/requests.js';
import { endpoints } from '../../API/constants.js';

const MyTable = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        controller.getAll(endpoints.orders).then((res) => {
            setMyData(res.data);
        });
    }, []);

    const columns = [
        {
            title: 'customerId',
            dataIndex: 'customerId',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Category 1',
                    value: 'Category 1',
                },
                {
                    text: 'Category 2',
                    value: 'Category 2',
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.customerId.startsWith(value),
            width: '30%',
        },
        {
            title: 'shipName',
            dataIndex: 'shipName',
            sorter:
                (a, b) => a.shipName.localeCompare(b.shipName)

        },
        {
            title: 'orderDate',
            dataIndex: 'orderDate',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.orderDate.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
    ];


    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table columns={columns} dataSource={myData.map((item, index) => ({ ...item, key: index }))} onChange={onChange} />
    );
};

export default MyTable;
