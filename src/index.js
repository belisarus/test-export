/** start the app :) */
function bootstrap() {
    customerSpecialFeature();
    customerSpecialFeature2();
    return "it's started!"
}

function customerSpecialFeature(){
    console.log('customer feature 1 added from cust-delivery');
}

function customerSpecialFeature2(){
    console.log('customer feature 2 added from cust-feature-2');
}

bootstrap();