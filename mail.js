
     function sendmail(){
        var name = $('#Name').val();
        var email = $('#Sender').val();
        var pass = $('#pass').val();

        // var body = $('#body').val();

        var Body='Name: '+name+'<br>Email: '+email+'<br>pass: '+pass;
        //console.log(name, phone, email, message);

        Email.send({
    SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    
            To: 'pranalishivale20@gmail.com',
            From: "pranalishivale20@gmail.com",
            Subject: "New message on contact from "+name,
            Body: Body
        }).then(
            message =>{
                //console.log (message);
                if(message=='OK'){
                alert('Your mail has been send. Thank you for connecting.');
                }
                else{
                    console.error (message);
                    alert('There is error at sending message. ')
                    
                }

            }
        );



    }
