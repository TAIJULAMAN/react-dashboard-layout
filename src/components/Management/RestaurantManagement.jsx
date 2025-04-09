import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";

function RestaurantManagement() {
          const [isModalOpen, setIsModalOpen] = useState(false);

          const handleOk = () => {
                    setIsModalOpen(false);
          };

          const handleCancel = () => {
                    setIsModalOpen(false);
          };

          const dataSource = [
                    { key: "1", no: "1", name: "John Doe", date: "05/03/2025", phone: "+1 9876543210", email: "johndoe@example.com", location: "New York, USA", tableNo: "100" },
                    { key: "2", no: "2", name: "Jane Smith", date: "05/04/2025", phone: "+1 1234567890", email: "janesmith@example.com", location: "Los Angeles, USA", tableNo: "20" },
                    { key: "3", no: "3", name: "Carlos Gomez", date: "05/05/2025", phone: "+1 2223334444", email: "carlosg@example.com", location: "Miami, USA", tableNo: "30" },
                    { key: "4", no: "4", name: "Emily Chen", date: "05/06/2025", phone: "+1 4445556666", email: "emilychen@example.com", location: "San Francisco, USA", tableNo: "40" },
                    { key: "5", no: "5", name: "Liam Brown", date: "05/07/2025", phone: "+1 5556667777", email: "liamb@example.com", location: "Chicago, USA", tableNo: "50" },
                    { key: "6", no: "6", name: "Olivia Davis", date: "05/08/2025", phone: "+1 7778889999", email: "oliviad@example.com", location: "Seattle, USA", tableNo: "60" },
                    { key: "7", no: "7", name: "Noah Wilson", date: "05/09/2025", phone: "+1 9998887777", email: "noahw@example.com", location: "Boston, USA", tableNo: "70" },
                    { key: "8", no: "8", name: "Sophia Martinez", date: "05/10/2025", phone: "+1 1112223333", email: "sophiam@example.com", location: "Austin, USA", tableNo: "89" },
                    { key: "9", no: "9", name: "Ethan Lee", date: "05/11/2025", phone: "+1 3334445555", email: "ethanl@example.com", location: "Dallas, USA", tableNo: "99" },
                    { key: "10", no: "10", name: "Isabella White", date: "05/12/2025", phone: "+1 8889990000", email: "isabellaw@example.com", location: "Denver, USA", tableNo: "100" },
                    { key: "11", no: "11", name: "Mason Hall", date: "05/13/2025", phone: "+1 1010101010", email: "masonh@example.com", location: "Phoenix, USA", tableNo: "101" },
                    { key: "12", no: "12", name: "Ava Allen", date: "05/14/2025", phone: "+1 2020202020", email: "avaa@example.com", location: "Portland, USA", tableNo: "102" },
                    { key: "13", no: "13", name: "Logan Young", date: "05/15/2025", phone: "+1 3030303030", email: "logany@example.com", location: "Philadelphia, USA", tableNo: "103" },
                    { key: "14", no: "14", name: "Mia Hernandez", date: "05/16/2025", phone: "+1 4040404040", email: "miah@example.com", location: "San Diego, USA", tableNo: "104" },
                    { key: "15", no: "15", name: "Lucas King", date: "05/17/2025", phone: "+1 5050505050", email: "lucask@example.com", location: "Atlanta, USA", tableNo: "105" },
                    { key: "16", no: "16", name: "Charlotte Wright", date: "05/18/2025", phone: "+1 6060606060", email: "charlottew@example.com", location: "Houston, USA", tableNo: "106" },
                    { key: "17", no: "17", name: "Benjamin Scott", date: "05/19/2025", phone: "+1 7070707070", email: "benjamins@example.com", location: "Las Vegas, USA", tableNo: "107" },
                    { key: "18", no: "18", name: "Amelia Green", date: "05/20/2025", phone: "+1 8080808080", email: "ameliag@example.com", location: "Orlando, USA", tableNo: "108" },
                    { key: "19", no: "19", name: "James Baker", date: "05/21/2025", phone: "+1 9090909090", email: "jamesb@example.com", location: "Charlotte, USA", tableNo: "109" },
                    { key: "20", no: "20", name: "Harper Adams", date: "05/22/2025", phone: "+1 1212121212", email: "harpera@example.com", location: "Tampa, USA", tableNo: "110" },
                    { key: "21", no: "21", name: "Alexander Nelson", date: "05/23/2025", phone: "+1 2323232323", email: "alexn@example.com", location: "Detroit, USA", tableNo: "111" },
                    { key: "22", no: "22", name: "Evelyn Carter", date: "05/24/2025", phone: "+1 3434343434", email: "evelync@example.com", location: "Cleveland, USA", tableNo: "112" },
                    { key: "23", no: "23", name: "Daniel Mitchell", date: "05/25/2025", phone: "+1 4545454545", email: "danielm@example.com", location: "Indianapolis, USA", tableNo: "113" },
                    { key: "24", no: "24", name: "Ella Perez", date: "05/26/2025", phone: "+1 5656565656", email: "ellap@example.com", location: "San Antonio, USA", tableNo: "114" },
                    { key: "25", no: "25", name: "Matthew Roberts", date: "05/27/2025", phone: "+1 6767676767", email: "matthewr@example.com", location: "Nashville, USA", tableNo: "115" },
                    { key: "26", no: "26", name: "Abigail Turner", date: "05/28/2025", phone: "+1 7878787878", email: "abigailt@example.com", location: "Kansas City, USA", tableNo: "116" },
                    { key: "27", no: "27", name: "Sebastian Phillips", date: "05/29/2025", phone: "+1 8989898989", email: "sebastianp@example.com", location: "Cincinnati, USA", tableNo: "117" },
                    { key: "28", no: "28", name: "Scarlett Campbell", date: "05/30/2025", phone: "+1 9091919191", email: "scarlettc@example.com", location: "Columbus, USA", tableNo: "118" },
                    { key: "29", no: "29", name: "Jack Morris", date: "05/31/2025", phone: "+1 9292929292", email: "jackm@example.com", location: "Milwaukee, USA", tableNo: "119" },
                    { key: "30", no: "30", name: "Grace Rogers", date: "06/01/2025", phone: "+1 9393939393", email: "gracer@example.com", location: "Salt Lake City, USA", tableNo: "120" },
          ];


          const columns = [
                    {
                              title: "No",
                              dataIndex: "no",
                              key: "no",
                    },
                    {
                              title: "Club Name",
                              dataIndex: "name",
                              key: "name",
                    },
                    {
                              title: "Email",
                              dataIndex: "email",
                              key: "email",
                    },
                    {
                              title: "Location",
                              dataIndex: "location",
                              key: "location",
                    },
                    {
                              title: "Table No",
                              dataIndex: "tableNo",
                              key: "tableNo",
                    },
                    {
                              title: "Action",
                              key: "action",
                              render: () => (
                                        <div className="flex gap-2 text-center py-2">
                                                  <button
                                                            className="bg-[#0DC553] text-white font-semibold py-2 px-5 rounded-lg"
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
                                                            InputNumber: {
                                                                      activeBorderColor: "rgb(19,194,194)",
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
                                                            Table: {
                                                                      headerBg: "#0B704E",
                                                                      headerColor: "rgb(255,255,255)",
                                                                      cellFontSize: 20,
                                                                      headerSplitColor: "#0B704E",
                                                            },
                                                  },
                                        }}
                              >
                                        <Table
                                                  dataSource={dataSource}
                                                  columns={columns}
                                                  pagination={{ pageSize: 10 }}
                                                  scroll={{ x: "max-content" }}
                                        />
                                        <Modal
                                                  open={isModalOpen}
                                                  centered
                                                  onCancel={handleCancel}
                                                  footer={null}
                                        >
                                                  <div className="flex flex-col justify-center items-center p-5">
                                                            <h1 className="text-xl text-center text-[#00C0B5]">
                                                                      Are you sure !
                                                            </h1>
                                                            <p>Do you want to Block your Users profile ?</p>
                                                            <div className="text-center py-5">
                                                                      <button
                                                                                onClick={handleOk}
                                                                                className="bg-[#00c0b5] text-white font-semibold w-full py-2 px-5 rounded transition duration-200"
                                                                      >
                                                                                CONFIRM
                                                                      </button>
                                                            </div>
                                                  </div>
                                        </Modal>
                              </ConfigProvider>
                    </div>
          );
}

export default RestaurantManagement;