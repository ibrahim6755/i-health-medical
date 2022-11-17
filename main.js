$(document).ready(function(){
    $('#read-more').on('click',function(){
     $('#expand-para').toggle();
    })

 })
 
 $(document).ready(function(){
    $('#make').on('click' , function(){
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let msg = $('#msg').val();
    
        let person = {
            name:name,
            email:email,
            subject:subject,
            msg:msg
        }
        localStorage.setItem('data' , JSON.stringify(person))
         $('#name').val('');
         $('#email').val('');
         $('#subject').val('');
         $('#msg').val('');
    })

 })

  