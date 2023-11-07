import toast from "react-hot-toast";

export const saveUser = (user) => {
    // console.log(user)
	const currentUser = {
		name: user.displayName,
		email: user.email,
		photo: user.photoURL,
	
	};
	// console.log(currentUser);

	fetch(`${import.meta.env.VITE_API_URL}users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedId) {
                toast.success('User created successfully in DB.')

			}
		})
		.catch((error) => console.log(error));
};
