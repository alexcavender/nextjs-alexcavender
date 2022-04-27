export default function handler(req, res) {
    

    if ( req.method === 'POST') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "recipients": [
            {
                "name": "test user",
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
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch("https://tree-nation.com/api/projects?status=active", requestOptions)
    .then(response => response.text())
    .then(result => {
        return res.status(200).json(result);
        console.log(result);
    })
    .catch(error => console.log('error', error));

    
}