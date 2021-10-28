import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/client';
import Layout from '../components/layout';

// @ts-ignore
const Todos: NextPage = ({ session }: { session: Session }) => {
	return (
		<Layout session={session}>
			<h1>Todos</h1>
			<p>You can view this page because you are signed in.</p>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

export default Todos;
