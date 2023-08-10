document.addEventListener('DOMContentLoaded',function(){
    let form = document.getElementById('addform');
    let itemList = document.getElementById('list-items');
    axios.get("https://crudcrud.com/api/fe17c67fd35b4c9e9f5793084427e2fc/Appointmentdata")
         .then((res)=>{console.log(res.data)
        for(let i=0;i<res.data.length;i++){
          newUser(res.data[i]);
        }})
         .catch((err)=>{console.log(err)})         
    document.addEventListener('submit', addItem);
     function addItem(e){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        e.preventDefault();
        const my_obj = {
         name : name,
         email : email,
         phone : phone,
       };
       axios.post("https://crudcrud.com/api/fe17c67fd35b4c9e9f5793084427e2fc/Appointmentdata",my_obj)
       .then((res)=>{
        newUser(res.data);
      })
       .catch((err)=>{console.log(err);}) 
            }
            function newUser(e){
              let name = e.name;
              let email = e.email;
              let phone = e.phone;
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
              delet.onclick = () =>{
                axios.delete(`https://crudcrud.com/api/fe17c67fd35b4c9e9f5793084427e2fc/Appointmentdata/${e._id}`)
                itemList.removeChild(li);
               }
               edit.onclick = () =>{
                axios.delete(`https://crudcrud.com/api/fe17c67fd35b4c9e9f5793084427e2fc/Appointmentdata/${e._id}`)
                  itemList.removeChild(li);
                  document.getElementById('name').value = name;
                  document.getElementById('email').value = email;
                  document.getElementById('phone').value = phone;
                }  
              }
});

