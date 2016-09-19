<%-- 
    Document   : show
    Created on : 21 Feb, 2016, 1:46:50 PM
    Author     : User
--%>

<%@page import="fr.gfi.skeleton.db.model.Clients"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>

    <body>
        <form action ="second.htm" method="post">
            <input type ="submit" value ="submit"><br><br>
        <table style="border: 1px solid red">
            <tr>
                <th>SalesOrderID</th>


            </tr>       
            <%
                ArrayList l = (ArrayList) request.getAttribute("messageBeanList");
                for (int i = 0; i < l.size(); i++) {
                    Clients s = (Clients) l.get(i);
            %>
            <tr>
                <td><input name = "item1" type="text" value=<%out.println(s.getNomCompte());%>/></td>


            </tr>
            <% }%>
            
            
        </table>
    </body>
</html>

