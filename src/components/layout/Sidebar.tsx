import { Layout, Menu } from "antd";
import { sidebarItemsGenarator } from "../../utils/sidebarItemsGenarator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const Sidebar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  const role = "faculty";
  let SidebarItems;

  switch (role) {
    case userRole.ADMIN:
      SidebarItems = sidebarItemsGenarator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      SidebarItems = sidebarItemsGenarator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      SidebarItems = sidebarItemsGenarator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={SidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
