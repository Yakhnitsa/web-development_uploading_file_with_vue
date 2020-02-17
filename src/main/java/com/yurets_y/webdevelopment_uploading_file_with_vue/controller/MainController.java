package com.yurets_y.webdevelopment_uploading_file_with_vue.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping
    public String main(){
        return "index";
    }

}
