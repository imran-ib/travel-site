import MobileManu from './modules/MobileManu';
import RevealOnScroll from './modules/RevealOnScroll';
import $  from 'jquery';

var mobileManu = new MobileManu();
new RevealOnScroll($(".feature-item" ), "85%");
new RevealOnScroll($(".testimonial"), "60%");



