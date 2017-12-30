import $ from 'jquery';

class MobileManu{
	
	constructor(){
		
		this.manuIcon = $('.site-header__menue-icon');
		this.manuContent = $('.site-header__menue-content');
		this.siteHeader= $('.site-header');
		this.events();
	}

	events(){
		this.manuIcon.click(this.toggleTheManu.bind(this));
	}

	toggleTheManu(){
		this.manuContent.toggleClass('site-header__menue-content--is-visible');
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.manuIcon.toggleClass('site-header__menue-icon--close-x');
		
	}

}

export default MobileManu;