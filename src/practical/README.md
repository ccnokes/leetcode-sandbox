This is a collection of practical JS/TS/React/Web dev questions and solutions.

https://www.greatfrontend.com/ is a great resource to practice these.

# Random trivia

### Why `Object.create(null)` instead of `{}`?

Avoids issues with prototype inheritance from Object. `{}` gets `toString`, `hasOwnProperty`, etc. So if you're using an object for dynamic data, it removes chances of name collision.
Can also maybe be _slightly_ more performant.

### Explain the difference between GET and POST

GET is used to retrieve data from the server. It is idempotent, meaning repeated requests should have the same effect. GET requests do not have a body but can pass data in the URL via query parameters (URLs are visible so don't pass anything sensitive). Typically designed to be cacheable. Response is typically a 200 if it worked.
Use cases: fetching assets like HTML and images, or JSON data where the request does not change any data on the server.

POST is used to send data to the server, typically for creating or updating resources. It is not idempotent, meaning repeated requests can have different effects. POST requests include a body, and a successful response is often 201 if a new resource is created, or 200 if the action is completed without resource creation. Responses should not be cached.
Use cases: submitting forms, creating new resources, trigger something that inserts something into a database, other side effects like emails or push notifications

### Explain XSS

XSS stands for cross-site scripting which is a serious security vulnerability where attackers inject malicious scripts into web pages, which are then executed in a victim's browser, potentially stealing sensitive data, hijacking sessions, or performing unauthorized actions.

3 main types of XSS:

- stored XSS (script stored on server)
- reflected XSS (injection done via URL params)
- DOM-based XSS (client side script manipulation)

To prevent XSS, web applications must validate and sanitize user input, encode output (e.g., escape HTML characters), implement Content Security Policy (CSP) headers, and use secure coding practices. Additionally, using frameworks that automatically handle escaping, setting cookies with HttpOnly and Secure flags, and keeping dependencies up to date are crucial in mitigating risks.
