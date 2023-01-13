			let clickButton = document.createElement("button");
			clickButton.innerText = "Click me";
			document.body.appendChild(clickButton);

			let changeTitle = "New title";
			document.title = changeTitle;

			let todo1 = "get groceries";
			let todo2 = "wash car";
			let todo3 = "make dinner";

			// let element = document.createElement("div");
			// element.innerText = todo1;
			// document.body.appendChild(element);

			// element = document.createElement("div");
			// element.innerText = todo2;
			// document.body.appendChild(element);

			// element = document.createElement("div");
			// element.innerText = todo3;
			// document.body.appendChild(element);

			function addTodo(todoTitle) {
				let element = document.createElement("div");
				element.innerText = todoTitle;
				document.body.appendChild(element);
			}
			addTodo(todo1);
			addTodo(todo2);
			addTodo(todo3);

			function greeting(name) {
				console.log("hello " + name);
			}

			function toUpper(str) {
				console.log(str.toUpperCase());
			}

			let todos = ["first todo", "second todo", "third todo"];

			function addTodo() {
				let textbox = document.getElementById("todo-title");
				let title = textbox.value;
				todos.push(title);
			}

			todos.push("forth todo"); // add new element at the end of list
			todos.pop(); // remove last element from the list

			todos.forEach(function (todoTitle) {
				let element = document.createElement("div");
				element.innerText = todoTitle;
				document.body.appendChild(element);
			});

			let strList = ["hello", "world", "from", "javascript"];
			strList.forEach(function (str) {
				console.log(str.toUpperCase());
			});

			let arrayDouble = ["bark", "meow"];
			arrayDouble.forEach(function (arr) {
				console.log(arr);
				console.log(arr);
			});

			let arrayNum = [1, 2, 3];
			let total = 0;
			arrayNum.forEach(function (num) {
				total = total + num;
			});
			console.log(total);