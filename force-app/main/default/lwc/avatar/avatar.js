import { LightningElement, api } from 'lwc';

export default class Avatar extends LightningElement {
@api initials;
@api backgroundColor = 'Blue';
@api variant = 'circle';
@api fallbackIcon = 'standard:avatar';
@api image = '/bad/image/url.jpg';
@api altText = 'Avatar';
@api className = 'slds-m-right_small';
@api size = 'medium';

connectedCallback() {
	this.getColor(this.backgroundColor);
}
// getColor is a function which will change the background color according to properties
getColor(backgroundColor) {
	if (backgroundColor === 'Yellow') {
		this.backgroundColor = 'provus-avatar-fallback-color--yellow';
	} else
	if (backgroundColor === 'Grey') {
		this.backgroundColor = 'provus-avatar-fallback-color--grey';
	} else
	if (backgroundColor === 'Purple') {
		this.backgroundColor = 'provus-avatar-fallback-color--purple';
	} else
	if (backgroundColor === 'Blue') {
		this.backgroundColor = 'provus-avatar-fallback-color--blue';
	} else {
		this.backgroundColor = 'provus-avatar-fallback-color--blue';
	}
}
}
