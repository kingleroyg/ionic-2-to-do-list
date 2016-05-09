import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {Data} from '../../providers/data/data';
import {NgZone} from 'angular2/core';

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [Data]
})
export class HomePage {
    public items; 

    constructor(public nav: NavController, private dataService: Data, public zone: NgZone) {
        this.nav = nav;
        this.dataService = dataService;
        this.zone = zone;
        this.items = [];

        this.dataService.getData().then((todos) => {
            if (todos) {
                this.zone.run(() => {
                    this.items = JSON.parse(todos);
                });
            }
        });
    }

    addItem() {
        this.nav.push(AddItemPage, { homePage: this });
    }

    viewItem(item) {
        this.nav.push(ItemDetailPage, {
            item: item
        });
    }

    saveItem(item) {
        this.items.push(item);
        this.dataService.save(this.items);
    }
}