document.addEventListener('DOMContentLoaded',function(){
    let form = document.getElementById('addform');
    let itemList = document.getElementById('list-items');
    document.getElementById('submit-form').addEventListener('click', addItem);
     function addItem(e){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        e.preventDefault();
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(name + " - " +email+  " - " +phone));
        var delet = document.createElement('button');
        delet.id = 'submit2';
        delet.type = 'submit';
        delet.appendChild(document.createTextNode('Delete'));
        li.appendChild(delet);
        itemList.appendChild(li);
        document.getElementById('submit2').addEventListener('click', delItem);
        function delItem(e){
         e.preventDefault();
         let li = e.target.parentElement;
         itemList.removeChild(li);
        }
        const my_obj = {
         name : name,
         email : email,
         phone : phone,
       }; 
        let my_obj_string = JSON.stringify(my_obj);
        localStorage.setItem(email,my_obj_string);
     }
     
});