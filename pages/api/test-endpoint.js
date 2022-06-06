export default function handler(req, res){ 
    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "recipients": [
        {
            "name": "second attempt test user",
            "email": "test875349@test.com"
        },
        {
            "name": "test user2",
            "email": "test458954@test.com"
        }
    ],
        "planter_id": 2,
        "species_id": 17,
        "quantity": 2
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://hookb.in/jePJa3JdMoh9dlMMmyOo", requestOptions)
        .then(response => response.text())
        
        .then(result => {
            return res.status(200).json(result);
        })

        .catch(error => console.log('error', error));
       

    
}