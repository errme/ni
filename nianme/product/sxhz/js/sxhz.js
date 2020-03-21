var x1 = ["ex1", "ex2", "ex3"];
var x2 = ["ex4", "ex5", "ex6", "ex7", "ex8"];
var x3 = ["ex9", "ex10", "ex11", "ex12"];
var y1 = ["p_1709030129_1_3.html", "p_1709030129.html", "p_1709030129_1_4.html"];
var y2 = ["p_1709030129_2_1.html", "p_1609230102_2_2.html", "p_1609230102_2_3.html", "p_1609230102_2_4.html",
	"课外拓展1.html"
];
var y3 = ["p_1609970162_3_1.html", "p_1609970162_3_2.html", "p_1609970162_3_3.html", "p_1609970162_3_4.html"];
var y4 = ["p_1609970162_4_1.html", "p_1609970162_4_2.html"];
var y5 = ["p_1609970162_5_1.html", "p_1609970162_5_2.html"];
var y6 = ["p_1609970162_6_1.html", "p_1609970162_6_2.html"];
var y7 = ["p_1609970162_7_1.html", "p_1609970162_7_2.html"];
var y8 = ["p_1609970162_8_1.html", "p_1609970162_8_2.html", "课外拓展1.html"];
var y9 = ["p_1609970162_9_1.html", "p_1609970162_9_2.html", "p_1609970162_9_3.html"];
var y10 = ["p_1609970162_10_1.html", "p_1609970162_10_2_1.html", "p_1609970162_10_2_2.html",
	"p_1609970162_10_2_2_2.html", "p_1609970162_10_3.html", "课外拓展1.html", "课外拓展2.html"
];
var y11 = ["p_1609970162_11_1.html", "p_1609970162_11_2.html"];
var y12 = ["p_1609970162_12_1.html", "p_1609970162_12_2.html", "课外拓展1.html"];
var z1 = ["sb1", "sb2", "sb3", "sb4", "sb5"];
var z2 = ["sp1", "sp2", "sp3", "sp4", "sp5", "sp6", "sp7"];

function $(id) {
	return document.getElementById(id);
}

function delSelectAll(id) {
	var objSelect = $(id);
	var strIndex = objSelect.options.length;
	if (strIndex > 0) {
		for (var i = 0; i <= strIndex - 1; i++) {
			objSelect.options.remove(0);
		}
	}
}

