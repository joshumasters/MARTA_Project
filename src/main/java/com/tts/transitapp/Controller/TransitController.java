package com.tts.transitapp.Controller;

import java.util.List;

import com.tts.transitapp.Model.Bus;
import com.tts.transitapp.Model.BusRequest;
import com.tts.transitapp.Model.Location;
import com.tts.transitapp.Service.TransitService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TransitController {
    
    @Autowired
    TransitService transitService;

    @GetMapping("/")
    public String methodName(){
        transitService.run();
        return "index";
    }

    @GetMapping("/buses")
    public String getBusesPage(Model model){
        model.addAttribute("request", new BusRequest());
        return "index";
    }
	
    @PostMapping("/buses")
    public String getNearbyBuses(BusRequest request, Model model) {
        List<Bus> buses = transitService.getNearbyBuses(request);
        Location userLocation = transitService.getUserLocation(request);
        model.addAttribute("buses", buses);
        model.addAttribute("request", request);  
        model.addAttribute("userLocation", userLocation);  
        return "index";
    }
}
