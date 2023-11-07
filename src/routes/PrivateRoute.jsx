import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import loader from '../../loader.json';
import { authContext } from '../provider/AuthProviders';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {
   	const { user, loading } = useContext(authContext);
		const location = useLocation();
		if (loading) {
			return (
				<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
					<Lottie className="h-96" animationData={loader} loop={true} />
				</div>
			);
		}
		if (user) {
			return children;
		}
		else{
			toast.error("You have to login first!");
            
			return <Navigate to="/" />;
		}
		
};

export default PrivateRoute;