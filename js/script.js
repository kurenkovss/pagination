$(document).ready(function() {
    $('#football').DataTable({
		"ajax": 'data/arrays.txt',
		"bInfo": false,
		"bLengthChange": false
	});
});