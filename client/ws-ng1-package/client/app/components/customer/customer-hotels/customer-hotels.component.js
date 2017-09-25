import template from './customer-hotels.html';
import './customer-hotels.scss';

const customerHomeComponent = {
  template,
  controller: class CustomerHomeComponent {
    constructor($mdMedia, $state, HotelsService) {
      'ngInject';

      this.name = 'Hotels';
      this.$mdMedia = $mdMedia;
      this.$state = $state;
      this.hotelsService = HotelsService;
    }

    get isHotelsListVisible() {
      if (this.$mdMedia('xs')) {
        // Show on small screens
        // only if current state is 'customer.hotels'        
        return this.$state.is('customer.hotels');
      }
      else return true;
    }

    get isHotelDetailsVisible() {
      if (this.$mdMedia('xs')) {
        // Don't show on small screens
        // if current state is 'customer.hotels'
        return !this.$state.is('customer.hotels');
      }
      else return true;
    }

    showDetails(event) {
      this.hotelsService.selectedHotel = event.hotel;
      this.$state.go(
        'customer.hotels.details',
        { hotelId: event.hotel.id }
      );
    }

  }
};

export default customerHomeComponent;