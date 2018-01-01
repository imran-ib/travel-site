import $  from 'jquery';

class Modal {
	constructor(){
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events(){
		// clicking the open modal button
		
		this.openModalButton.click(this.openTheModal.bind(this));
		// clicking the close x icon

		this.closeModalButton.click(this.closeTheModel.bind(this));
		//pushes the any key

		$(document).keyup(this.keyPreesHandler.bind(this));

	}

	keyPreesHandler(e){
		if (e.keyCode == 27){
			this.closeTheModel();
		}
	}

	openTheModal(){
		this.modal.addClass('modal--is-visible');
		return false;
	}

	closeTheModel(){
		this.modal.removeClass('modal--is-visible');

	}

}

export default Modal;