window.onload = function() {
	var posts = firebase.database().ref("posts/");

$("form").submit(function() {
	var sendername = $("#sender").val();
	posts.set({
	post_list: {
		sender: sendername,
    	title: $("#title").val(),
    	post: $("#post-text").val()
   	}
	});
});
}