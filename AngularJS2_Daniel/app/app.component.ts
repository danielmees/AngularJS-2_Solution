import {Component} from 'angular2/core';

export class Item {
    price: string;
    agency:{
        brandingColors:{
            primary: string;
        },
        brandName: string;
    };
    id: string; 
}

@Component({
    selector: 'my-app',
    template:`
        <div class="results_items">
            <ul *ngFor="#item of results" [style.background]=item.agency.brandingColors.primary>
                <li><span>{{item.agency.brandName}}</span></li>
                <li><span><button (click)="AddItem(item)">Save</button></span></li>
                <li><span>{{item.price}}</span></li>
            </ul>
        </div>
        <div class="saved_items">
            <ul *ngFor="#item of saved" [style.background]=item.agency.brandingColors.primary>
                <li><span>{{item.agency.brandName}}</span></li>
                <li><span><button (click)="RemoveItem(item)">Delete</button></span></li>
                <li><span>{{item.price}}</span></li>
            </ul>
        </div>
    `,
    styles:[`
        .results_items{
            width:150px;
            height:500px;
            margin:50px 20px 20px 250px;
            float:left;
            background:lightgrey;
            border-radius:10px;
        }
        .saved_items{
            width:150px;
            height:500px;
            margin:50px 250px 20px 20px;
            float:right;
            background:lightgrey;
            border-radius:10px;
        }
        ul{
            margin:10px;
            border-radius:10px;
        }
        li{   
            list-style:none;
            width:100px;
            height:50px;    
        }
        ul li span {
            height: 50px;
            display:table-cell;
            vertical-align: middle;   
        }
    `]
})

export class AppComponent {
    results = results;
    saved = saved;
  
    AddItem(item){
        var item_exist = 0;    
        for(var i = 0; i < this.saved.length; i++)
        {
            if(item.id == this.saved[i].id){
                item_exist = 1;    
            }         
        }
        if(!item_exist){
            this.saved.push(item);
        }
    }
    
    RemoveItem(item){
           this.saved.splice(this.saved.indexOf(item),1);
    }   
}

var results: Item[] = [{
		"price": "$726,500",
		"agency": {
			"brandingColors": {
				"primary": "#ffe512"
			},
			"brandName": "Raywhite"
		},
		"id": "1"
	},             
    {
		"price": "$560,520",
		"agency": {
			"brandingColors": {
				"primary": "#fcfa3b"
			},
			"brandName": "Harcourt"
		},
		"id": "2"
	},             
    {
		"price": "$826,500",
		"agency": {
			"brandingColors": {
				"primary": "#57B5E0"
			},
			"brandName": "21Century"
		},
		"id": "3"
	}];

var saved: Item[] = [{
		"price": "$726,500",
		"agency": {
			"brandingColors": {
				"primary": "#ffe512"
			},
			"brandName": "Raywhite"
		},
		"id": "1"
	}];