$(document).ready(function(){

    let note;
    let noteTitle;
    let noteData;

    let newNoteSection = $(".new-note");
    let newNoteClick = false;
    let notesIndex = 0;

    newNoteSection.css("display", "none");

    $("#create-note").click(function(){

        note = $("<div>").addClass("note");
        noteTitle = $("<div>").append("New note").addClass("note-title");
        noteData = $("<ul>").addClass("note-info");

        if(newNoteClick === false){
            newNoteSection.slideDown();
            newNoteClick = true;
            notesIndex = notesIndex + 1;

            note.attr("id", notesIndex);
            note.append(noteTitle);
            note.append(noteData);
            note.css("display", "none");
            note.draggable({
                containment: "parent"
            });

            $(".notes-section").append(note);
            note.slideDown();

        }else{
            $("#warning").css("display", "none");
            newNoteSection.slideUp();
            newNoteClick = false;

            if($("#" + notesIndex + " ul").is(':empty')){

                $("#" + notesIndex).remove();
                notesIndex = notesIndex - 1;

            }
        }
    });

    $("#title-button").click(setNoteTitle);
    $("#title").on("keydown", function(e){
        if(e.which === 13){
            setNoteTitle();
        }
    });

    $("#content-button").click(setNoteContent);
    $("#note-content").on("keypress", function(e){
        if(e.which === 13){
            setNoteContent();
        }
    });

    $(".button-done").click(function(){

        if($("#" + notesIndex + " ul").is(':empty')){
            $("#warning").text("The note is empty");
            $("#warning").css("display", "block");

        }else{
            $("#warning").css("display", "none");
            newNoteSection.css("display", "none");
            newNoteClick = false;

            $("#title").val("");
        }
    });

    //functions to set the note info
    function setNoteTitle(){
        let userTitle = $("#title").val();

        if(userTitle === ""){
            console.log("input empty");

        }else{
            noteTitle.text(userTitle);

        }
    }

    function setNoteContent(){
        let userContent = $("#note-content").val();

        if(userContent === ""){
            console.log("input empty");

        }else{
            noteData.append("<li>" + userContent + "</li>");
            $("#note-content").val("");

        }
    }
    
    //lines striker
    $(".notes-section").on("click", "li", function(){

        if($(this).hasClass("strike-line")){
            $(this).removeClass("strike-line");

        } else{
            $(this).addClass("strike-line");

        }
    });

});