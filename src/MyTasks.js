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
        //remove task from tasks array
        const index = this.tasks.indexOf(task);
        if (index > -1) { 
            array.splice(index, 1);
        }
        //refresh
        this.refresh();
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