This project is to demonstrate the services and dependency injection

Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.A component should use services for tasks that don't involve the view or application logic. Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console.

Dependency injection (DI) is the part of the Angular framework that provides components with access to services and other resources. Angular provides the ability for you to inject a service into a component to give that component access to the service.

This is a single page application. In this project we have 3 different components which share a common service, which displays an alert message when the button is clicked from respective components.

*Here in this project we created three compontents.
In each component we provided a click button. On clicking the button an alert message will will displayed.
The function for alert is given "info-service.ts".This Transcript file is imported in each "component_name.component.ts" files and link with button.
Hence the message in info-service.ts will be displayed by clicking the button.
