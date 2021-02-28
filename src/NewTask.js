//import date-fns
import { format, isAfter, formatDistanceToNow } from "date-fns";

class Task {
  constructor(description, deadline, time, html) {
    this.description = description;
    this.deadline = deadline;
    this.time = time;
    this.html = `
        <div class="card mb-3">
        <div class="card-body">
          <p class="card-text">${this.description}</p>
          <ul class="list-inline">
            ${this.formatDeadline(this.deadline)}
            ${this.formatTime(this.time)}
          </ul>
          <div class="btn btn-outline-primary btn-sm">Add to my day</div>
          <div class="btn btn-outline-danger btn-sm float-end">Delete</div>
        </div>
        </div>`;
  }
  formatDeadline(deadline) {
    console.log(deadline);
    if (deadline == null) {
      return "";
    } else {
      deadline = formatDistanceToNow(deadline);
      return `<li class="list-inline-item">Due in ${deadline}.</li>`
    }
  }

  formatTime (time) {
    if (time == null) {
      return "";
    } else {
      return `<li class="list-inline-item">About ${time} minutes.</li>`;
    }
  }
}

class Form {
  constructor(myTasks, html) {
    this.myTasks = myTasks;
    this.date = new Date();
    this.year = format(this.date, "yyyy");
    this.month = format(this.date, "MM")
    this.html = `
        <div id="Form">
        <p class="h2 my-3">Create a new task</p>
        <form action="" class="row g-3">
          <div class="col-12">
            <label for="descriptionInput" class="form-label"
              >Description</label
            >
            <textarea
              class="form-control"
              id="descriptionInput"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="col-6">
            <label for="deadlineInput" class="form-label">Deadline</label>
            <div class="input-group" id="deadlineInput">
              <input
                id="DD"
                type="number"
                aria-label="DD"
                class="form-control"
                placeholder="DD"
                minlength="1"
                maxlength="2"
                min="1"
                max="31"
                step="1"
              />
              <input
                id="MM"
                type="number"
                aria-label="MM"
                class="form-control"
                placeholder="MM"
                minlength="1"
                maxlength="2"
                min="1"
                max="12"
                step="1"
                value="${this.month}"
              />
              <input
                id="YYYY"
                type="number"
                aria-label="YYYY"
                class="form-control"
                placeholder="YYYY"
                minlength="4"
                maxlength="4"
                min="${this.year}"
                step="1"
                value="${this.year}"
              />
            </div>
          </div>
          <div class="col-6">
            <label for="timeInput" class="form-label">Time</label>
            <div class="input-group" id="timeInput">
              <input
                id="hours"
                placeholder="Hours"
                type="number"
                class="form-control"
                aria-label="Hours"
                aria-describedby="time-addon"
                step="1"
                min="1"
              />
              <input
                id="minutes"
                placeholder="Minutes"
                type="number"
                class="form-control"
                aria-label="Minutes"
                aria-describedby="time-addon"
                step="1"
                min="1"
              />
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-secondary">Create</button>
          </div>
        </form>
        </div>`;
  }
  show() {
    document.getElementById("col2").innerHTML += this.html;
    document.querySelector("#Form > form").addEventListener("submit", (e) => {
        e.preventDefault();
        this.getInput();
    });
  }
  hide() {
    document.getElementById("Form").remove();
  }
  refresh() {
    this.hide();
    this.show();
  }

  alertSuccess(message) {
    // bootstrap success alert
  }

  alertError(message) {
    //replace with bootstrap alert
    alert(message);

  }
  getInput() {
      //if deadline < date => this.alertError(); else alert success
      const descriptionInput = document.getElementById("descriptionInput").value;
      const DD = document.getElementById("DD").value;
      const MM = document.getElementById("MM").value;
      const YYYY = document.getElementById("YYYY").value;
      const timeInput = document.querySelector("#timeInput > input").value;
      let deadline;
      if (DD == "") {
        deadline = null;
      } else {
        deadline = new Date(YYYY, MM-1, DD);
      }
      let time;
      if (timeInput == "") {
        time = null;
      } else {
        time = timeInput;
      }

      if (isAfter(this.date, deadline) == true){
        this.alertError("Deadline cannot be before current date");
      } else {
        this.alertSuccess("Task created successfully");
        this.refresh();
        this.createTask(descriptionInput, deadline, time);
      }
  }

  createTask(description, deadline, time) {
      const task = new Task(description, deadline, time);
      this.myTasks.addTask(task);
  }
}

export { Form, Task };