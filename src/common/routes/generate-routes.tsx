import { PageLoader } from '@common/components/loader/page-loader';
import { AuthLayout } from '@modules/auth/components/layout';
import { ProtectedLayout } from '@modules/dashboard/components/layout';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

type GenerateRouteProps = {
	path: string;
	Component: React.LazyExoticComponent<React.ComponentType<any>>;
	access: string;
};

export const generateRoute = ({
	Component,
	access,
	path,
}: GenerateRouteProps) => {
	return (
		<Route
			key={`${path}`}
			element={access === 'guest-only' ? <AuthLayout /> : <ProtectedLayout /> }
		>
			<Route
				path={path}
				element={
					<Suspense fallback={ <PageLoader /> }>
						<Component />
					</Suspense>
				}
			/>
		</Route>
	);
};