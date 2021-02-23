class MyTasks {
    constructor(html){
        this.tasks = [];
        this.html = `
        <div id="MyTasks">
        <p class="h2 my-3">My tasks</p>
        </div>`;
    }
    addTask (task){
        this.tasks.push(task);
        this.refresh();
    }
    removeTask (task){
        //remove from tasks array
        //refresh
    }
    show (){
        document.getElementById("col1").innerHTML += this.html;
        this.tasks.forEach((task) => {
            document.getElementById("MyTasks").innerHTML += task.html;
            console.log(task);
        })
    }
    hide () {
        document.getElementById("MyTasks").remove();
    }
    refresh(){
        this.hide();
        this.show();
    }
}

export {MyTasks}