document.addEventListener('DOMContentLoaded',function(){
    let form = document.getElementById('addform');
    let itemList = document.getElementById('list-items');
    document.addEventListener('submit', addItem);
     function addItem(e){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        e.preventDefault();
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(name + " - " +email+  " - " +phone));
        var delet = document.createElement('button');
        delet.type = 'submit';
        delet.appendChild(document.createTextNode('Delete'));
        li.appendChild(delet);
        itemList.appendChild(li);
        var edit = document.createElement('button');
        edit.type = 'submit';
        edit.appendChild(document.createTextNode('edit'));
        li.appendChild(edit);
        itemList.appendChild(li);
        const my_obj = {
         name : name,
         email : email,
         phone : phone,
       };
       delet.onclick = () =>{
         localStorage.removeItem(my_obj.email);
         itemList.removeChild(li);
        }
        edit.onclick = () =>{
           localStorage.removeItem(my_obj.email);
           itemList.removeChild(li);
           document.getElementById('name').value = my_obj.name;
           document.getElementById('email').value = my_obj.email;
           document.getElementById('phone').value = my_obj.phone;
         }
         axios.get("https://crudcrud.com/api/f57972e886e0450ba9ece7897886f8ab/Appointmentdata",my_obj)
         .then((res)=>{console.log(res.data);})
         .catch((err)=>{console.log(err);})  
         axios.post("https://crudcrud.com/api/f57972e886e0450ba9ece7897886f8ab/Appointmentdata",my_obj)
        .then((res)=>{console.log(res.data);})
        .catch((err)=>{console.log(err);}) 
            }  
});

/*
let my_obj_string = JSON.stringify(my_obj);
localStorage.setItem(email,my_obj_string); 
*/