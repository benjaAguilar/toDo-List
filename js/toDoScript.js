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
            newNoteSection.css("display", "flex");
            newNoteClick = true;
            notesIndex = notesIndex + 1;

            note.attr("id", notesIndex);
            note.append(noteTitle);
            note.append(noteData);
        
            $(".notes-section").append(note);

        }else{
            newNoteSection.css("display", "none");
            newNoteClick = false;

            if($("#" + notesIndex + " ul").is(':empty')){

                $("#" + notesIndex).remove();
                notesIndex = notesIndex - 1;

            }
        }
    });

    $("#title-button").click(function(){
        let userTitle = $("#title").val();
        noteTitle.text(userTitle);
    });

    $("#content-button").click(function(){
        let userContent = $("#note-content").val();
        noteData.append("<li>" + userContent + "</li>");

        $("#note-content").val("");
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
});