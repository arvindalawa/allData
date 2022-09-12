import { LightningElement, api, track } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import ProvusStyles from '@salesforce/resourceUrl/ProvusStyles';
import { data } from './avatarGroup-data';

export default class AvatarGroup extends LightningElement {
@api initials;
@api backgroundColor;
@api variant;
@api fallbackIcon;
@api image;
@api altText;
@api className;
@api size;
@api avatar = [];
@track result;

connectedCallback() {
	this.avatar = data;
	this.getCount();

	if (this.avatar.length >= 3) {
		this.avatar.length = 3;
	} else
	if (this.avatar.length === 2) {
		this.avatar.length = 2;
	} else
	if (this.avatar.length === 1) {
		this.avatar.length = 1;
	}
}
async renderedCallback() {
	await loadStyle(this, `${ProvusStyles}/avatarGroup.css`);
}

// getCount will return the remaining count of data if count of Avatar component is more than 3
getCount() {
	if (this.avatar.length > 3) {
		this.result = `+${this.avatar.length - 3}`;
	} else {
		this.result = '';
	}
}
}
