import { Radio } from "antd";
import { useState } from "react";
import BarManagement from "../../components/Management/BarManagement";
import ClubManagement from "../../components/Management/ClubManagement";
import RestaurantManagement from "../../components/Management/RestaurantManagement";

function Management() {
    const [activeTab, setActiveTab] = useState("bar");

    const handleTabChange = (e) => {
        setActiveTab(e.target.value);
    };

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
                        Bar Management
                    </Radio.Button>
                    <Radio.Button
                        value="club"
                        className={`py-2 px-6 rounded-lg ${
                            activeTab === "club"
                                ? "bg-[#0DC553] text-white"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        Club Management
                    </Radio.Button>
                    <Radio.Button
                        value="restaurant"
                        className={`py-2 px-6 rounded-lg ${
                            activeTab === "restaurant"
                                ? "bg-[#0DC553] text-white"
                                : "bg-gray-100 text-gray-600"
                        }`}
                    >
                        Restaurant Management
                    </Radio.Button>
                </Radio.Group>
            </div>

            <div className="mt-4">
                {activeTab === "bar" && <BarManagement />}
                {activeTab === "club" && <ClubManagement />}
                {activeTab === "restaurant" && <RestaurantManagement />}
            </div>
        </div>
    );
}

export default Management;