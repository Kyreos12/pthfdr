package fr.gfi.skeleton.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import fr.gfi.skeleton.db.ClientsService;
import fr.gfi.skeleton.db.model.Clients;

@Controller  
public class ClientsController {
	
	@RequestMapping(value="/viewclient/{pageid}")  
    public ModelAndView edit(@PathVariable int pageid) throws ClassNotFoundException, SQLException, IOException{  
        
		int total=5;  
        if(pageid==1){}  
        else{  
            pageid=(pageid-1)*total+1;  
        }

        List<Clients> list= ClientsService.getClientsBuPage(pageid);  
          
        System.out.println(list.size());
        return new ModelAndView("viewclient","list",list);  
    }  

}
