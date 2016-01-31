export class App {
    message: string = "Welcome to Aurelia!";
    router: any;
    configureRouter(config, router) {
        config.title = 'Welcome to Aurelia!';
        config.map([
            { 
                route: ['', 'component-sample'], 
                moduleId: 'app/component-sample/component-sample', 
                nav: true, 
                title: 'Component sample' 
            },
            { 
                route: 'binding-sample', 
                moduleId: 'app/binding-sample/binding-sample', 
                nav: true, 
                title: 'Binding sample' 
            }
        ]);
        this.router = router;
    }
}
