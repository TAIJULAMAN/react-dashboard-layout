import { LuBell } from "react-icons/lu";
import profilee from "../../../src/assets/header/profileLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import { Drawer, Radio, Space } from "antd";
import dashboard from "../../assets/routerImg/dashboard.png";
import categorie from "../../assets/routerImg/categorie.png";
import create from "../../assets/routerImg/create.png";
import settings from "../../assets/routerImg/settings.png";
import subscription from "../../assets/routerImg/subscription.png";
import user from "../../assets/routerImg/user.png";
import logo from "../../assets/header/logo.png";
import { FaChevronRight } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: dashboard,
    link: "/",
  },
  {
    key: "userManagement",
    label: "User Management",
    icon: user,
    link: "/dashboard/userManagement",
  },
  {
    key: "management",
    label: "Management",
    icon: dashboard,
    link: "/dashboard/management",
  },
  {
    key: "reports",
    label: "Reports",
    icon: user,
    link: "/dashboard/reports",
  },
  {
    key: "subscription",
    label: "Subscription",
    icon: subscription,
    link: "/dashboard/subscription",
  },
  {
    key: "settings",
    label: "Settings",
    icon: settings,
    link: "/dashboard/Settings/profile",
    children: [
      {
        key: "profile",
        label: "Profile",
        link: "/dashboard/Settings/profile",
      },
      {
        key: "terms",
        label: "Terms & Condition",
        link: "/dashboard/Settings/Terms&Condition",
      },
      {
        key: "privacy",
        label: "Privacy Policy",
        link: "/dashboard/Settings/PrivacyPolicy",
      },
    ],
  },
];

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const navigate = useNavigate();
  const contentRef = useRef({});

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const onClick = (key) => {
    setSelectedKey(key);
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-[#202020] text-white p-5">
      <div className="flex justify-between items-center">
        <div className="lg:hidden">
          <button onClick={showDrawer} className="p-2">
            <FaBars size={24} />
          </button>
          <Drawer
            title={
              <div className="flex justify-center">
                <img src={logo} alt="Logo" className="w-[160px]" />
              </div>
            }
            placement={placement}
            width={300}
            onClose={onClose}
            open={open}
            className="custom-drawer"
          >
            <div className="menu-items">
              {items.map((item) => (
                <div key={item.key}>
                  <Link
                    to={item.link}
                    className={`menu-item my-4 mx-5 py-3 px-3 flex items-center cursor-pointer ${
                      selectedKey === item.key
                        ? "bg-[#0B704E] text-white rounded-md"
                        : "bg-white rounded-md hover:bg-[#B3D3C8]"
                    }`}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        onParentClick(item.key);
                      } else {
                        setSelectedKey(item.key);
                        onClose();
                      }
                    }}
                  >
                    <img src={item.icon} alt={item.label} className="w-6 h-6" />
                    <span className="ml-3 text-base font-medium">
                      {item.label}
                    </span>
                    {item.children && (
                      <FaChevronRight
                        className={`ml-auto transform transition-all duration-300 ${
                          expandedKeys.includes(item.key) ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`children-menu bg-white -my-2 mx-5 text-black transition-all duration-300 ${
                        expandedKeys.includes(item.key) ? "expanded" : ""
                      }`}
                      style={{
                        maxHeight: expandedKeys.includes(item.key)
                          ? `${contentRef.current[item.key]?.scrollHeight}px`
                          : "0",
                      }}
                      ref={(el) => (contentRef.current[item.key] = el)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          to={child.link}
                          className={`menu-item p-4 flex items-center cursor-pointer ${
                            selectedKey === child.key
                              ? "bg-[#0B704E] text-white"
                              : "hover:bg-[#B3D3C8]"
                          }`}
                          onClick={() => {
                            setSelectedKey(child.key);
                            setExpandedKeys([]);
                            onClose();
                          }}
                        >
                          <span className="ml-8">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="custom-sidebar-footer absolute bottom-0 w-full p-4">
              <button
                onClick={handleLogout}
                className="w-full flex bg-[#0B704E] text-white text-start rounded-md p-3 mt-10"
              >
                <span className="text-2xl">
                  <IoIosLogIn />
                </span>
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </Drawer>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <div className="relative">
            <Link to={"/dashboard/Settings/notification"}>
              <LuBell className="text-2xl" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-[#0B704E] text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="border-l pl-6 border-gray-600">
            <Link to={"/dashboard/Settings/profile"}>
              <div className="flex items-center gap-3">
                <img
                  className="w-[40px] h-[40px] rounded-full border-2 border-[#0B704E]"
                  src="https://avatar.iran.liara.run/public/42"
                  alt="profile"
                />
                <div>
                  <h4 className="text-sm font-medium">Md Shah Aman</h4>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
