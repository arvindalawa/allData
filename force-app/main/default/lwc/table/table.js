import { LightningElement, track } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import Table from "@salesforce/resourceUrl/Table";
const columns = [
  {
    label: "",
    fieldName: "name",
    type: "text",
    editable: false,
    initialWidth: 150,
    cellAttributes: { class: { fieldName: "bgColor" } },
   
  },
  {
    label: "Overall",
    fieldName: "amount1",
    type: "text",
    editable: true,
    initialWidth: 150,
    cellAttributes: {
      class: { fieldName: "bgColor" },type:'button',iconName:{fieldName:'dynamicIcon'}},
      
 },
  {
    label: "USA",
    fieldName: "amount2",
    type: "text",
    editable: true,
    initialWidth: 150,
    cellAttributes: {
      class: { fieldName: "bgColor" },
      iconName: { type:'button', fieldName: "dynamicIcon",typeAttributes:{title:"info",label:"some"} }
    }
  },
  {
    label: "India",
    fieldName: "amount3",
    type: "text",
    editable: true,
    initialWidth: 150,
    cellAttributes: { class: { fieldName: "bgColor" } },
  },
  {
    label: 'PNR',
    type: 'button',
    initialWidth: 90,
    typeAttributes: {
        iconName: 'utility:info_alt',
        title: 'Preview',
        variant: 'border-filled',
        alternativeText: 'View',
        disabled: false,

    }
  }
];
export default class ColorColumnDataTable extends LightningElement {
  @track data = [];
  @track columns = columns;
  async connectedCallback() {
    // await loadStyle(this, `${Table}/table.css`);
    const data = [];
    data.push({
      name: "Contingency %",
      amount1: "25%",
      amount2: "20%",
      amount3: "20%",
      isSubHeading: false,
      isSpecialDataWithLast: false
    });
    data.push({
      name: "Demo %",
      amount1: "25%",
      amount2: "20%",
      amount3: "20%",
      isSubHeading: false,
      isSpecialDataWithLast: true
    });
    //  data.push({isEmptyRow:true}); //1st approach for blank row
    data.push({ name: "", amount1: "", amount2: "", amount3: ""}); //2st approach for blank row on iteration add class for black row
    data.push({
      name: "Base Amt",
      amount1: "$ 10,000",
      amount2: "$ 20,000",
      amount3: "$ 25,000",
      isSubHeading: true
    });
    data.push({
      name: "COLA Pass Amt ",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: false,
      dynamicIcon: "info_alt"
    });
    data.push({
      name: "Contingency Amt",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: false
    });
    data.push({
      name: "Adjusted Amt",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: true
    });
    data.push({
      name: "Disc Amt",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: false
    });
    data.push({
      name: "Quoted Amt",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: true
    });
    data.push({
      name: "Total Base Cost",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: true,
      
    });
    data.push({
      name: "COLA Cost Adj",
      amount1: "",
      amount2: "",
      amount3: "",
      isSubHeading: false
    });
    data.push({
      name: "Margin %",
      amount1: "",
      amount2: "  ",
      amount3: "",
      isSubHeading: true
    });
    this.data = data;
    console.log(this.columns[0].tooltip)
    this.setHeading(); //pdata push with the help of function not like that
  }
  setHeading() {
    this.data.forEach((element, index) => {
      if (element.isSubHeading) {
        //either we can check isSUbHeading is true/false
        element = { ...element, bgColor: "bgColor",};
        this.data[index] = element;
      }
      if (element.isSpecialDataWithLast) {
        element = { ...element, bgColor: "specialData" };
        this.data[index] = element;
      }
      // if(element.isEmptyRow){
      //   element = { ...element, bgColor: "emptyRow"};
      //   this.data[index] = element;
      // } //1st approach to check key in data
      if (
        element.name === "" &&
        element.amount1 === "" &&
        element.amount2 === "" &&
        element.amount3 === ""
      ) {
        element = { ...element, bgColor: "emptyRow" };
        this.data[index] = element;
      } else if (element.amount1 !== "") {
        element = { ...element, dynamicIcon: "utility:info_alt", };
        this.data[index] = element;
      } //info icon for having data in object
    });
  }
}
