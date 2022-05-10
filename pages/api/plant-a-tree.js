export default function handler(req, res) {
 

    if ( req.method === 'GET' || req.method === 'POST' ) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "WnfoBULMDxGmzu2VtYLEow2qBowmdppbfpGSlfpncOnVoVzwPwsELlLpQvW1cuAL");

        var raw = JSON.stringify({
            "recipients": [
                {
                    "name": "Alex Cavender",
                    "email": "alex@alexcavender.com"
                },
            ],
            "planter_id": 148877,
            "species_id": 1985,
            "quantity": 1,
            "message": "Thank you for planting a tree!"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        

        fetch("https://tree-nation.com/api/plant", requestOptions)
            .then(response => response.text())
            .then(result => {
                return res.status(200).json(result);
            })
    }

    // if ( req.method === 'GET' ) {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };
          
    //     fetch("https://tree-nation.com/api/projects?status=active", requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //         return res.status(200).json(result);
    //         console.log(result);
    //     })
    //     .catch(error => console.log('error', error));
    // }
    
}