import $  from 'jquery';
import MobileManu from './modules/MobileManu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/modal'


	var mobileManu = new MobileManu();
	new RevealOnScroll($(".feature-item" ), "85%");
	new RevealOnScroll($(".testimonial"), "60%");
	var stickyHeader = new StickyHeader();

	var modal = new Modal();
	



