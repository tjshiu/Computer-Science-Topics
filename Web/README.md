# Web

__Topics__

* [HTTP-Methods](#http---methods)
* [HTTP Status Codes - Top 10 codes](#http-status-codes)
* [HTTP vs HTTPS](#http-vs-https)
* [Difference between localStorage, sessionStorage, session, and cookies](#difference-between-localStorage,-sessionStorage,-session,-and-cookies)
* [XXS](#xss)
* [CSRF](#csrf-attacks)
* [AJAX](#ajax)


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

## HTTP Status Codes

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
* __500 Internal Server Error__ The server encountered an unexpected condition which prevented it from fulfilling the request.

## HTTP vs HTTPS

__HTTP: Clear Text__ Everything that is sent, it would be in the open.
__HTTPS: Encrypted__ (secure) Computer will encrypt the information so that it does not look like any data.

A website that is served by https protocol is encrypted. There is also a certificate that is issued from a valid certificate authority. Because it is encrypted, you know that it hasn't been tampered with. SSL certificates are the certificates for https. You want to have sha-2 to have the proper level of certification because google will no longer serve sha-1.

Key points to know:
__asymmetric key cryptography__ - Even if you can encrypt a message, you can't decrypt it. So let's say you want to lock the box (encrypt a message), but you can't open a closed box (cannot decrypt it).
__public key__ - this is the key to encrypt a message (lock the box)
__private key__ - this is the key to decrypt a message (open a closed box)
__man-in-the-middle attack (MITM)__ - attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating to each other. The attacker must be able to intercept all relevant messages passing between the two victims and inject new ones.

## Difference between localStorage, sessionStorage, session, and cookies

localStorage, sessionStorage, and cookies are all client storage solutions. Session data is held on the server where it remains under your direct control.

| | Cookies | Local Storage | Session Storage |
|---|---|---|---|
| __Capacity__| 4kb | 10mb | 5mb |
| __Browsers__| HTML4 / HTML5 | HTML5 | HTML5|
| __Accessible from__| Any window | Any Window | Same tab|
| __Expires__| Manually set| Never | On tab Close |
| __Storage Location__| Browser and Server | Browser only | Browser only |
| __Sent with Requests__ | Yes | No | No |

### localStorage and sessionStorage

Local storage is best for anything else the cookie does not used. Both the localStorage and sessionStorage are similiar. Both are relatively new APIs. sessionStorage, is only available for the duration of the browser session and is deleted when the tab or window is closed. If you want your data to be available on an ogoing basis then localStorage is preferable to sessionStorage. However, both can be cleared by the user, so it's important to not rely on it's existence for a long time.

Also both are perfect for persisting non-sensitive data needed within client scripts between pages. The data stored in localStorage and sessionStorage can easily be read or changed from within the client/browser so it should not be relied upon for storage of sensitive or security related data within applications.

### Cookies

Cookie information is sent to the server. Cookies is best for data that has to be accessed by the server and the local machine.

## XSS

Cross-Site Scripting Attack (XSS) refers to client-side code injection attack where in an attacker can execute malicious scripts (also commonly referred to as malicious payload) into a legitimate website or web application. XSS is amongst the most rampant of web application vulnerabilities and occurs when a web application makes use of unvalidated or unencoded user input within the output it generates.

XSS uses a legitimate website and inserts script to attack. Thus, this is a direct attack to the user, and they are then able to get vulnerable information. Usually we see these attacks with script being entered in the comments.

XSS attack needs three actors: __the website, the victim__ and __the attacker__.

1. The attacker injects a payload in the website’s database by submitting a vulnerable form with some malicious JavaScript
2. The victim requests the web page from the website
3. The website serves the victim’s browser the page with the attacker’s payload as part of the HTML body.
4. The victim’s browser will execute the malicious script inside the HTML body. In this case it would send the victim’s cookie to the attacker’s server. The attacker now simply needs to extract the victim’s cookie when the HTTP request arrives to the server, after which the attacker can use the victim’s stolen cookie for impersonation.

## CSRF Attacks

Cross Site Request Forgery (CSRF), Sea Surf, or XSRF for short, is considered a sleeping giant in the world of web security. It is the most common attack that is regularly exploited, which is why it has secured its spot on OWASP's top 10 several times in a row. That being said, an exploited Cross-site Scripting vulnerability will always trump any CSRF vulnerability, as CSRF attacks have a major limitation. CSRF only allows for state changes to occur and therefore cannot cater attacks that require the attacker receiving the contents of the HTTP response.  

1. User logs into his bank
2. Bank gives a session token
3. Hacker sends a malicious link, tricking the user to a fake link pointing to the bank
4. User clicks on the link, and hacker has access to session token

What happened? The request to the bank was forged as it used the same session token of the user, which did not require the user to log in again.

Two main parts for executing a CSRF attack, the first part being to trick the victim into clicking a link or loading up a page.
1. Trick the victim into clicking a link or loading up a page.
2. Send a crafted request in the victim's browser, that will send a legitimate looking request to the web application.

CSRF attack takes advantage of the fact that the browser sends the Cookie to the web application automatically with each and every request.

### Prevention

* CSRF Token or a Synchronizer Token - challenge token that is associated with a particular user and can be found as a hidden value in every state changing form
* Same site Cookies - request is being made from the same origin that is related to the Cooking being sent, but not all browsers support this.

## AJAX
AJAX = __A__ syncrhonous __J__ avaScript __A__ nd __X__ ML
_Note that the name is misleading, data can also be transported by plain text or JSON text_

AJAX uses of the XMLHttpRequest object to communicate with servers. It can send and receive information in many formats. The most appealing part of AJAX is that it's "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page. 

* Update a web page without reloading the page
* Request data from a server - after the page has loaded
* Receive data from a server - after the page has loaded
* Send data to a server - in the background
* It is __NOT__ a programming language

AJAX uses a combination of:
* A browser built-in XMLHttpRequest object (to request data from a web server)
* JavaScript and HTML DOM (to display or use the data)

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that is is possible to update parts of a webpage without reloading the whole page.

### How AJAX works:

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server.
4. The server processes the request.
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript
