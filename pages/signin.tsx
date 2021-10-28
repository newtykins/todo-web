import { GetServerSideProps, NextPage } from 'next';
import { providers, signIn } from 'next-auth/client';
import { AppProviders } from 'next-auth/providers';
import Link from 'next/link';

// @ts-ignore
const SignIn: NextPage = ({ providers }: { providers: AppProviders }) => {
	return (
		<>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
					<div className="flex flex-col mb-16 sm:text-center sm:mb-0">
						<div className="mb-6 sm:mx-auto">
							<Link href="/">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
									<svg
										className="w-10 h-10 text-deep-purple-accent-400"
										stroke="currentColor"
										viewBox="0 0 52 52"
									>
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
							</Link>
						</div>
						<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
								<span className="relative inline-block">
									<svg
										viewBox="0 0 52 24"
										fill="currentColor"
										className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
									>
										<defs>
											<pattern
												id="e77df901-b9d7-4b9b-822e-16b2d410795b"
												x="0"
												y="0"
												width=".135"
												height=".30"
											>
												<circle cx="1" cy="1" r=".7" />
											</pattern>
										</defs>
										<rect
											fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
											width="52"
											height="24"
										/>
									</svg>
									<span className="relative">Let's</span>
								</span>{' '}
								get you signed in
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button
							onClick={() =>
								signIn(provider.id, {
									callbackUrl: `${window.location.origin}/todos`,
								})
							}
							className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
						>
							<div className="flex items-center">
								<div className="mr-3 font-semibold text-white">
									Sign in with {provider.name}
								</div>
							</div>
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return { props: { providers: await providers() } };
};

export default SignIn;
