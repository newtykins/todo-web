import { Session } from 'next-auth';
import Nav from './navbar';

const Layout = ({
	children,
	session,
}: {
	children: React.ReactNode;
	session: Session;
}) => {
	return (
		<div>
			<Nav session={session} />
			{children}
		</div>
	);
};

export default Layout;
