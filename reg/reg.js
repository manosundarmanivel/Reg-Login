<><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script><script type="text/javascript">
    $(function () {$("#btnSubmit").click(function () {
        var password = $("#txtPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    })};
    &rbrace;);
</script></>