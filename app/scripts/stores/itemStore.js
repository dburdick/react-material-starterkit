import Reflux from 'reflux';
import ItemActions from '../actions/itemActions';

var ItemStore = Reflux.createStore({

    init() {
        this.items = [];
        this.showDetailItem = null;

        this.listenTo(ItemActions.loadItems, this.loadItems);
        this.listenTo(ItemActions.loadItemsSuccess, this.loadItemsSuccess);
        this.listenTo(ItemActions.loadItemsError, this.loadItemsError);
        this.listenTo(ItemActions.showItemDetail, this.showItemDetail);
    },

    loadItems() {
        this.trigger({
            loading: true
        });
    },

    loadItemsSuccess(items) {
        this.items = items;

        this.trigger({
            items: this.items,
            loading: false
        });
    },

    loadItemsError(error) {
        this.trigger({
            error: error,
            loading: false
        });
    },

    showItemDetail(item) {
        this.showDetailItem = item;
        this.trigger({
            showDetailItem: this.showDetailItem
        });
    }

});

export default ItemStore;