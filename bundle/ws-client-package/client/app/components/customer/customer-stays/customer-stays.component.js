import template from './customer-stays.html';
import './customer-stays.scss';

const customerStaysComponent = {
  bindings: {
    stays: '<',
  },
  template,
  controller: class CustomerStaysComponent {
    constructor(StaysService) {
      'ngInject';

      this.name = 'My Bookings';
      this.staysService = StaysService;
    }

    // $onInit() {
    //   this.stays = this.staysService.get();
    // }

    get isEditMode() {
      return this.stays.some(stay => stay.isEditing == true);
    }

    getLikesIcon(stay) {
      if (stay.review && stay.review.likes_count > 0) {
        return "favorite";
      }
      else return "favorite_border";
    }

    editStay(stay) {
      stay.isEditing = true;
    }

    saveStay($event) {
      this.staysService.save($event.stay).then(
        (result) => {
          let modified = this.stays.find(stay => stay.id == result.id)
          Object.assign(modified, result);
          modified.isEditing = false;
        });
    }
  }
};

export default customerStaysComponent;