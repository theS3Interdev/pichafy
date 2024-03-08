"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { navigationLinks } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileNavigation = () => {
	const pathname = usePathname();

	return (
		<header className="header">
			<Link href="/" className="sidebar-logo">
				<Image
					src="/assets/images/logo-icon.svg"
					alt="logo"
					width={32}
					height={32}
				/>

				<p className="text-sky-500 text-3xl font-semibold">pichafy.ai</p>
			</Link>

			<nav className="flex gap-2">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />

					<Sheet>
						<SheetTrigger>
							<Image
								src="/assets/icons/menu.svg"
								alt="menu"
								width={34}
								height={34}
								className="cursor-pointer"
							/>
						</SheetTrigger>
						<SheetContent className="sheet-content sm:w-64">
							<>
								<div className="flex items-center gap-2">
									<Image
										src="/assets/images/logo-icon.svg"
										alt="logo"
										width={34}
										height={34}
									/>

									<p className="text-sky-500 text-3xl font-semibold">
										pichafy.ai
									</p>
								</div>

								<ul className="header-nav_elements">
									{navigationLinks.map((link) => {
										const isActive = link.route === pathname;

										return (
											<li
												className={`${
													isActive && "gradient-text"
												} p-18 flex whitespace-nowrap text-dark-700`}
												key={link.route}
											>
												<Link
													className="sidebar-link cursor-pointer"
													href={link.route}
												>
													<Image
														src={link.icon}
														alt="logo"
														width={24}
														height={24}
													/>
													{link.label}
												</Link>
											</li>
										);
									})}
								</ul>
							</>
						</SheetContent>
					</Sheet>
				</SignedIn>

				<SignedOut>
					<Button asChild className="button bg-purple-gradient bg-cover">
						<Link href="/sign-in">Sign In</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
};
