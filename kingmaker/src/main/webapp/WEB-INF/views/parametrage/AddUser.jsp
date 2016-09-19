<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Add Dossiers using ajax</title>
      
        <script type="text/javascript">
        function doAjaxPost() {
        // get the form values
        var name = $('#id').val();
        var education = $('#nom').val();

        $.ajax({
        type: "POST",
        url: "/gerco2/AddUser",
        data: "id=" + name + "&nom=" + education,
        success: function(response){
        // we have the response
        $('#info').html(response);
        $('#id').val('');
        $('#nom').val('');
        },
        error: function(e){
        alert('Error: ' + e);
        }
        });
        }
        </script>
    </head>
    <body>
        <h1>Add Dossier using Ajax ........</h1>
        <table>
            <tr><td>ID DOSSIER : </td><td> <input type="text" id="id"><br/></td></tr>
            <tr><td>NOM : </td><td> <input type="text" id="nom"><br/></td></tr>
            <tr><td colspan="2"><input type="button" value="Add Dossier" onclick="doAjaxPost()"><br/></td></tr>
            <tr><td colspan="2"><div id="info" style="color: green;"></div></td></tr>
        </table>
        <a href="/gerco2/ShowUsers">Show All Users</a>
    </body>
</html>