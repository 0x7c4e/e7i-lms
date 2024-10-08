import { Logo } from "./logo";
import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
	return (
		<div className="h-full  border-r flex flex-col fixed inset-y-0 z-50">
			<div className="p-6">
				<Logo />
			</div>
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	);
};
