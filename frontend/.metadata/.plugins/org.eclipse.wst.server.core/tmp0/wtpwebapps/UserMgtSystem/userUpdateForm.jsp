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

<h3>Update User Details</h3>

<form action="controller" method="post">
	<input type="text" name="userName" placeholder="Enter your username" value="<%=userObj.getUserName() %>"/> <br><br>
	<input type="email" name="emailId" placeholder="Enter your email"  value="<%=userObj.getEmailId() %>"/> <br><br>
	<input type="text" name="address" placeholder="Enter your address" value="<%=userObj.getAddress() %>"/> <br><br>
	<input type="number" name="mobile" placeholder="Enter your mobile" value="<%=userObj.getMobile() %>"/> <br><br>
	<input type="hidden" name="action" value="update"/>
	<button type="submit">Update</button>
</form>

<%@ include file="footer.html" %>


</body>
</html>