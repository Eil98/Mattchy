$(document).ready(function () {
var ok=1;
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
            $('#message').html('Matching').css('color', 'green');
        } else
            $('#message').html('Password Not Matching').css('color', 'red');
            console.log("Incorrect match"+pwok);
    });
    function valPw(){
        if ($('#password').val() == $('#confirm_password').val()) {
            return true;
        }
        else {
            return false;
        }
    }

    $('#email').on('keyup', function () {
        ok=1;
        if (localStorage.getItem($('#email').val()) != null) {
            ok=0;
            blurt({
                title: 'Warning',


                text: 'Insert a different e-mail,this one is already in use!',

                /*
               * alert type
               * success, error, warning, info
               * default is 'default'
               */
                type: 'warning',

                okButtonText: 'Ok',

                escapable: true
            });
        }
    });
    /**
     * Retrieves input data from a form and returns it as a JSON object.
     * @param  {HTMLFormControlsCollection} elements  the form elements
     * @return {Object}                               form data as an object literal
     */
    const formToJSON = elements => [].reduce.call(elements, (data, element) => {

        // Make sure the element has the required properties.
        if (isValidElement(element)) {
            data[element.name] = element.value;
        }

        return data;
    }, {});
    /**
     * A handler function to prevent default submission and run our custom script.
     * @param  {Event} event  the submit event triggered by the user
     * @return {void}
     */
    const handleFormSubmit = event => {

        // Stop the form from submitting since we’re handling that with AJAX.
        event.preventDefault();

        //  Call our function to get the form data.
        const data = formToJSON(form.elements);
        var key = data.email;
        var dataString = JSON.stringify(data);

        // ...this is where we’d actually do something with the form data...

        if(ok!=0 && valPw()) {
            localStorage.setItem(key, dataString);
            localStorage.setItem("access", key);
            $(location).attr('href', 'mainFinale.html');
        }
        else {
            blurt({
                title: 'Error',

                text: 'Invalid registration,please try again!',

                type: 'error',

                okButtonText: 'Ok',

                escapable: true
            });
        }
    };


    const form = document.getElementsByClassName('contact-form')[0];
    form.addEventListener('submit', handleFormSubmit);

    const isValidElement = element => {
        if (element.name != "confirm_password" )
            return element.name && element.value;
    };
});