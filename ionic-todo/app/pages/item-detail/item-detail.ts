import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
export class ItemDetailPage {
    public title;
    public description;

    static get parameters() {
        return [[NavController],[NavParams]];
    }

    constructor(public nav: NavController, public navParam: NavParams) {

        this.title = this.navParam.get('item').title;
        this.description = this.navParam.get('item').description
    }
}
