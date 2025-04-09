import { ConfigProvider, Radio, Table } from "antd";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

function Report() {
    const [activeTab, setActiveTab] = useState("bar");

    const handleTabChange = (e) => {
        setActiveTab(e.target.value);
    };

    const barReportData = [
        { key: "1", no: "1", name: "Downtown Bar", revenue: "$15,000", customers: "450", date: "2025-04-01", status: "Completed" },
        { key: "2", no: "2", name: "Skyline Lounge", revenue: "$12,500", customers: "380", date: "2025-04-01", status: "Pending" },
        { key: "3", no: "3", name: "Harbor View", revenue: "$18,200", customers: "520", date: "2025-04-01", status: "Completed" },
    ];

    const clubReportData = [
        { key: "1", no: "1", name: "Pulse Nightclub", revenue: "$25,000", attendees: "800", date: "2025-04-01", status: "Completed" },
        { key: "2", no: "2", name: "Echo Lounge", revenue: "$19,800", attendees: "650", date: "2025-04-01", status: "Pending" },
        { key: "3", no: "3", name: "Velvet Room", revenue: "$22,500", attendees: "720", date: "2025-04-01", status: "Completed" },
    ];

    const restaurantReportData = [
        { key: "1", no: "1", name: "La Belle Cuisine", revenue: "$8,500", diners: "220", date: "2025-04-01", status: "Completed" },
        { key: "2", no: "2", name: "Sakura Japanese", revenue: "$7,200", diners: "180", date: "2025-04-01", status: "Pending" },
        { key: "3", no: "3", name: "Tuscany Treats", revenue: "$9,100", diners: "240", date: "2025-04-01", status: "Completed" },
    ];

    const barColumns = [
        { title: "No", dataIndex: "no", key: "no" },
        { title: "Bar Name", dataIndex: "name", key: "name" },
        { title: "Daily Revenue", dataIndex: "revenue", key: "revenue" },
        { title: "Total Customers", dataIndex: "customers", key: "customers" },
        { title: "Date", dataIndex: "date", key: "date" },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <span className={`px-3 py-1 rounded-full ${
                    status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                }`}>
                    {status}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <button className="bg-[#0DC553] text-white font-semibold py-2 px-5 rounded-lg">
                    <IoEyeOutline className="w-5 h-5" />
                </button>
            ),
        },
    ];

    const clubColumns = [
        { title: "No", dataIndex: "no", key: "no" },
        { title: "Club Name", dataIndex: "name", key: "name" },
        { title: "Daily Revenue", dataIndex: "revenue", key: "revenue" },
        { title: "Total Attendees", dataIndex: "attendees", key: "attendees" },
        { title: "Date", dataIndex: "date", key: "date" },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <span className={`px-3 py-1 rounded-full ${
                    status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                }`}>
                    {status}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <button className="bg-[#0DC553] text-white font-semibold py-2 px-5 rounded-lg">
                    <IoEyeOutline className="w-5 h-5" />
                </button>
            ),
        },
    ];

    const restaurantColumns = [
        { title: "No", dataIndex: "no", key: "no" },
        { title: "Restaurant Name", dataIndex: "name", key: "name" },
        { title: "Daily Revenue", dataIndex: "revenue", key: "revenue" },
        { title: "Total Diners", dataIndex: "diners", key: "diners" },
        { title: "Date", dataIndex: "date", key: "date" },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <span className={`px-3 py-1 rounded-full ${
                    status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                }`}>
                    {status}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <button className="bg-[#0DC553] text-white font-semibold py-2 px-5 rounded-lg">
                    <IoEyeOutline className="w-5 h-5" />
                </button>
            ),
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="mt-10 mb-8">
                <Radio.Group
                    value={activeTab}
                    onChange={handleTabChange}
                    className="flex flex-wrap gap-4"
                >
                    <Radio.Button
                        value="bar"
                        className={`py-2 px-6 rounded-lg ${
                            activeTab === "bar"
                                ? "bg-[#0DC553] text-white"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        Bar Reports
                    </Radio.Button>
                    <Radio.Button
                        value="club"
                        className={`py-2 px-6 rounded-lg ${
                            activeTab === "club"
                                ? "bg-[#0DC553] text-white"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        Club Reports
                    </Radio.Button>
                    <Radio.Button
                        value="restaurant"
                        className={`py-2 px-6 rounded-lg ${
                            activeTab === "restaurant"
                                ? "bg-[#0DC553] text-white"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        Restaurant Reports
                    </Radio.Button>
                </Radio.Group>
            </div>

            <div className="mt-4">
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: "#0B704E",
                                headerColor: "rgb(255,255,255)",
                                cellFontSize: 20,
                                headerSplitColor: "#0B704E",
                            },
                            Pagination: {
                                colorPrimaryBorder: "rgb(32,84,6)",
                                colorBorder: "rgb(42,108,9)",
                                colorPrimary: "rgb(37,102,5)",
                                colorPrimaryHover: "rgb(19,194,194)",
                                colorText: "rgb(19,194,194)",
                                itemSize: 40,
                                controlOutline: "rgb(19,194,194)"
                            },
                        },
                    }}
                >
                    <Table
                        dataSource={
                            activeTab === "bar"
                                ? barReportData
                                : activeTab === "club"
                                ? clubReportData
                                : restaurantReportData
                        }
                        columns={
                            activeTab === "bar"
                                ? barColumns
                                : activeTab === "club"
                                ? clubColumns
                                : restaurantColumns
                        }
                        pagination={{ pageSize: 10 }}
                        scroll={{ x: "max-content" }}
                    />
                </ConfigProvider>
            </div>
        </div>
    );
}

export default Report;