"use strict";
let list = [];
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('btnadd');
    const displayButton = document.getElementById('btndisplay');
    addButton.addEventListener('click', () => {
        const tidInput = document.getElementById('tid');
        const tnameInput = document.getElementById("tname");
        const tstatusInput = document.getElementById("tstatus");
        const tduration1 = document.getElementById('tduration').value;
        const tduration2 = document.getElementById('tduration1').value;
        const date1 = new Date(tduration1);
        const date2 = new Date(tduration2);
        const datedifference = date2.getTime() - date1.getTime();
        const result = datedifference / (1000 * 60 * 60 * 24);
        const tidValue = parseInt(tidInput.value);
        const tnameValue = tnameInput.value;
        const tstatusValue = tstatusInput.value;
        const tduration = result;
        const task = {
            tidValue,
            tnameValue,
            tstatusValue,
            tduration,
            tduration1,
            tduration2
        };
        list.push(task);
        console.log('Task ID:', tidValue);
        console.log('Task name:', tnameValue);
        console.log('Task status:', tstatusValue);
        console.log("duration:", tduration);
        console.log('List Array:', list);
    });
    function deletetask() {
        debugger;
    }
    displayButton.addEventListener('click', () => {
        var len = list.length;
        console.log(len);
        var str = "<table align='center' width='50%'><tr><th>ID</th><th>Task name</th><th>Task Status</th><th>Task Duration</th><th>Action</th></tr>";
        for (var i = 0; i < list.length; i++) {
            str += "<tr>";
            str += "<td>" + list[i].tidValue + "</td><td>" + list[i].tnameValue + "</td><td>" + list[i].tstatusValue + "</td><td>" + list[i].tduration + "</td><td><button type='button' class='editButton' data-id='" + list[i].tidValue + "' data-id='editbtn'>Edit</button><button  type='button' class='deleteButton' data-id='" + list[i].tidValue + "' data-id='deletebtn''>Delete</button></td>";
            str += "</tr>";
        }
        str += "</table>";
        console.warn(str);
        const dispElement = document.getElementById("disp");
        if (dispElement) {
            dispElement.innerHTML = str;
        }
        const editButtons = document.querySelectorAll('.editButton');
        //const deleteButtons = document.querySelectorAll('.deleteButton');
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                var taskId = parseInt(button.getAttribute('data-id') || '0', 10);
                editTask(taskId);
            });
        });
    });
    function editTask(taskId) {
        console.warn(taskId);
        var index = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].tidValue == taskId) {
                index = i;
                break;
            }
        }
        var tidElement = document.getElementById("tid");
        var tnameElement = document.getElementById("tname");
        var tstatusElement = document.getElementById("tstatus");
        //var tdurationElement = document.getElementById("tduration") as HTMLInputElement;
        var tduration1Element = document.getElementById("tduration1");
        var tduration2Element = document.getElementById("tduration2");
        tidElement.value = list[index].tidValue.toString();
        tnameElement.value = list[index].tnameValue;
        tstatusElement.value = list[index].tstatusValue;
        tduration1Element.value = list[index].tduration1;
        tduration2Element.value = list[index].tduration2;
    }
});
