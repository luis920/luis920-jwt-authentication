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
			login: async (email,password) => {
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "/api/login",{
                         method: "POST",
						 headers: {
							"Content-Type": "application/json"
						 },
						 body: JSON.stringify({
							email: email,
							password: password
						 })
						
					
					})

                    if(!response.ok){
						throw new Error("Failed to login")
					}
					const data = await response.json()

					localStorage.setItem("accessToken",data.access_token)

					console.log("user:" ,data)
					// setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			logout: () => {
				localStorage.removeItem("accessToken");
				setStore({ user: null });
			},
			register: async (first_name,last_name,birth_date,email,password) => {
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "/api/register",{
                         method: "POST",
						 headers: {
							"Content-Type": "application/json"
						 },
						 body: JSON.stringify({
							first_name: first_name,
							last_name: last_name,
							birth_date:birth_date,
							email: email,
							password: password
						 })
					
					});

                    if(!response.ok){
						throw new Error("Failed to login")
					}
					const data = await response.json()

					localStorage.setItem("accessToken",data.access_token)

					console.log("User registered successfully:", data);
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
