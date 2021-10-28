import type { GetServerSideProps, NextPage } from 'next';
import { Session } from 'next-auth';
import { getSession, signIn } from 'next-auth/client';
import Layout from '../components/layout';
import Link from 'next/link';

// @ts-ignore
const Home: NextPage = ({ session }: { session: Session }) => {
	return (
		<Layout session={session}>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
					<video
						className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
						src="home.mp4"
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
				<div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
					<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
						Your life,{' '}
						<span className="inline-block text-deep-purple-accent-400">
							simplified
						</span>
					</h2>
					<p className="mb-5 text-base text-gray-700 md:text-lg">
						Todon't is the modern todo and note taking app. Why
						don't you see what all the fuzz is about?
					</p>
					<div className="flex items-center md:justify-center">
						{!session ? (
							<>
								<button
									onClick={() => signIn()}
									className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
								>
									Sign in
								</button>
							</>
						) : (
							<div className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
								<Link href="/todos">Visit your todo list</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
};

export default Home;