function aa() {
	var v = document.getElementById("mainmenu").value;
	delSelectAll("subtitle");
	delSelectAll("suptitle");
	if (v == "m1") {
		$("subtitle").value = 0;
		$("suptitle").value = 0;
		for (var j = 0; j < x1.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(x1[j]);
			opt.value = z1[j];
			opt.appendChild(opt_text);
			$("subtitle").appendChild(opt);
		}
		var objsel = $("subtitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	} else if (v == "m2") {
		$("subtitle").value = 0;
		$("suptitle").value = 0;
		for (var j = 0; j < x2.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(x2[j]);
			opt.value = z1[j];
			opt.appendChild(opt_text);
			$("subtitle").appendChild(opt);
		}
		var objsel = $("subtitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	} else {
		$("subtitle").value = 0;
		$("suptitle").value = 0;
		for (var j = 0; j < x3.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(x3[j]);
			opt.value = z1[j];
			opt.appendChild(opt_text);
			$("subtitle").appendChild(opt);
		}
		var objsel = $("subtitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
}

function bb() {
	var v = document.getElementById("subtitle").value;
	var v1 = document.getElementById("mainmenu").value;
	delSelectAll("suptitle");
	if (v == "sb1" && v1 == "m1") {
		$("suptitle").value = 0;
		for (var j = 0; j < y1.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y1[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb2" && v1 == "m1") {
		$("suptitle").value = 0;
		for (var j = 0; j < y2.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y2[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb3" && v1 == "m1") {
		$("suptitle").value = 0;
		for (var j = 0; j < y3.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y3[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb1" && v1 == "m2") {
		$("suptitle").value = 0;
		for (var j = 0; j < y4.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y4[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb2" && v1 == "m2") {
		$("suptitle").value = 0;
		for (var j = 0; j < y5.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y5[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb3" && v1 == "m2") {
		$("suptitle").value = 0;
		for (var j = 0; j < y6.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y6[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb4" && v1 == "m2") {
		$("suptitle").value = 0;
		for (var j = 0; j < y7.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y7[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb5" && v1 == "m2") {
		$("suptitle").value = 0;
		for (var j = 0; j < y8.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y8[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb1" && v1 == "m3") {
		$("suptitle").value = 0;
		for (var j = 0; j < y9.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y9[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb2" && v1 == "m3") {
		$("suptitle").value = 0;
		for (var j = 0; j < y10.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y10[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb3" && v1 == "m3") {
		$("suptitle").value = 0;
		for (var j = 0; j < y11.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y11[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
	if (v == "sb4" && v1 == "m3") {
		$("suptitle").value = 0;
		for (var j = 0; j < y12.length; j++) {
			var opt = document.createElement("option");
			var opt_text = document.createTextNode(y12[j]);
			opt.value = z2[j];
			opt.appendChild(opt_text);
			$("suptitle").appendChild(opt);
		}
		var objsel = $("suptitle");
		var selnum = objsel.options.length;
		objsel.selectedIndex = selnum;
	}
}

function f() {
	var v = document.getElementById("suptitle").value;
	var v2 = document.getElementById("subtitle").value;
	var v1 = document.getElementById("mainmenu").value;
	if (v == "sp1" && v1 == "m1" && v2 == "sb1") {
		$("rect").src = "ex1/p_1609970162_1_3.html";
	}
	if (v == "sp2" && v1 == "m1" && v2 == "sb1") {
		$("rect").src = "ex1/p_1609970162_1_2.html";
	}
	if (v == "sp3" && v1 == "m1" && v2 == "sb1") {
		$("rect").src = "ex1/p_1609970162_1_4.html";
	}
	if (v1 == "m1" && v2 == "sb2") {
		if (v == "sp1") {
			$("rect").src = "ex2/p_1709030129_2_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex2/p_1609970162_2_2.html";
		}
		if (v == "sp3") {
			$("rect").src = "ex2/p_1609970162_2_3.html";
		}
		if (v == "sp4") {
			$("rect").src = "ex2/p_1609970162_2_4.html";
		}
		if (v == "sp5") {
			$("rect").src = "ex2/课外拓展1.html";
		}
	}
	if (v1 == "m1" && v2 == "sb3") {
		if (v == "sp1") {
			$("rect").src = "ex3/p-1609970162/p_1609970162_3_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex3/p-1609970162/p_1609970162_3_2.html";
		}
		if (v == "sp3") {
			$("rect").src = "ex3/p-1609970162/p_1609970162_3_3.html";
		}
		if (v == "sp4") {
			$("rect").src = "ex3/p-1609970162/p_1609970162_3_4.html";
		}
	}
	if (v1 == "m2" && v2 == "sb1") {
		if (v == "sp1") {
			$("rect").src = "ex4/p_1609970162_4_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex4/p_1609970162_4_2.html";
		}
	}
	if (v1 == "m2" && v2 == "sb2") {
		if (v == "sp1") {
			$("rect").src = "ex5/p_1609970162_5_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex5/p_1609970162_5_2.html";
		}
	}
	if (v1 == "m2" && v2 == "sb3") {
		if (v == "sp1") {
			$("rect").src = "ex6/实训六/p_1609970162_6_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex6/实训六/p_1609970162_6_2.html";
		}
	}
	if (v1 == "m2" && v2 == "sb4") {
		if (v == "sp1") {
			$("rect").src = "ex7/p_1609970162_7_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex7/p_1609970162_7_2.html";
		}
	}
	if (v1 == "m2" && v2 == "sb5") {
		if (v == "sp1") {
			$("rect").src = "ex8/p_1609970162_8_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex8/p_1609970162_8_2.html";
		}
		if (v == "sp3") {
			$("rect").src = "ex8/课外拓展1.html";
		}
	}
	if (v1 == "m3" && v2 == "sb1") {
		if (v == "sp1") {
			$("rect").src = "ex9/p_1609970162_9_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex9/p_1609970162_9_2.html";
		}
		if (v == "sp3") {
			$("rect").src = "ex9/p_1609970162_9_3.html";
		}
	}
	if (v1 == "m3" && v2 == "sb2") {
		if (v == "sp1") {
			$("rect").src = "ex10/p_1609970162_10_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex10/p_1609970162_10_2_1.html";
		}
		if (v == "sp3") {
			$("rect").src = "ex10/p_1609970162_10_2_2.html";
		}
		if (v == "sp4") {
			$("rect").src = "ex10/p_1609970162_10_2_2_2.html";
		}
		if (v == "sp5") {
			$("rect").src = "ex10/p_1609970162_10_3.html";
		}
		if (v == "sp6") {
			$("rect").src = "ex10/课外拓展1.html";
		}
		if (v == "sp7") {
			$("rect").src = "ex10/课外拓展2.html";
		}
	}
	if (v1 == "m3" && v2 == "sb3") {
		if (v == "sp1") {
			$("rect").src = "ex11/p_1609970162_11_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex11/p_1609970162_11_2.html";
		}
	}
	if (v1 == "m3" && v2 == "sb4") {
		if (v == "sp1") {
			$("rect").src = "ex12/p_1609970162_12_1.html";
		}
		if (v == "sp2") {
			$("rect").src = "ex12/p_1609970162_12_2.html";
		}
		if (v == "sp3") {
			$("rect").src = "ex12/课外拓展1.html";
		}
	}
}

// function load() {
// 	alert("欢迎访问本页面");
// }
// 
// function unload() {
// 	alert("欢迎下次访问");
// }
