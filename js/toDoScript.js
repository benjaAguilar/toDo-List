$(document).ready(function(){
    let newNoteSection = $(".new-note");
    let newNoteClick = false;

    newNoteSection.css("display", "none");

    $("#create-note").click(function(){
        if(newNoteClick === false){
            newNoteSection.css("display", "flex");
            newNoteClick = true;

        }else{
            newNoteSection.css("display", "none");
            newNoteClick = false;

        }
        let note = $("<div>").addClass("note");
        let noteTitle = $("<div>").append("New note").addClass("note-title");
        let noteData = $("<ul>").addClass("note-info");

        note.append(noteTitle);
        note.append(noteData);

        $(".notes-section").append(note);
    });
});