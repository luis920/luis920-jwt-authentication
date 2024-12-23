const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user:null
			
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
						
					});

                    if (!response.ok) {
						const errorData = await response.json(); 
						if (response.status === 401) {
						  alert('Bad email or password');
						} else if (response.status === 400) {
						  alert('Email and password are required.');
						} else {
						  alert('Unknow error. Please, try again.');
						}
						throw new Error(errorData.message || 'Failed to login'); 
					  }
					const data = await response.json()

					localStorage.setItem("accessToken",data.access_token)

					
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			getUser: async (user_id) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/profile/user/${user_id}`, {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                    });

                    if (!response.ok) {
                        throw new Error("Failed to fetch user data");
                    }

                    const data = await response.json();

                    setStore({ user: data });

                    return data;
                } catch (error) {
                    console.log("Error loading user data:", error);
                }
            },

			logout: () => {
				localStorage.removeItem("accessToken");
				setStore({ user: null });
			},
			register: async (first_name, last_name, birth_date, email, password) => {
				try {
				  const response = await fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  first_name: first_name,
					  last_name: last_name,
					  birth_date: birth_date,
					  email: email,
					  password: password
					})
				  });
				  if (!response.ok) {
					const errorData = await response.json();
			  
					if (response.status === 400) {
					  alert('Email and password are required.');
					  
					} else if (response.status === 409) {
					  alert('Email already exists. Please use a different email.');

					} else {
					  alert('Unknown error. Please, try again.');
					}
			  
					return; 
				  }
			  
				  const data = await response.json();
			  
				  
	
				  return data;
			  
				} catch (error) {
				  console.log("Error loading message from backend", error);
				  alert('An error occurred. Please check your connection and try again.');
				}
			  },
			  
			
			}
		}
	};


export default getState;
