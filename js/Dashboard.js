$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("../Json/Users.json",
        function (data) {
            var employee = "";

            // ITERATING THROUGH OBJECTS 
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                employee += "<tr>";
                employee += "<td>" +
                    value.FirstName + "</td>";

                employee += '<td>' +
                    value.LastName + '</td>';

                employee += '<td>' +
                    value.EmailId + '</td>';

                employee += '<td>' +
                    value.PhoneNo + '</td>';

                employee += '<td><a href="../pages/EditEmployee.html"><button>EDIT</button></a></td>';
                employee += '<td><button>DELETE</button></td>';

                "</tr>";
            });

            //INSERTING ROWS INTO TABLE  
            $('#table').append(employee);
        });
}); 