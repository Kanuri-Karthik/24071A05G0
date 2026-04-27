import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class EventServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("eventName");
        String date = request.getParameter("eventDate");
        String location = request.getParameter("eventLocation");
        String organizer = request.getParameter("organizer");
	out.println("<hr>");
        out.println("<p style='text-align:center;'>© 24071A05G0.All Rights Reserved</p>");
        out.println("<p>Event Name: " + name + "</p>");
        out.println("<p>Date: " + date + "</p>");
        out.println("<p>Location: " + location + "</p>");
        out.println("<p>Organizer: " + organizer + "</p>");

        out.println("<hr>");
        out.println("<p style='text-align:center;'>© 24071A05G0.All Rights Reserved</p>");

        out.println("</body></html>");
    }
}