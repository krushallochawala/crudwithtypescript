var list = [];
document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('btnadd');
    var displayButton = document.getElementById('btndisplay');
    addButton.addEventListener('click', function () {
        var tidInput = document.getElementById('tid');
        var tnameInput = document.getElementById("tname");
        var tstatusInput = document.getElementById("tstatus");
        var tduration1 = document.getElementById('tduration').value;
        var tduration2 = document.getElementById('tduration1').value;
        var date1 = new Date(tduration1);
        var date2 = new Date(tduration2);
        var datedifference = date2.getTime() - date1.getTime();
        var result = datedifference / (1000 * 60 * 60 * 24);
        var tidValue = parseInt(tidInput.value);
        var tnameValue = tnameInput.value;
        var tstatusValue = tstatusInput.value;
        var tduration = result;
        var task = {
            tidValue: tidValue,
            tnameValue: tnameValue,
            tstatusValue: tstatusValue,
            tduration: tduration,
        };
        list.push(task);
        console.log('Task ID:', tidValue);
        console.log('Task name:', tnameValue);
        console.log('Task status:', tstatusValue);
        console.log("duration:", tduration);
        console.log('List Array:', list);
    });
    displayButton.addEventListener('click', function () {
        var len = list.length;
        console.log(len);
        var str = "<table align='center' width='50%'><tr><th>ID</th><th>Task name</th><th>Task Status</th><th>Task Duration</th><th>Action</th></tr>";
        for (var i = 0; i < list.length; i++) {
            str += "<tr>";
            str += "<td>" + list[i].tidValue + "</td><td>" + list[i].tnameValue + "</td><td>" + list[i].tstatusValue + "</td><td>" + list[i].tduration + "</td><td><button>Edit</button><button>Delete</button></td>";
            str += "</tr>";
        }
        str += "</table>";
        console.warn(str);
        var dispElement = document.getElementById("disp");
        if (dispElement) {
            dispElement.innerHTML = str;
        }
    });
});
