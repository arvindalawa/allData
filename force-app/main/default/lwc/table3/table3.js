import { LightningElement } from 'lwc';
import { loadStyle } from "lightning/platformResourceLoader";
import table from "@salesforce/resourceUrl/table";

export default class Table3 extends LightningElement {
    renderedCallback(){
        if (!this.stylesLoaded) {
            Promise.all([loadStyle(this, table)])
                .then(() => {
                    console.log("Custom styles loaded");
                    this.stylesLoaded = true;
                })
                .catch((error) => {
                    console.error("Error loading custom styles",error);
                });
        }
    }
}