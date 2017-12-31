import MobileManu from './modules/MobileManu';
import RevealOnScroll from './modules/RevealOnScroll';
import $  from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileManu = new MobileManu();
new RevealOnScroll($(".feature-item" ), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();



