import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/add-item/add-item.html',
})
export class AddItemPage {
    public title;
    public description;

    constructor(public nav: NavController, public navParams: NavParams) {

    }

    saveItem() {

        let newItem = {
            title: this.title,
            description: this.description
        };

        this.navParams.get('homePage').saveItem(newItem);
        this.nav.pop();

    }
}
