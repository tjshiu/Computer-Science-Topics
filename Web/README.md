# Web

## HTTP - Methods
| S.N. | Method and Description | Other Notes|
|---|---|---|
|1 | __GET__ <br> The GET method is used to retrieve information from the given URI. Requests using GET should only retrieve data and should have no other effect on the data | * Main method for document retrieval|
|2 | __HEAD__ <br> Same as GET, but transfers the status line and header section only.| * Note that there is no entity-body. |
|3 | __POST__ <br> A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms. | *Response will be returned |
|4 | __PUT__ <br> Replaces all current representations of the target resource with the uploaded content.|
|5 | __DELETE__ <br> Removes all current representations of the target resource given by a URI.|
|6 | __Connect__ <br> Establishes a tunnel to the server identified by the given URI.|
|7 | __Options__ <br> Describes the communication options for the target resource. |
|8 | __Trace__ <br> Performs a message loop-back test along the path to the target resource

## HTTP Status Codes (TOP 10 Codes)

### 2xx Success
* __200 OK__ General status code and the most common code used to indicate success. The request has succeeded. The information returned with the response is dependent on the method used in the request(method examples: GET, HEAD, POST, TRACE, etc.)
* __201 Created__ The request has been fulfilled and resulted in a new resource being created. Successful creation occurred(via either POST or PUT). Set the Location header to contain a link to the newly-created resource(on POST). Response body content may or may not be present.
* __204 No Content__ The server successfully processed the request, but is not returning any content.

### 3xx Redirection
* __304 Not Modified__ Indicates that the resource has not been modified since last requested. The 304 response MUST NOT contain a message-body and thus is always terminated by the first empty line after the header fields.

### 4xx Client Error
* __400 Bad Request__ The request cannot be understood by the server due to malformed syntax. The client SHOULD NOT repeat teh request without modifications.
* __401 Unauthorized__ The request require user authentication. Similar to 403 Forbidden, but specifically for use when authentication is possible, but has failed or not yet been provided. The 401 response indicates that authorization has been refused for those credentials.
* __403 Forbidden__ The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated. The request was a legal request, but unlike a 401 Unauthorized response, authentication will make no difference.
* __404 Not Found__ The server has not found anything matching the Request-URI. The requested resource could not be found, but may be available again in the future. Commonly used when the server does not wish to reveal exactly why the request has been refused, or when no other response is applicable.
* __409 Conflict__ The request could not be completed due to a conflict with the current state of the resource. The code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request. Ideally, the response body SHOULD include enough information for the user to recognize the source of the conflict.

### 5xx Server Error
* __400 Internal Server Error__ The server encountered an unexpected condition which prevented it from fulfilling the request. 
