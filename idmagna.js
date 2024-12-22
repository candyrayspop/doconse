const data = {
    host: {
        ports: {
            port: [
                {
                    service: {
                        _method: "GET"
                    }
                },
                {
                    service: {
                        _method: "POST"
                    }
                }
            ]
        }
    }
};

// Accessing the _method of the first port
const method = data.host.ports.port[0].service._method;
console.log(method); // Outputs: GET
