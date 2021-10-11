function Users(name, age, action){
    this.action=action;
    this.name=name;
    this.age=age;
}

users.prototype.AddUser=function(){
    console.log(this.name+""+this.age);
    $.ajax({
        type:"POST",
        url: this.action,
        data:{name:this.name, age:this.age},
        success:function(response){
            alert(response==1){
                alert("Datos insertados");
            }
        }
    });

}