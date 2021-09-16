let addBtn = document.querySelector('.todo__add');
let saveBtn = document.querySelector('.todo__save');
let todoList = document.querySelector('.todo__list');
let todoWrapper = document.querySelector('.todo__wrapper');
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
let todoListBD = [];

addBtn.addEventListener('click', function() {
   let todoInput = document.querySelector('.todo__input');
   let todoMessanger  = document.querySelector('.todo__messanger');

   if (todoInput.value.trim()) {
      todoListBD.push(todoInput.value);
      todoMessanger.innerHTML = ``;
      if (todoListBD.length > 0) {
         let li = document.createElement('li');
         for (let i in todoListBD) {
            li.innerHTML = `<p class="count">Запись №${+i + 1}:</p><p class="date">${date}</p><p class="time">${time}</p> <p class="txt">${todoListBD[i]}</p><button class="todo__ok">V</button> <button class="todo__del">X</button>`;
            todoList.append(li);
            setTimeout(
               () => li.classList.add('_active'),1000
            );
         };
      }
      todoInput.value = "";
      todoMessanger.innerHTML = `<p class="green">Запись успешно добавлена</p>`;
   } else {
      todoMessanger.innerHTML = `<p class="red">Зполните строку ввода</p>`;
   }

   let todoDel = document.querySelectorAll(".todo__del");
   todoDel.forEach((e) => {
      e.addEventListener ('click', function() {
         this.closest('li').classList.add('_del');
         setTimeout(
            () => this.closest('li').remove(),1000
         );
         todoMessanger.innerHTML = `<p class="red">Запись успешно удалена</p>`;
      })
   });

   let todoOk = document.querySelectorAll(".todo__ok");
   
   todoOk.forEach((e) => {
      
      e.addEventListener ('click', function() {
         this.previousSibling.style.textDecoration = "line-through";
         todoMessanger.innerHTML = `<p class="yellow">Запись отмечена как ненужная</p>`;
      })
   });
});

















