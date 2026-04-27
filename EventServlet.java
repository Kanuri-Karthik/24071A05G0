import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/EventServlet")
public class EventServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        // Fetch event details from form
        String eventName = request.getParameter("eventName");
        String eventDate = request.getParameter("eventDate");
        String location = request.getParameter("location");
        String description = request.getParameter("description");
        
        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Event Details</title></head>");
        out.println("<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;'>");
        
        out.println("<h2 style='color: #0EA5E9;'>Submitted Event Details</h2>");
        out.println("<p><strong>Event Name:</strong> " + (eventName != null ? eventName : "N/A") + "</p>");
        out.println("<p><strong>Event Date:</strong> " + (eventDate != null ? eventDate : "N/A") + "</p>");
        out.println("<p><strong>Location:</strong> " + (location != null ? location : "N/A") + "</p>");
        out.println("<p><strong>Description:</strong> " + (description != null ? description : "N/A") + "</p>");
        
        out.println("<hr style='margin-top: 30px;'/>");
        
        // Copyright requested by user
        out.println("<footer style='text-align: center; color: #666; margin-top: 20px; font-weight: bold;'>");
        out.println("&copy; Copyright 24071A05G0");
        out.println("</footer>");
        
        out.println("</body></html>");
        out.close();
    }
}
