$(document).ready(function() {
    var limit = 8;
	var count = 1; 
    $(".add-btn").click(function(e){ 
		var inputContainer = $(".content-input-container"); 
        e.preventDefault();
        if(count < limit){ 
            count++; 
            $(inputContainer).append('<div class="file-input"><input type="file" name="image[]"/><label for="file">Select file</label><button class="btn delete-btn">Delete</button></div>'); 
        }
		else
		{
		alert('You have reached the maximum limit. Now you will not be able to add more input.')
		}
    });
    $(".content-input-container").on("click",".delete-btn", function(e){ 
        e.preventDefault(); 
        $(this).parent('div').remove(); 
        count--;
    })
});