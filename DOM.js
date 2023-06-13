document.addEventListener('DOMContentLoaded',function(){
    let form = document.getElementById('addform');
    let itemList = document.getElementById('list-items')
    form.addEventListener('submit', addItem);
     function addItem(e){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        e.preventDefault();
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode('name : ' + name + ",  " + "Email-Adress: " + email +  ", Contact Details: " + phone));
        itemList.appendChild(li);
        const my_obj = {
         name : name,
         email : email,
         phone : phone,
       }; 
        let my_obj_string = JSON.stringify(my_obj);
        localStorage.setItem(email,my_obj_string);
     }
});