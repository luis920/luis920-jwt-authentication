const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			createUser : async () => {
				const userData = {
					name: "John Doe",
					email: "johndoe@example.com",
					password: "securepassword123"
				};
			
				try {
					const response = await fetch('https://congenial-rotary-phone-9wjqr6xjqj4fxwqx-3001.app.github.dev/api/register', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(userData),
					});
			
					const result = await response.json();
					if (response.ok) {
						console.log("Usuario creado exitosamente:", result);
					} else {
						console.error("Error:", result.msg);
					}
				} catch (error) {
					console.error("Request failed:", error);
				}
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
