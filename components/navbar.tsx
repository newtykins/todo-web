import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/client';
import { useState } from 'react';
import { Avatar } from '@windmill/react-ui';
import Link from 'next/link';

const Nav = ({ session }: { session: Session }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="relative flex items-center justify-between">
				<div title="Todon't" className="inline-flex items-center">
					<Link href="/" aria-label="Todon't">
						<svg
							className="w-8 text-deep-purple-accent-400"
							viewBox="0 0 24 24"
							strokeLinejoin="round"
							strokeWidth="2"
							strokeLinecap="round"
							strokeMiterlimit="10"
							stroke="currentColor"
							fill="none"
						>
							<rect x="3" y="1" width="7" height="12" />
							<rect x="3" y="17" width="7" height="6" />
							<rect x="14" y="1" width="7" height="6" />
							<rect x="14" y="11" width="7" height="12" />
						</svg>
						<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
							Todon't
						</span>
					</Link>
				</div>
				<ul className="flex items-center hidden space-x-8 lg:flex">
					{/*
					<li>
						<a
							href="/"
							aria-label="About us"
							title="About us"
							className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							About us
						</a>
					</li>*/}
					<li>
						{!session ? (
							<button
								onClick={() => signIn()}
								className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
								aria-label="Sign in"
								title="Sign in"
							>
								Sign in
							</button>
						) : (
							<div>
								<div className="relative inline-block text-left">
									<div>
										<button
											type="button"
											id="menu-button"
											aria-expanded="true"
											aria-haspopup="true"
											onClick={() =>
												setIsMenuOpen(!isMenuOpen)
											}
										>
											<Avatar
												size="large"
												src={
													session.user?.image ?? 'yes'
												}
											></Avatar>
										</button>
									</div>
									{isMenuOpen && (
										<div
											className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="menu-button"
											tabIndex={-1}
										>
											<div className="py-1" role="none">
												<button
													type="submit"
													className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
													role="menuitem"
													tabIndex={-1}
													id="menu-item-3"
													onClick={() => signOut()}
												>
													Sign out
												</button>
											</div>
										</div>
									)}
								</div>
							</div>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
