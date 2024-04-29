<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="cdac.training.mini.model.User" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
</head>
<body>
<%
User userObj = (User)session.getAttribute("userObj");
%>

<%@ include file="nav.html" %>

<h3>User Details</h3>

<table>
<tr>
<td>Name</td><td><%=userObj.getUserName() %> </td>
</tr>
<tr>
<td>Email</td><td><%=userObj.getEmailId() %></td>
</tr>
<tr>
<td>Address</td><td><%=userObj.getAddress() %></td>
</tr>
<tr>
<td>Mobile</td><td><%=userObj.getMobile() %></td>
</tr>
</table>

<%@ include file="footer.html" %>

</body>
</html>