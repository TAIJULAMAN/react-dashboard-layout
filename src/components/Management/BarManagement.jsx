import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";

function BarManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedBar, setSelectedBar] = useState(null);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsViewModalOpen(false);
    };

    const handleView = (record) => {
        setSelectedBar(record);
        setIsViewModalOpen(true);
    };

    const dataSource = [
        { key: "1", no: "1", name: "John Doe", coverCharge: "$10", date: "05/03/2025", phone: "+1 9876543210", email: "johndoe@example.com", location: "New York, USA", image: "https://avatar.iran.liara.run/public/1", },
        { key: "2", no: "2", name: "Jane Smith", coverCharge: "$15", date: "05/04/2025", phone: "+1 1234567890", email: "janesmith@example.com", location: "Los Angeles, USA", image: "https://avatar.iran.liara.run/public/2", },
        { key: "3", no: "3", name: "Carlos Gomez", coverCharge: "$12", date: "05/05/2025", phone: "+1 2223334444", email: "carlosg@example.com", location: "Miami, USA", image: "https://avatar.iran.liara.run/public/3", },
        { key: "4", no: "4", name: "Emily Chen", coverCharge: "$20", date: "05/06/2025", phone: "+1 4445556666", email: "emilychen@example.com", location: "San Francisco, USA", image: "https://avatar.iran.liara.run/public/4", },
        { key: "5", no: "5", name: "Liam Brown", coverCharge: "$8", date: "05/07/2025", phone: "+1 5556667777", email: "liamb@example.com", location: "Chicago, USA", image: "https://avatar.iran.liara.run/public/5", },
        { key: "6", no: "6", name: "Olivia Davis", coverCharge: "$18", date: "05/08/2025", phone: "+1 7778889999", email: "oliviad@example.com", location: "Seattle, USA", image: "https://avatar.iran.liara.run/public/6", },
        { key: "7", no: "7", name: "Noah Wilson", coverCharge: "$9", date: "05/09/2025", phone: "+1 9998887777", email: "noahw@example.com", location: "Boston, USA", image: "https://avatar.iran.liara.run/public/7", },
        { key: "8", no: "8", name: "Sophia Martinez", coverCharge: "$16", date: "05/10/2025", phone: "+1 1112223333", email: "sophiam@example.com", location: "Austin, USA", image: "https://avatar.iran.liara.run/public/8", },
        { key: "9", no: "9", name: "Ethan Lee", coverCharge: "$13", date: "05/11/2025", phone: "+1 3334445555", email: "ethanl@example.com", location: "Dallas, USA", image: "https://avatar.iran.liara.run/public/9", },
        { key: "10", no: "10", name: "Isabella White", coverCharge: "$11", date: "05/12/2025", phone: "+1 8889990000", email: "isabellaw@example.com", location: "Denver, USA", image: "https://avatar.iran.liara.run/public/10", },
        { key: "11", no: "11", name: "Mason Hall", coverCharge: "$14", date: "05/13/2025", phone: "+1 1010101010", email: "masonh@example.com", location: "Phoenix, USA", image: "https://avatar.iran.liara.run/public/11", },
        { key: "12", no: "12", name: "Ava Allen", coverCharge: "$17", date: "05/14/2025", phone: "+1 2020202020", email: "avaa@example.com", location: "Portland, USA", image: "https://avatar.iran.liara.run/public/12", },
        { key: "13", no: "13", name: "Logan Young", coverCharge: "$10", date: "05/15/2025", phone: "+1 3030303030", email: "logany@example.com", location: "Philadelphia, USA", image: "https://avatar.iran.liara.run/public/13", },
        { key: "14", no: "14", name: "Mia Hernandez", coverCharge: "$19", date: "05/16/2025", phone: "+1 4040404040", email: "miah@example.com", location: "San Diego, USA", image: "https://avatar.iran.liara.run/public/14", },
        { key: "15", no: "15", name: "Lucas King", coverCharge: "$12", date: "05/17/2025", phone: "+1 5050505050", email: "lucask@example.com", location: "Atlanta, USA", image: "https://avatar.iran.liara.run/public/15", },
        { key: "16", no: "16", name: "Charlotte Wright", coverCharge: "$15", date: "05/18/2025", phone: "+1 6060606060", email: "charlottew@example.com", location: "Houston, USA", image: "https://avatar.iran.liara.run/public/16", },
        { key: "17", no: "17", name: "Benjamin Scott", coverCharge: "$9", date: "05/19/2025", phone: "+1 7070707070", email: "benjamins@example.com", location: "Las Vegas, USA", image: "https://avatar.iran.liara.run/public/17", },
        { key: "18", no: "18", name: "Amelia Green", coverCharge: "$13", date: "05/20/2025", phone: "+1 8080808080", email: "ameliag@example.com", location: "Orlando, USA", image: "https://avatar.iran.liara.run/public/18", },
        { key: "19", no: "19", name: "James Baker", coverCharge: "$11", date: "05/21/2025", phone: "+1 9090909090", email: "jamesb@example.com", location: "Charlotte, USA", image: "https://avatar.iran.liara.run/public/19", },
        { key: "20", no: "20", name: "Harper Adams", coverCharge: "$10", date: "05/22/2025", phone: "+1 1212121212", email: "harpera@example.com", location: "Tampa, USA", image: "https://avatar.iran.liara.run/public/20", },
        { key: "21", no: "21", name: "Alexander Nelson", coverCharge: "$14", date: "05/23/2025", phone: "+1 2323232323", email: "alexn@example.com", location: "Detroit, USA", image: "https://avatar.iran.liara.run/public/21", },
        { key: "22", no: "22", name: "Evelyn Carter", coverCharge: "$18", date: "05/24/2025", phone: "+1 3434343434", email: "evelync@example.com", location: "Cleveland, USA", image: "https://avatar.iran.liara.run/public/22", },
        { key: "23", no: "23", name: "Daniel Mitchell", coverCharge: "$16", date: "05/25/2025", phone: "+1 4545454545", email: "danielm@example.com", location: "Indianapolis, USA", image: "https://avatar.iran.liara.run/public/23", },
        { key: "24", no: "24", name: "Ella Perez", coverCharge: "$19", date: "05/26/2025", phone: "+1 5656565656", email: "ellap@example.com", location: "San Antonio, USA", image: "https://avatar.iran.liara.run/public/24", },
        { key: "25", no: "25", name: "Matthew Roberts", coverCharge: "$8", date: "05/27/2025", phone: "+1 6767676767", email: "matthewr@example.com", location: "Nashville, USA", image: "https://avatar.iran.liara.run/public/25", },
        { key: "26", no: "26", name: "Abigail Turner", coverCharge: "$20", date: "05/28/2025", phone: "+1 7878787878", email: "abigailt@example.com", location: "Kansas City, USA", image: "https://avatar.iran.liara.run/public/26", },
        { key: "27", no: "27", name: "Sebastian Phillips", coverCharge: "$17", date: "05/29/2025", phone: "+1 8989898989", email: "sebastianp@example.com", location: "Cincinnati, USA", image: "https://avatar.iran.liara.run/public/27", },
        { key: "28", no: "28", name: "Scarlett Campbell", coverCharge: "$13", date: "05/30/2025", phone: "+1 9091919191", email: "scarlettc@example.com", location: "Columbus, USA", image: "https://avatar.iran.liara.run/public/28", },
        { key: "29", no: "29", name: "Jack Morris", coverCharge: "$12", date: "05/31/2025", phone: "+1 9292929292", email: "jackm@example.com", location: "Milwaukee, USA", image: "https://avatar.iran.liara.run/public/29", },
        { key: "30", no: "30", name: "Grace Rogers", coverCharge: "$11", date: "06/01/2025", phone: "+1 9393939393", email: "gracer@example.com", location: "Salt Lake City, USA", image: "https://avatar.iran.liara.run/public/30", },
    ];


    const columns = [
        { title: "No", dataIndex: "no", key: "no" },
        { title: "Bar Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Phone", dataIndex: "phone", key: "phone" },
        {
            title: "Total Participants",
            key: "participants",
            render: () => (
                <div className="flex -space-x-4">
                    <img
                        className="h-10 w-10 rounded-full ring-2 ring-white inline-block"
                        src="https://i.ibb.co.com/RvFgZC8/aman.png"
                        alt="avatar"
                    />
                    <img
                        className="h-10 w-10 rounded-full ring-2 ring-white inline-block"
                        src="https://i.ibb.co.com/RvFgZC8/aman.png"
                        alt="avatar"
                    />
                    <img
                        className="h-10 w-10 rounded-full ring-2 ring-white inline-block"
                        src="https://i.ibb.co.com/RvFgZC8/aman.png"
                        alt="avatar"
                    />
                    <img
                        className="h-10 w-10 rounded-full ring-2 ring-white inline-block"
                        src="https://i.ibb.co.com/RvFgZC8/aman.png"
                        alt="avatar"
                    />
                </div>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div className="flex gap-2 text-center py-2">
                    <button
                        onClick={() => handleView(record)}
                        className="bg-[#0B704E] text-white font-semibold py-2 px-5 rounded-lg"
                    >
                        <IoEyeOutline className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#A80608] text-white font-semibold py-2 px-5 rounded-lg"
                    >
                        <MdBlockFlipped className="w-5 h-5" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen my-5 md:my-10 lg:my-10">
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: "#0B704E",
                            headerColor: "rgb(255,255,255)",
                            rowHoverBg: "#E6F4F1",
                        },
                    },
                }}
            >
                <Table dataSource={dataSource} columns={columns} />
            </ConfigProvider>

            {/* Block Confirmation Modal */}
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="flex flex-col justify-center items-center p-5">
                    <h1 className="text-xl text-center text-[#0B704E]">
                        Are you sure!
                    </h1>
                    <p>Do you want to Block your Users profile?</p>
                    <div className="flex gap-4 mt-5">
                        <button
                            onClick={handleOk}
                            className="bg-[#0B704E] text-white font-semibold w-full py-2 px-5 rounded transition duration-200"
                        >
                            CONFIRM
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-[#A80608] text-white font-semibold w-full py-2 px-5 rounded transition duration-200"
                        >
                            CANCEL
                        </button>
                    </div>
                </div>
            </Modal>

            {/* View Details Modal */}
            <Modal
                title={<h2 className="text-2xl font-bold text-[#0B704E]">Bar Details</h2>}
                open={isViewModalOpen}
                onCancel={handleCancel}
                footer={null}
                width={700}
            >
                {selectedBar && (
                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-600">Bar Name</h3>
                                <p className="text-lg">{selectedBar.name}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-600">Email</h3>
                                <p className="text-lg">{selectedBar.email}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-600">Phone</h3>
                                <p className="text-lg">{selectedBar.phone}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-600">Location</h3>
                                <p className="text-lg">{selectedBar.location}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-600">Date</h3>
                                <p className="text-lg">{selectedBar.date}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-600">Cover Charge</h3>
                                <p className="text-lg">{selectedBar.coverCharge}</p>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <h3 className="font-semibold text-gray-600 mb-2">Recent Participants</h3>
                            <div className="flex -space-x-4">
                                <img
                                    className="h-12 w-12 rounded-full ring-2 ring-white inline-block"
                                    src="https://i.ibb.co.com/RvFgZC8/aman.png"
                                    alt="avatar"
                                />
                                <img
                                    className="h-12 w-12 rounded-full ring-2 ring-white inline-block"
                                    src="https://i.ibb.co.com/RvFgZC8/aman.png"
                                    alt="avatar"
                                />
                                <img
                                    className="h-12 w-12 rounded-full ring-2 ring-white inline-block"
                                    src="https://i.ibb.co.com/RvFgZC8/aman.png"
                                    alt="avatar"
                                />
                                <span className="flex items-center justify-center h-12 w-12 rounded-full ring-2 ring-white bg-gray-700 text-white text-sm">
                                    +8
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default BarManagement;