"use strict";

function main (){
    toggleMenu ();
    toggleCourses();
    toggleEducation();
};

function toggleMenu (){
    $(".menu-toggle").click(function(){
        $(".splash-nav-item").toggle();
    });
}

function toggleCourses(){
    $("#splash-nav-courses-toggle").click(function(){
        $(".splash-nav-courses-list > .splash-nav-dropdown-item").toggle();
    });
}

function toggleEducation(){
    $("#splash-nav-education-toggle").click(function(){
        $(".splash-nav-education-list > .splash-nav-dropdown-item").toggle();
    });
}

$(document).ready(function() {
    main();
});