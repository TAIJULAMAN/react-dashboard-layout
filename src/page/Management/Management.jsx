import BarManagement from "../../components/Management/BarManagement";
import ClubManagement from "../../components/Management/ClubManagement";
import RestaurantManagement from "../../components/Management/RestaurantManagement";

const Management = () => {
          return (
                    <div className="mt-4">
                              <BarManagement />
                              <ClubManagement />
                              <RestaurantManagement />
                    </div>
          );
};

export default Management;