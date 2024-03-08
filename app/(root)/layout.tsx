import { MobileNavigation } from "@/components/shared/mobile-navigation";
import { SideBar } from "@/components/shared/side-bar";
import { Toaster } from "@/components/ui/toaster";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="root">
			<SideBar />

			<MobileNavigation />

			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>

			<Toaster />
		</main>
	);
};

export default AppRootLayout;
