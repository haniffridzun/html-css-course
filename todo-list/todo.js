			let count = 0;
			function addNum() {
				count = count + 1;
				const counting = document.getElementById("counter");
				counting.innerText = count;
			}

			function minNum() {
				count = count - 1;
				const counting = document.getElementById("counter");
				counting.innerText = count;
			}

			// TODO SECTION
			let todos = ["todo1", "todo22", "todo333"];

			// todos.forEach(function (todoTitle) {
			// 	let element = document.createElement("div");
			// 	element.innerText = todoTitle;
			// 	document.body.appendChild(element);
			// });
			render();

			function addTodo() {
				const textbox = document.getElementById("todo-title");
				const title = textbox.value;
				todos.push(title);

				// let clickButton = document.getElementById("todo-button");
				// clickButton.innerText = "Done";

				// let element = document.createElement("div");
				// element.innerText = title;
				// document.body.appendChild(element);

				// todos.forEach(function (todoTitle) {
				// 	let element = document.createElement("div");
				// 	element.innerText = todoTitle;
				// 	document.body.appendChild(element);
				// });
				render();
			}

			function render() {
				// reset list
				document.getElementById("todo-list").innerHTML = "";

				todos.forEach(function (todoTitle) {
					const element = document.createElement("div");
					element.innerText = todoTitle;
					// document.body.appendChild(element);
					const todoList = document.getElementById("todo-list");
					todoList.appendChild(element);
				});
			}

            // Shopping section
            let cartList = ['test','try'];

            function addCart(cartList) {
                let shop =document.createElement("div");
                shop.innerText = cartList;
                const shopList = document.getElementById('cart');
                shopList.appendChild(element);
            }

            function clearCart(params) {
                
            }
