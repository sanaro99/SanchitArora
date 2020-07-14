var toggle = $("#dark-mode-toggle");
var darkTheme = $("#dark-mode-theme");

$("#dark-mode-toggle").click(function() {
	if ($("#dark-mode-toggle").hasClass("light")) {
		setTheme("dark");
	} else if ($("#dark-mode-toggle").hasClass("dark")) {
		setTheme("light");
	}
});

function setTheme(mode) {
	if (mode === "dark") {
		$("#dark-mode-toggle").removeClass("light");
		$("#dark-mode-toggle").addClass("dark");
		darkTheme.prop( "disabled", false );
	} else if (mode === "light") {
		$("#dark-mode-toggle").removeClass("dark");
		$("#dark-mode-toggle").addClass("light");
		darkTheme.prop( "disabled", true );
	}
	localStorage.setItem("dark-mode-storage", mode);
}

var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);